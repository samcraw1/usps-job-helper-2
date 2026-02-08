import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "USPS Application Process — Step-by-Step Guide",
  description:
    "Complete walkthrough of the USPS hiring process. Learn how to apply, take the assessment exam, pass the background check, and prepare for orientation.",
};

export default function ApplicationProcessPage() {
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
        <span className="text-navy-600">Application Process</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">
        USPS Application Process: Step-by-Step Guide
      </h1>
      <p className="text-navy-500 mb-8">
        A complete walkthrough from creating your account to your first day on
        the job.
      </p>

      <div className="prose prose-navy max-w-none">
        <h2>Before You Start: Which Website?</h2>
        <p>
          This is the #1 source of confusion. USPS has{" "}
          <strong>two separate application websites</strong>, and you need to
          use the right one:
        </p>
        <ul>
          <li>
            <strong>
              <a
                href="https://jobs.usps.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                jobs.usps.com
              </a>
            </strong>{" "}
            — For <strong>CCA</strong> (City Carrier Assistant),{" "}
            <strong>MHA</strong> (Mail Handler Assistant), and{" "}
            <strong>PSE Sales &amp; Services</strong> positions
          </li>
          <li>
            <strong>
              <a
                href="https://wp1-ext.usps.gov/sap/bc/webdynpro/sap/hrrcf_a_unreg_job_search"
                target="_blank"
                rel="noopener noreferrer"
              >
                USPS eCareer Portal
              </a>
            </strong>{" "}
            — For <strong>RCA</strong> (Rural Carrier Associate),{" "}
            <strong>ARC</strong>, <strong>Maintenance</strong>,{" "}
            <strong>Driving</strong>, and all other positions
          </li>
        </ul>
        <p>
          If you apply on the wrong site, you won&apos;t find the job you&apos;re
          looking for. This is USPS&apos;s system — confusing, but it is what it is.
        </p>

        <h2>Step 1: Create Your Profile</h2>
        <p>
          Go to the correct website for your desired position and create an
          account. You&apos;ll need:
        </p>
        <ul>
          <li>Valid email address</li>
          <li>Social Security number</li>
          <li>Address and contact information</li>
          <li>
            7 years of work history (you must account for all gaps — even if
            you were unemployed, list what you were doing)
          </li>
        </ul>

        <h2>Step 2: Search for Openings</h2>
        <p>Search by zip code for openings in your area. Pro tips:</p>
        <ul>
          <li>
            <strong>Search surrounding zip codes too</strong> — not just your
            city. Nearby offices may have openings your local one doesn&apos;t.
          </li>
          <li>
            Openings post and close quickly. Check frequently — daily if you
            can.
          </li>
          <li>
            <strong>Apply to multiple locations</strong> simultaneously to
            increase your chances.
          </li>
          <li>
            Peak hiring season is September-November (for holiday coverage),
            but USPS hires year-round.
          </li>
        </ul>

        <h2>Step 3: Complete the Application</h2>
        <p>The application itself is straightforward but detailed:</p>
        <ul>
          <li>Basic personal information</li>
          <li>Complete work history for the past 7 years</li>
          <li>
            Availability (select as much availability as possible — being
            flexible helps)
          </li>
          <li>Military service (veterans get preference)</li>
          <li>
            Education (a high school diploma/GED is typically the minimum)
          </li>
        </ul>

        <h2>Step 4: Take the Assessment Exam</h2>
        <p>
          After applying, you&apos;ll be invited to take the Virtual Entry
          Assessment (VEA). The exam code depends on the position:
        </p>
        <ul>
          <li>
            <strong>474</strong> — CCA (City Carrier Assistant)
          </li>
          <li>
            <strong>475</strong> — MHA / Mail Processing Clerk
          </li>
          <li>
            <strong>476</strong> — PSE Sales &amp; Services
          </li>
          <li>
            <strong>477</strong> — RCA (Rural Carrier Associate)
          </li>
        </ul>
        <p>What to know about the assessment:</p>
        <ul>
          <li>It&apos;s administered online — you take it from home</li>
          <li>
            Multiple choice questions about work scenarios and situational
            judgment
          </li>
          <li>
            It is <strong>not</strong> a knowledge test — no math or reading
            comprehension
          </li>
          <li>Scored 0-100, passing is 70+</li>
          <li>
            <strong>Your score matters</strong> — higher scores mean higher
            ranking in the candidate pool and faster offers
          </li>
          <li>
            Can be retaken after a waiting period if you don&apos;t pass or want to
            improve your score
          </li>
          <li>
            Take it seriously: quiet environment, no distractions, take your
            time
          </li>
        </ul>

        <h2>Step 5: Wait for an Offer</h2>
        <p>This is the hard part — waiting. Here&apos;s what to expect:</p>
        <ul>
          <li>
            <strong>&quot;Pre-Hire List&quot;</strong> status means you passed the
            assessment and are in the candidate pool. It is{" "}
            <strong>not</strong> a job offer.
          </li>
          <li>
            <strong>&quot;Offer Phase — Ext&quot;</strong> means an offer is being
            prepared
          </li>
          <li>
            This process can take <strong>weeks to months</strong>. It&apos;s
            normal.
          </li>
          <li>
            Don&apos;t panic if you don&apos;t hear back right away. USPS hiring is
            slow.
          </li>
          <li>
            Applying to multiple locations increases your chances of a faster
            offer.
          </li>
        </ul>

        <h2>Step 6: Background Check &amp; Drug Test</h2>
        <p>
          Once you receive a <strong>conditional job offer</strong>, you&apos;ll
          need to:
        </p>
        <ul>
          <li>
            <strong>Pass a criminal background check</strong> — felonies may
            disqualify you, but not always. Be honest on your application.
          </li>
          <li>
            <strong>Pass a drug test</strong> — this is a urinalysis. USPS is a{" "}
            <strong>federal employer</strong>, so marijuana is NOT allowed even
            in states where it&apos;s legal recreationally.
          </li>
          <li>
            <strong>Driving record check</strong> (for carrier positions) —
            need a clean record, no DUIs, minimal moving violations
          </li>
        </ul>
        <p>
          <strong>Important:</strong> A &quot;conditional job offer&quot; is NOT a final
          hire. Don&apos;t quit your current job until you have a firm start date
          and have passed all checks.
        </p>

        <h2>Step 7: Orientation</h2>
        <p>Once you&apos;re officially hired, orientation typically includes:</p>
        <ul>
          <li>3-5 days of classroom training</li>
          <li>Paperwork, ID badges, uniform information</li>
          <li>Safety training</li>
          <li>
            Paid — you&apos;re on the clock from day one of orientation
          </li>
          <li>
            Dress: business casual for the first day. You&apos;ll receive uniform
            allowance information during orientation.
          </li>
        </ul>

        <h2>Step 8: Training and First Days</h2>
        <p>After orientation:</p>
        <ul>
          <li>
            <strong>CCAs:</strong> Attend CCA Academy (additional training
            specific to carrier duties), then shadow days with experienced
            carriers before running your own route
          </li>
          <li>
            <strong>RCAs:</strong> Shadow experienced rural carriers, learn
            routes, and start covering days off
          </li>
          <li>
            <strong>MHAs/PSEs:</strong> On-the-job training at your facility
          </li>
        </ul>

        <h2>Your First 90 Days: Probation</h2>
        <p>
          <strong>This is critical.</strong> Your first 90 working days are a
          probationary period. During this time:
        </p>
        <ul>
          <li>You can be let go without cause</li>
          <li>
            <strong>DO NOT call out</strong> unless it&apos;s a genuine emergency
          </li>
          <li>Be on time, be reliable, work hard</li>
          <li>
            Management is watching your attendance and performance closely
          </li>
          <li>
            After probation, you&apos;re covered by the union and have much
            stronger job protection
          </li>
        </ul>

        <h2>Timeline Summary</h2>
        <p>A realistic timeline for the entire process:</p>
        <ul>
          <li>Application to assessment: 1-2 weeks</li>
          <li>Assessment to pre-hire list: 1-3 weeks</li>
          <li>Pre-hire list to conditional offer: 2 weeks to several months</li>
          <li>Background check + drug test: 1-3 weeks</li>
          <li>Offer to orientation start date: 1-4 weeks</li>
          <li>
            <strong>Total:</strong> Typically 1-4 months from application to
            first day, but it can be longer. Be patient.
          </li>
        </ul>
      </div>
    </article>
  );
}
