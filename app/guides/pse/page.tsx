import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Postal Support Employee (PSE) Guide",
  description:
    "Complete guide to becoming a USPS Postal Support Employee. Learn about PSE Sales & Services vs Mail Processing, pay, schedule, assessment exam, and conversion to career.",
};

export default function PSEGuidePage() {
  return (
    <GuideLayout
      title="Postal Support Employee"
      abbreviation="PSE"
      applySite="jobsUsps"
    >
      {/* Secondary apply CTA for Mail Processing */}
      <div className="not-prose bg-navy-50 border border-navy-200 rounded-xl p-4 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="font-semibold text-navy-900 text-sm">
              Applying for PSE Mail Processing?
            </p>
            <p className="text-sm text-navy-600">
              Mail Processing positions are on the eCareer Portal, not
              jobs.usps.com
            </p>
          </div>
          <a
            href="https://wp1-ext.usps.gov/sap/bc/webdynpro/sap/hrrcf_a_unreg_job_search"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 bg-navy-700 hover:bg-navy-800 text-white font-medium px-4 py-2 rounded-lg transition-colors text-sm whitespace-nowrap"
          >
            eCareer Portal
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

      <h2>What is a PSE?</h2>
      <p>
        A Postal Support Employee (PSE) is a non-career position at USPS. There
        are actually <strong>two types</strong> of PSE, and they&apos;re very
        different jobs:
      </p>
      <h3>PSE Sales &amp; Services/Distribution Associate</h3>
      <p>
        This is the retail window clerk. You work at the post office counter
        selling stamps, shipping packages, helping customers with services, and
        sorting mail. It&apos;s customer-facing — you&apos;re the person people
        see when they walk into the post office.
      </p>
      <h3>PSE Mail Processing Clerk</h3>
      <p>
        This is a behind-the-scenes role at mail processing plants. You sort
        mail using automated equipment or manual methods. No customer
        interaction — you&apos;re in a plant environment working with machines
        and mail. Plants run 24/7, so expect overnight shifts.
      </p>

      <h2>Pay and Benefits</h2>
      <ul>
        <li>
          <strong>Starting pay:</strong> ~$19.62/hour (verify current rate on
          USPS website, rates are updated periodically)
        </li>
        <li>
          <strong>Overtime:</strong> Available, especially during peak season
          (holidays). Time and a half after 8 hours/day or 40 hours/week.
        </li>
        <li>
          <strong>Benefits:</strong> Non-career initially — limited benefits.
          Health insurance available after a qualifying period. Full benefits
          (retirement, TSP, comprehensive health) come after conversion to
          career.
        </li>
      </ul>

      <h2>Schedule</h2>
      <ul>
        <li>No set schedule — on-call, similar to CCA</li>
        <li>Can include nights, weekends, and holidays</li>
        <li>
          <strong>Mail Processing PSEs</strong> often work overnight shifts since
          plants run 24/7. Most new hires start on{" "}
          <strong>Tour 1 (overnight, ~11 PM – 7:30 AM)</strong> or Tour 3
          (evening, ~3 PM – 11:30 PM).
        </li>
        <li>
          <strong>Sales &amp; Services PSEs</strong> work during post office
          retail hours, but hours can still vary
        </li>
      </ul>
      <div className="not-prose bg-amber-50 border border-amber-200 rounded-xl p-4 my-4">
        <p className="text-sm text-navy-700">
          <strong>Heads up:</strong> USPS calls shifts &quot;tours.&quot; If
          you&apos;re applying for Mail Processing, expect to work nights
          initially — that&apos;s when most mail gets processed.{" "}
          <a
            href="/guides/application-process#understanding-work-tours-shifts"
            className="text-accent-600 hover:text-accent-700 font-medium"
          >
            Read our full guide on work tours
          </a>{" "}
          to understand Tour 1, 2, and 3.
        </p>
      </div>

      <h2>Vehicle Requirements</h2>
      <p>
        No personal vehicle needed for the job itself. You work at a post office
        or processing plant — no driving routes.
      </p>

      <h2>Where to Apply</h2>
      <p>
        This is important — the two PSE types are on{" "}
        <strong>different application websites</strong>:
      </p>
      <ul>
        <li>
          <strong>PSE Sales &amp; Services:</strong>{" "}
          <a
            href="https://jobs.usps.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            jobs.usps.com
          </a>
        </li>
        <li>
          <strong>PSE Mail Processing:</strong>{" "}
          <a
            href="https://wp1-ext.usps.gov/sap/bc/webdynpro/sap/hrrcf_a_unreg_job_search"
            target="_blank"
            rel="noopener noreferrer"
          >
            USPS eCareer Portal
          </a>
        </li>
      </ul>
      <p>
        If you&apos;re looking for PSE Mail Processing and can&apos;t find it on
        jobs.usps.com — that&apos;s why. It&apos;s on the other site.
      </p>

      <h2>Assessment Exam</h2>
      <ul>
        <li>
          <strong>PSE Sales &amp; Services:</strong> VEA 476
        </li>
        <li>
          <strong>PSE Mail Processing:</strong> VEA 475
        </li>
        <li>
          Same format as the CCA assessment — situational judgment,
          personality-based, multiple choice
        </li>
        <li>Scored 0-100, passing is 70+</li>
        <li>Taken online from home</li>
        <li>Can retake after a waiting period if you don&apos;t pass</li>
      </ul>

      <h2>Conversion to Career</h2>
      <ul>
        <li>
          Approximately <strong>~2 years</strong> to convert to career (varies by
          office and staffing needs)
        </li>
        <li>Converts to career clerk position</li>
        <li>
          Career = full benefits, set schedule, retirement, TSP, much stronger
          job security
        </li>
      </ul>

      <h2>Probation</h2>
      <p>
        First <strong>90 days</strong> are probation. Same rules as every other
        non-career position:
      </p>
      <ul>
        <li>Don&apos;t call out unless it&apos;s a genuine emergency</li>
        <li>Be on time every day</li>
        <li>Follow instructions and be reliable</li>
        <li>
          You can be let go without cause during this period — don&apos;t give
          them a reason
        </li>
      </ul>

      <h2>Pros and Cons</h2>
      <h3>Pros</h3>
      <ul>
        <li>No personal vehicle needed</li>
        <li>Indoor work (especially Mail Processing)</li>
        <li>
          Sales &amp; Services gives customer service experience and variety
        </li>
        <li>Path to career clerk position with full benefits</li>
        <li>
          Less physically demanding than carrying mail routes (no walking 10+
          miles a day)
        </li>
      </ul>
      <h3>Cons</h3>
      <ul>
        <li>Unpredictable schedule, especially early on</li>
        <li>
          Mail Processing shifts are often overnight — tough on your sleep
          schedule
        </li>
        <li>Sorting work can be repetitive</li>
        <li>Non-career pay and benefits initially</li>
        <li>
          Sales &amp; Services means dealing with frustrated customers at times
        </li>
      </ul>

      <h2>Tips from Experience</h2>
      <ul>
        <li>
          If you want to avoid customer interaction, go for{" "}
          <strong>Mail Processing</strong>. If you like working with people, go
          for <strong>Sales &amp; Services</strong>.
        </li>
        <li>
          Mail Processing PSEs often get more hours because plants run around the
          clock
        </li>
        <li>
          The assessment is the same format for both — study the same way you
          would for CCA
        </li>
        <li>
          Conversion time varies a lot by location — ask around at your local
          office if you can
        </li>
        <li>
          Once you convert to career clerk, the schedule and benefits are solid
        </li>
      </ul>
    </GuideLayout>
  );
}
