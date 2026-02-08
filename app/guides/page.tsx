import type { Metadata } from "next";
import JobCard from "@/components/JobCard";
import { JOB_TYPES } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "USPS Job Guides",
  description:
    "Comprehensive guides for every USPS job type. Learn about CCA, RCA, MHA, PSE, maintenance, and driving positions.",
};

export default function GuidesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-navy-900 mb-3">USPS Job Guides</h1>
      <p className="text-navy-600 mb-8 max-w-2xl">
        Everything you need to know about applying to USPS. Choose a job type
        below to read the full guide, or check out our step-by-step application
        walkthrough.
      </p>

      {/* Application process callout */}
      <Link
        href="/guides/application-process"
        className="block bg-accent-50 border border-accent-200 rounded-xl p-5 mb-8 hover:bg-accent-100 transition-colors"
      >
        <h2 className="font-bold text-navy-900 mb-1">
          Step-by-Step Application Guide
        </h2>
        <p className="text-sm text-navy-600">
          New to USPS? Start here. We walk through the entire application
          process from creating your profile to your first day at orientation.
        </p>
      </Link>

      {/* Job type cards */}
      <h2 className="text-xl font-bold text-navy-900 mb-4">
        Guides by Job Type
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {JOB_TYPES.map((job) => (
          <JobCard key={job.slug} job={job} />
        ))}
      </div>
    </div>
  );
}
