"use client";

export default function Hero() {
  return (
    <section className="bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Navigate USPS Hiring Without the Confusion
          </h1>
          <p className="text-lg md:text-xl text-navy-200 mb-6 leading-relaxed">
            AI-powered guidance from someone who&apos;s actually been through it. Ask
            anything about applying to USPS.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 text-sm text-navy-300 bg-navy-800 rounded-full px-3 py-1">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Built by a current USPS carrier
            </span>
            <span className="inline-flex items-center text-sm text-navy-300 bg-navy-800 rounded-full px-3 py-1">
              Helped 500K+ people on social media
            </span>
          </div>
          <ChatCTA />
        </div>
      </div>
    </section>
  );
}

function ChatCTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button
        onClick={() => {
          // Find and click the chat bubble
          const chatButton = document.querySelector(
            'button[aria-label="Open chat"]'
          ) as HTMLButtonElement;
          if (chatButton) chatButton.click();
        }}
        className="inline-flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-base"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.243-1.26c.7.136 1.428.21 2.196.21 4.31 0 8-3.033 8-7s-3.69-7-8-7z"
            clipRule="evenodd"
          />
        </svg>
        Ask the AI Assistant
      </button>
      <a
        href="/guides"
        className="inline-flex items-center justify-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-medium px-6 py-3 rounded-xl transition-colors text-base border border-navy-600"
      >
        Browse Guides
      </a>
    </div>
  );
}
