import Hero from "@/components/Hero";
import JobCard from "@/components/JobCard";
import AdUnit from "@/components/AdUnit";
import { JOB_TYPES } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <Hero />

      {/* How It Works */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-900 text-center mb-10">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Step
              number="1"
              title="Tell us what job you're interested in"
              description="CCA, RCA, MHA, PSE, maintenance, driving — we cover all USPS positions."
            />
            <Step
              number="2"
              title="Get directed to the right application site"
              description="USPS has multiple application portals. We'll point you to the correct one."
            />
            <Step
              number="3"
              title="Follow our step-by-step guidance"
              description="From application to orientation, get insider tips from a current carrier."
            />
          </div>
        </div>
      </section>

      {/* Ad Unit */}
      <div className="bg-navy-50 border-t border-navy-100">
        <div className="max-w-6xl mx-auto px-4">
          <AdUnit slot="1234567890" format="horizontal" />
        </div>
      </div>

      {/* Job Types */}
      <section className="py-14 bg-navy-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-900 text-center mb-3">
            USPS Job Types
          </h2>
          <p className="text-navy-600 text-center mb-10 max-w-2xl mx-auto">
            Not sure which position is right for you? Here&apos;s a quick overview of
            the most common USPS jobs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {JOB_TYPES.map((job) => (
              <JobCard key={job.slug} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* Ad Unit */}
      <div className="bg-white border-t border-navy-100">
        <div className="max-w-6xl mx-auto px-4">
          <AdUnit slot="1234567890" format="horizontal" />
        </div>
      </div>

      {/* Social Proof */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy-900 mb-3">
            Built by Someone Who&apos;s Been Through It
          </h2>
          <p className="text-navy-600 max-w-2xl mx-auto mb-8">
            Sam is a current USPS City Carrier Assistant. After answering
            thousands of DMs about the USPS hiring process, he built this tool
            to help everyone navigate the system.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-navy-50 rounded-xl px-6 py-4 border border-navy-200">
              <div className="text-2xl font-bold text-navy-900">1000s</div>
              <div className="text-sm text-navy-500">Questions answered</div>
            </div>
            <div className="bg-navy-50 rounded-xl px-6 py-4 border border-navy-200">
              <div className="text-2xl font-bold text-navy-900">Active CCA</div>
              <div className="text-sm text-navy-500">Current USPS employee</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-10 h-10 bg-accent-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
        {number}
      </div>
      <h3 className="font-semibold text-navy-900 mb-2">{title}</h3>
      <p className="text-sm text-navy-600 leading-relaxed">{description}</p>
    </div>
  );
}
