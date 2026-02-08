"use client";

import Link from "next/link";
import { APPLICATION_SITES } from "@/lib/constants";

interface GuideLayoutProps {
  title: string;
  abbreviation: string;
  applySite: keyof typeof APPLICATION_SITES;
  children: React.ReactNode;
}

export default function GuideLayout({
  title,
  abbreviation,
  applySite,
  children,
}: GuideLayoutProps) {
  const site = APPLICATION_SITES[applySite];

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <nav className="mb-6 text-sm">
        <Link href="/guides" className="text-accent-600 hover:text-accent-700">
          Guides
        </Link>
        <span className="text-navy-400 mx-2">/</span>
        <span className="text-navy-600">{abbreviation}</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">
        {title}
      </h1>
      <p className="text-navy-500 mb-8">
        Everything you need to know about becoming a {title} at USPS.
      </p>

      {/* Apply CTA */}
      <div className="bg-accent-50 border border-accent-200 rounded-xl p-4 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="font-semibold text-navy-900 text-sm">
              Ready to apply?
            </p>
            <p className="text-sm text-navy-600">
              {abbreviation} applications are on {site.name}
            </p>
          </div>
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 bg-accent-500 hover:bg-accent-600 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm whitespace-nowrap"
          >
            Apply Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M4.22 11.78a.75.75 0 010-1.06L9.44 5.5H5.75a.75.75 0 010-1.5h5.5a.75.75 0 01.75.75v5.5a.75.75 0 01-1.5 0V6.56l-5.22 5.22a.75.75 0 01-1.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Guide content */}
      <div className="prose prose-navy max-w-none">{children}</div>

      {/* Bottom CTA */}
      <div className="mt-12 border-t border-navy-200 pt-8">
        <h3 className="font-bold text-navy-900 mb-3">
          Have more questions about {abbreviation}?
        </h3>
        <p className="text-sm text-navy-600 mb-4">
          Use our AI assistant to get instant answers about the {title}{" "}
          position, application process, and more.
        </p>
        <button
          onClick={() => {
            const chatButton = document.querySelector(
              'button[aria-label="Open chat"]'
            ) as HTMLButtonElement;
            if (chatButton) chatButton.click();
          }}
          className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-medium px-5 py-2.5 rounded-xl transition-colors text-sm"
        >
          Ask the AI Assistant
        </button>
      </div>
    </article>
  );
}
