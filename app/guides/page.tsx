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

      {/* Application process callouts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <Link
          href="/guides/application-process"
          className="block bg-accent-50 border border-accent-200 rounded-xl p-5 hover:bg-accent-100 transition-colors"
        >
          <h2 className="font-bold text-navy-900 mb-1">
            Step-by-Step Application Guide
          </h2>
          <p className="text-sm text-navy-600">
            New to USPS? Start here. The full process from application to your
            first day at orientation.
          </p>
        </Link>
        <Link
          href="/guides/hiring-pipeline"
          className="block bg-amber-50 border border-amber-200 rounded-xl p-5 hover:bg-amber-100 transition-colors"
        >
          <h2 className="font-bold text-navy-900 mb-1">
            Hiring Pipeline Tracker
          </h2>
          <p className="text-sm text-navy-600">
            Already applied? Find out what your application status actually means
            and what to expect next.
          </p>
        </Link>
        <Link
          href="/guides/ecareer-guide"
          className="block bg-navy-50 border border-navy-200 rounded-xl p-5 hover:bg-navy-100 transition-colors"
        >
          <h2 className="font-bold text-navy-900 mb-1">
            eCareer Portal Walkthrough
          </h2>
          <p className="text-sm text-navy-600">
            Applying for RCA, maintenance, or driving? The eCareer portal is
            confusing — this guide walks you through it.
          </p>
        </Link>
      </div>

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
