import type { Metadata } from "next";
import { DISCLAIMER } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about USPS Jobs Helper and Sam, the current USPS carrier behind it.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-navy-900 mb-6">
        About USPS Jobs Helper
      </h1>

      <div className="prose prose-navy max-w-none">
        <h2>The Problem</h2>
        <p>
          If you&apos;ve ever tried to apply for a job at USPS, you know how
          confusing it is. There are multiple application websites, cryptic job
          titles, assessment exams that nobody explains, and a hiring process
          that can take months with little communication along the way.
        </p>
        <p>
          People end up in Reddit threads and Facebook groups, piecing together
          outdated information from strangers. They apply on the wrong website,
          miss assessment deadlines, or give up entirely because they can&apos;t
          figure out what &quot;Pre-Hire List&quot; means.
        </p>

        <h2>The Solution</h2>
        <p>
          USPS Jobs Helper is an AI-powered assistant that answers your USPS
          hiring questions instantly. It&apos;s trained on real, firsthand knowledge
          from a current USPS carrier — not corporate marketing copy.
        </p>
        <p>
          Ask it anything: which website to apply on, what the assessment exam
          is like, how long it takes to convert to career, whether you need
          your own vehicle — all the questions that trip people up.
        </p>

        <h2>About Sam</h2>
        <p>
          Sam is a current USPS City Carrier Assistant (CCA). He&apos;s been through the entire USPS
          hiring process himself and has spent years helping others navigate it
          through his content.
        </p>
        <p>
          After receiving thousands of DMs asking the same questions — &quot;How do
          I apply?&quot;, &quot;What&apos;s the difference between CCA and RCA?&quot;, &quot;Is USPS
          hiring right now?&quot; — he built this tool to scale that help.
        </p>
        <p>
          Everything in the chatbot&apos;s knowledge base comes from Sam&apos;s direct
          experience as a postal worker and from the USPS community at large.
        </p>

        <h2>Disclaimer</h2>
        <p>{DISCLAIMER}</p>
      </div>
    </div>
  );
}
