import type { Metadata } from "next";
import Link from "next/link";
import PipelineTracker from "@/components/PipelineTracker";
import WhereAmI from "@/components/WhereAmI";

export const metadata: Metadata = {
  title: "USPS Hiring Pipeline: What Your Application Status Actually Means",
  description:
    "The step-by-step breakdown of the USPS hiring process nobody explains. Understand Pre-Hire List, Hiring List, Selection List, Offer Phase, and every stage from application to orientation.",
  keywords: [
    "USPS pre-hire list",
    "USPS hiring process",
    "USPS application status",
    "USPS offer phase ext",
    "USPS hiring list",
    "USPS selection list",
  ],
};

export default function HiringPipelinePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      <nav className="mb-6 text-sm">
        <Link
          href="/guides"
          className="text-accent-600 hover:text-accent-700"
        >
          Guides
        </Link>
        <span className="text-navy-400 mx-2">/</span>
        <span className="text-navy-600">Hiring Pipeline</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">
        USPS Hiring Pipeline
      </h1>
      <p className="text-navy-500 mb-8">
        The step-by-step breakdown nobody at USPS will explain to you. Click any
        stage to jump to the details.
      </p>

      {/* Visual Pipeline Tracker */}
      <PipelineTracker />

      {/* Where Am I? Interactive Section */}
      <WhereAmI />

      <div className="prose prose-navy max-w-none">
        {/* Stage 1 */}
        <h2 id="stage-1">Stage 1: Application Received / Pre-Screening</h2>
        <p>
          You submitted the application. USPS is checking basic eligibility —
          age, citizenship, work history. This is automatic. If you filled
          everything out correctly, you move on.
        </p>
        <ul>
          <li>
            <strong>Typical wait:</strong> 1-3 days
          </li>
        </ul>

        {/* Stage 2 */}
        <h2 id="stage-2">Stage 2: Assessment / Exam</h2>
        <p>
          You&apos;ll be invited to take the assessment for your position:
        </p>
        <ul>
          <li><strong>VEA 474</strong> — CCA (City Carrier Assistant)</li>
          <li>
            <strong>VEA 475</strong> — MHA (Mail Handler Assistant) and PSE Mail
            Processing
          </li>
          <li><strong>VEA 476</strong> — PSE Sales &amp; Services</li>
          <li><strong>VEA 477</strong> — RCA (Rural Carrier Associate)</li>
          <li><strong>Exam 916</strong> — Laborer Custodial</li>
          <li>
            <strong>Exam 955</strong> — Maintenance Mechanic, MPE, Electronic
            Technician
          </li>
          <li><strong>Exam 944</strong> — Tractor Trailer Operator (TTO)</li>
        </ul>
        <p>
          Score <strong>70+</strong> to pass. Higher score = higher on the list =
          faster you get looked at.
        </p>
        <p>
          VEA exams are personality/situational judgment based — no studying
          needed, just answer honestly. Exams 916, 955, and 944 test actual
          technical knowledge — you <strong>should</strong> study for these.
        </p>
        <p>
          <strong>The exam and application are FREE.</strong> Anyone charging you
          money is a scam. Report them to the Postal Inspection Service.
        </p>
        <ul>
          <li>
            <strong>Typical wait:</strong> 1-7 days for the invite, then
            complete it within 7 days of receiving it
          </li>
        </ul>

        {/* Stage 3 */}
        <h2 id="stage-3">Stage 3: Pre-Hire List</h2>
        <p>
          You passed the exam. You&apos;re now in the candidate pool.
        </p>
        <p>
          <strong>
            THIS IS NOT A JOB OFFER.
          </strong>{" "}
          Most people freak out here because they don&apos;t understand what it
          means. All it means is you&apos;re qualified and waiting to be reviewed
          by a local office.
        </p>
        <p>
          You could be on the pre-hire list for weeks, months, or up to a year.
          How fast you move depends on:
        </p>
        <ul>
          <li>Your exam score (higher = better ranking)</li>
          <li>How badly that office needs people</li>
          <li>How many other applicants there are</li>
          <li>
            Whether veterans with preference are ahead of you (that&apos;s
            federal law)
          </li>
        </ul>
        <p>
          This is where people sit the longest and where most of the anxiety
          happens. <strong>Pro tip:</strong> Apply to multiple postings and
          locations. Don&apos;t put all your eggs in one office.
        </p>
        <ul>
          <li>
            <strong>Typical wait:</strong> 2 weeks to 6+ months (seriously)
          </li>
        </ul>

        {/* Stage 4 */}
        <h2 id="stage-4">Stage 4: Hiring List</h2>
        <p>
          You&apos;ve been screened further. Your name is on a ranked list
          organized by exam score and veteran preference status. The hiring
          manager at the local office now has access to your name.
        </p>
        <ul>
          <li>
            You may get a call or email for an interview at this stage (not all
            positions require one)
          </li>
          <li>
            Maintenance and some EAS positions are more likely to require
            interviews
          </li>
          <li>
            Carrier positions (CCA, RCA) usually don&apos;t interview — they go
            off your score
          </li>
        </ul>
        <ul>
          <li>
            <strong>Typical wait:</strong> 1-4 weeks
          </li>
        </ul>

        {/* Stage 5 */}
        <h2 id="stage-5">Stage 5: Selection List</h2>
        <p>
          The local office has reviewed the hiring list and selected you as a
          candidate. Now the real checks begin:
        </p>
        <ul>
          <li>
            <strong>Background check (NACI)</strong> — National Agency Check with
            Inquiries. Covers the last 5 years: employment history, criminal
            record, education, references.
          </li>
          <li>
            <strong>Drug test</strong> — Standard urine test.{" "}
            <strong>
              Marijuana WILL disqualify you even in legal states.
            </strong>{" "}
            USPS is a federal agency.
          </li>
          <li>
            <strong>Fingerprinting</strong> happens at this stage.
          </li>
        </ul>
        <p>
          <strong>STILL NOT HIRED.</strong> A failed background check or drug
          test kills your application here.
        </p>
        <ul>
          <li>
            <strong>Typical wait:</strong> 1-4 weeks for results
          </li>
        </ul>

        {/* Stage 6 */}
        <h2 id="stage-6">Stage 6: Offer Phase (Ext)</h2>
        <p>
          You&apos;ve been selected, background check is processing or cleared,
          drug test passed. This is the final stage before the actual offer
          letter.
        </p>
        <p>
          You&apos;re waiting on approvals from HR and district management. Can
          take days to weeks. Some people report being stuck at Offer Phase Ext
          for months.
        </p>
        <ul>
          <li>
            <strong>DO NOT quit your current job yet.</strong>
          </li>
          <li>
            If you&apos;ve been stuck here for more than 4 weeks, it&apos;s okay
            to call the contact number on your original job posting to check in.
          </li>
        </ul>
        <ul>
          <li>
            <strong>Typical wait:</strong> 3 days to 4+ weeks
          </li>
        </ul>

        {/* Stage 7 */}
        <h2 id="stage-7">
          Stage 7: Offer Accepted → Orientation Letter
        </h2>
        <p>
          You got the official offer letter. You accepted it. The orientation
          letter arrives with your start date, reporting location, and what to
          bring.
        </p>
        <ul>
          <li>
            Orientation is typically 3-5 days of classroom training. You are{" "}
            <strong>PAID</strong> starting day one of orientation.
          </li>
          <li>Dress: business casual for orientation.</li>
          <li>
            What to bring: two forms of ID (for I-9 verification), voided check
            or bank info for direct deposit, Social Security card.
          </li>
          <li>
            After orientation: Both CCAs and RCAs must pass the driving
            exam/course (usually 1-2 days). Then CCAs attend CCA Academy, RCAs
            attend REACT Academy. MHAs and PSEs go to on-the-job training.
          </li>
          <li>
            <strong>
              NOW you&apos;re officially hired. Your 90-day probation starts.
            </strong>
          </li>
        </ul>
      </div>

      {/* Key Things Nobody Tells You */}
      <div className="mt-10 bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h2 className="font-bold text-navy-900 text-lg mb-3">
          Key Things Nobody Tells You
        </h2>
        <ul className="space-y-2 text-sm text-navy-700">
          <li>
            <strong>Pre-hire list ≠ hired.</strong> It just means you&apos;re in
            the pool.
          </li>
          <li>
            <strong>Selection list ≠ hired.</strong> It means they picked you but
            haven&apos;t cleared you yet.
          </li>
          <li>
            You can sit on the pre-hire list for{" "}
            <strong>up to 1 year</strong> before anything happens or they tell
            you no.
          </li>
          <li>
            Your exam score matters way more than people think — it determines
            your ranking on the hiring list.
          </li>
          <li>
            Veterans get preference and jump ahead of you on the list.
            That&apos;s federal law.
          </li>
          <li>
            <strong>Apply to MULTIPLE postings</strong> and multiple locations to
            increase your chances.
          </li>
          <li>
            Check your email constantly, including your{" "}
            <strong>spam folder</strong>. ALL USPS communication is through
            email. They will not call you.
          </li>
          <li>
            The entire process can take anywhere from{" "}
            <strong>2 weeks to 6+ months</strong> depending on position and
            location.
          </li>
          <li>
            Nobody at USPS will proactively update you. You have to log in and
            check your application status yourself.
          </li>
          <li>
            <strong>
              Don&apos;t pay anyone for exam prep, application help, or
              &quot;guaranteed hiring.&quot;
            </strong>{" "}
            It&apos;s all free. Report scams to the Postal Inspection Service.
          </li>
        </ul>
      </div>
    </article>
  );
}
