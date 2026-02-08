import { REDDIT_SUBREDDITS } from "./constants";

interface RedditPost {
  title: string;
  selftext: string;
  subreddit: string;
  score: number;
  num_comments: number;
  created_utc: number;
}

interface RedditComment {
  body: string;
  score: number;
}

// Keywords that suggest Reddit context would be helpful
const REDDIT_TRIGGER_PATTERNS = [
  /how is .* office/i,
  /hiring (right )?now/i,
  /orientation (really )?like/i,
  /worth (becoming|being|it)/i,
  /how long.*(conversion|convert|career)/i,
  /experience at/i,
  /what('s| is) it (really )?like/i,
  /anyone (in|at|from)/i,
  /current(ly)?/i,
  /recently/i,
  /latest/i,
];

// Keywords that suggest built-in knowledge is sufficient
const SKIP_REDDIT_PATTERNS = [
  /what is a (cca|rca|mha|pse|arc)/i,
  /where do i apply/i,
  /how do i apply/i,
  /what('s| is) the (drug test|background check)/i,
  /difference between/i,
  /do i need (a |my )?(own )?(car|vehicle)/i,
];

export function shouldSearchReddit(message: string): boolean {
  // Skip if the message matches basic knowledge patterns
  for (const pattern of SKIP_REDDIT_PATTERNS) {
    if (pattern.test(message)) return false;
  }

  // Search if the message matches Reddit-helpful patterns
  for (const pattern of REDDIT_TRIGGER_PATTERNS) {
    if (pattern.test(message)) return true;
  }

  // Default: don't search for short/basic questions
  return message.split(" ").length > 8;
}

export async function searchReddit(query: string): Promise<string> {
  const results: string[] = [];

  for (const subreddit of REDDIT_SUBREDDITS.slice(0, 2)) {
    try {
      const url = `https://www.reddit.com/r/${subreddit}/search.json?q=${encodeURIComponent(
        query
      )}&restrict_sr=1&sort=relevance&t=year&limit=3`;

      const response = await fetch(url, {
        headers: {
          "User-Agent": "USPSJobsHelper/1.0",
        },
      });

      if (!response.ok) continue;

      const data = await response.json();
      const posts: RedditPost[] = data?.data?.children
        ?.map((child: { data: RedditPost }) => child.data)
        ?.slice(0, 3) || [];

      for (const post of posts) {
        let postContext = `[r/${post.subreddit}] "${post.title}"`;
        if (post.selftext && post.selftext.length > 0) {
          postContext += `\n${post.selftext.slice(0, 300)}`;
        }

        // Try to get top comments
        try {
          const commentsUrl = `https://www.reddit.com/r/${subreddit}/comments/${getPostId(post)}.json?limit=3&sort=top`;
          const commentsResponse = await fetch(commentsUrl, {
            headers: { "User-Agent": "USPSJobsHelper/1.0" },
          });

          if (commentsResponse.ok) {
            const commentsData = await commentsResponse.json();
            const comments: RedditComment[] =
              commentsData?.[1]?.data?.children
                ?.filter((c: { kind: string }) => c.kind === "t1")
                ?.map((c: { data: RedditComment }) => c.data)
                ?.slice(0, 2) || [];

            for (const comment of comments) {
              if (comment.body && comment.score > 1) {
                postContext += `\nTop reply (${comment.score} upvotes): ${comment.body.slice(0, 200)}`;
              }
            }
          }
        } catch {
          // Skip comments if fetch fails
        }

        results.push(postContext);
      }

      // Rate limit: wait between subreddit requests
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch {
      // Skip subreddit if fetch fails
    }
  }

  if (results.length === 0) return "";

  return `\n\n[REDDIT CONTEXT]\nRecent discussions from USPS subreddits:\n${results.join("\n---\n")}`;
}

function getPostId(post: RedditPost): string {
  // Reddit post objects include an id field, but our type doesn't capture it
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (post as any).id || "";
}
