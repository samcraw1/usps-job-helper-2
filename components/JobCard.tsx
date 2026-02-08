import Link from "next/link";
import { JobType, APPLICATION_SITES } from "@/lib/constants";

interface JobCardProps {
  job: JobType;
}

export default function JobCard({ job }: JobCardProps) {
  const site = APPLICATION_SITES[job.applySite];

  return (
    <Link
      href={`/guides/${job.slug}`}
      className="block bg-white border border-navy-200 rounded-xl p-5 hover:shadow-md hover:border-navy-300 transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-bold text-navy-900 group-hover:text-accent-600 transition-colors">
          {job.abbreviation}
        </h3>
        {job.vehicleRequired && (
          <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 rounded-full px-2 py-0.5">
            Own vehicle needed
          </span>
        )}
      </div>
      <p className="text-sm text-navy-600 mb-3">{job.description}</p>
      <div className="space-y-1.5 text-xs text-navy-500">
        <div className="flex items-center gap-2">
          <span className="font-medium text-navy-700">Pay:</span>
          {job.pay}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-navy-700">Career:</span>
          {job.conversionTime}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-navy-700">Apply:</span>
          {site.name}
        </div>
      </div>
    </Link>
  );
}
