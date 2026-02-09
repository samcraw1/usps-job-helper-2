import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Apply on USPS eCareer Portal — Step-by-Step Guide",
  description:
    "Complete walkthrough of the USPS eCareer portal for RCA, maintenance, driving, and other positions. Learn how to navigate the confusing SAP-based application system.",
};

export default function ECareerGuidePage() {
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
        <span className="text-navy-600">eCareer Portal Guide</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">
        How to Apply on the USPS eCareer Portal
      </h1>
      <p className="text-navy-500 mb-8">
        A step-by-step walkthrough of the confusing (but important) eCareer
        application system. If you&apos;re applying for RCA, maintenance,
        driving, or other non-CCA positions, this is the guide for you.
      </p>

      {/* General application process link */}
      <div className="bg-accent-50 border border-accent-200 rounded-xl p-4 mb-8">
        <p className="text-sm text-navy-600">
          Looking for the general USPS application overview?{" "}
          <Link
            href="/guides/application-process"
            className="text-accent-600 hover:text-accent-700 font-medium"
          >
            Read our Step-by-Step Application Guide
          </Link>{" "}
          for the full process from start to first day.
        </p>
      </div>

      <div className="prose prose-navy max-w-none">
        <h2>Which Site Do I Use?</h2>
        <p>
          This is the #1 source of confusion. USPS has{" "}
          <strong>two separate application websites</strong>. Here&apos;s the
          simple breakdown:
        </p>

        <div className="not-prose overflow-x-auto mb-6">
          <table className="w-full text-sm border border-navy-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-navy-50">
                <th className="text-left px-4 py-2 font-semibold text-navy-900 border-b border-navy-200">
                  Position
                </th>
                <th className="text-left px-4 py-2 font-semibold text-navy-900 border-b border-navy-200">
                  Apply Here
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-100">
              <tr>
                <td className="px-4 py-2 text-navy-700">CCA (City Carrier Assistant)</td>
                <td className="px-4 py-2">
                  <a href="https://jobs.usps.com" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">jobs.usps.com</a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-navy-700">MHA (Mail Handler Assistant)</td>
                <td className="px-4 py-2">
                  <a href="https://jobs.usps.com" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">jobs.usps.com</a>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-navy-700">PSE Sales &amp; Services</td>
                <td className="px-4 py-2">
                  <a href="https://jobs.usps.com" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">jobs.usps.com</a>
                </td>
              </tr>
              <tr className="bg-navy-50/50">
                <td className="px-4 py-2 text-navy-700">RCA (Rural Carrier Associate)</td>
                <td className="px-4 py-2">
                  <a href="https://wp1-ext.usps.gov/sap/bc/webdynpro/sap/hrrcf_a_unreg_job_search" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">eCareer Portal</a>
                </td>
              </tr>
              <tr className="bg-navy-50/50">
                <td className="px-4 py-2 text-navy-700">PSE Mail Processing</td>
                <td className="px-4 py-2">
                  <a href="https://wp1-ext.usps.gov/sap/bc/webdynpro/sap/hrrcf_a_unreg_job_search" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">eCareer Portal</a>
                </td>
              </tr>
              <tr className="bg-navy-50/50">
                <td className="px-4 py-2 text-navy-700">Maintenance (all types)</td>
                <td className="px-4 py-2">
                  <a href="https://wp1-ext.usps.gov/sap/bc/webdynpro/sap/hrrcf_a_unreg_job_search" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">eCareer Portal</a>
                </td>
              </tr>
              <tr className="bg-navy-50/50">
                <td className="px-4 py-2 text-navy-700">Driving (TTO/MVO/PVO)</td>
                <td className="px-4 py-2">
                  <a href="https://wp1-ext.usps.gov/sap/bc/webdynpro/sap/hrrcf_a_unreg_job_search" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">eCareer Portal</a>
                </td>
              </tr>
              <tr className="bg-navy-50/50">
                <td className="px-4 py-2 text-navy-700">Corporate/IT/Management</td>
                <td className="px-4 py-2">
                  <a href="https://wp1-ext.usps.gov/sap/bc/webdynpro/sap/hrrcf_a_unreg_job_search" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700">eCareer Portal</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Simple rule:</strong> CCA, MHA, and PSE Sales are on the new
          site (jobs.usps.com). <strong>Everything else</strong> is on the old
          eCareer portal. This guide walks you through the eCareer portal.
        </p>

        <h2>Step 1: Go to the eCareer Portal</h2>
        <ul>
          <li>
            <strong>Link:</strong>{" "}
            <a
              href="https://wp1-ext.usps.gov/sap/bc/webdynpro/sap/hrrcf_a_unreg_job_search"
              target="_blank"
              rel="noopener noreferrer"
            >
              wp1-ext.usps.gov eCareer Job Search
            </a>
          </li>
          <li>
            <strong>Use a desktop or laptop</strong> — the mobile experience is
            rough. This is an old SAP-based system and it was not built for
            phones.
          </li>
          <li>
            Supported browsers: Chrome, Firefox, Safari. Edge works too.
          </li>
        </ul>

        <h2>Step 2: Search for Jobs</h2>
        <ul>
          <li>
            Enter a <strong>keyword</strong> (job title like
            &quot;custodial&quot;, &quot;tractor trailer&quot;, &quot;rural
            carrier&quot;)
          </li>
          <li>
            Select your <strong>state</strong> under Location
          </li>
          <li>
            <strong>DON&apos;T use the Functional Area dropdown</strong> unless
            you know exactly what you&apos;re looking for — it narrows results
            too much
          </li>
          <li>
            If you DO use Functional Area:{" "}
            <strong>&quot;Facilities&quot;</strong> has custodial/building
            maintenance. <strong>&quot;Processing Operations&quot;</strong> has
            MPE/ET and plant roles.{" "}
            <strong>&quot;Transportation&quot;</strong> has driving positions.
          </li>
          <li>Hit Search</li>
          <li>
            <strong>IMPORTANT:</strong> Max 30 results shown. If you see
            &quot;Search Result: 30 hits&quot; you&apos;re not seeing everything
            — refine your search with more specific keywords or a narrower
            location.
          </li>
          <li>
            <strong>ALWAYS hit &quot;Reset&quot;</strong> before a new search —
            old search criteria carries over and messes up your results. This
            trips up everyone.
          </li>
        </ul>

        <h2>Step 3: Create a Candidate Profile</h2>
        <ul>
          <li>
            You can browse jobs without a profile, but you need one to apply
          </li>
          <li>
            <strong>Registration link:</strong>{" "}
            <a
              href="https://wp1-ext.usps.gov/sap/bc/webdynpro/sap/hrrcf_a_candidate_registration"
              target="_blank"
              rel="noopener noreferrer"
            >
              Create Candidate Profile
            </a>
          </li>
          <li>Create a username and password</li>
          <li>
            <strong>You can only have ONE profile</strong> — don&apos;t create
            multiple accounts
          </li>
          <li>
            Use an email you check regularly — ALL USPS communication about your
            application comes through email
          </li>
        </ul>

        <h2>Step 4: Fill Out Your Profile</h2>
        <p>
          This is separate from the application — your profile info auto-fills
          into applications you submit.
        </p>
        <ul>
          <li>
            Must include complete work history for the{" "}
            <strong>last 5 years</strong> (back to your 16th birthday if your
            work history is shorter)
          </li>
          <li>
            For gaps in employment, enter &quot;unemployment&quot; —{" "}
            <strong>don&apos;t leave blank</strong>
          </li>
          <li>
            Grade level field is for federal/postal jobs only — leave blank if
            not applicable
          </li>
          <li>
            If you can&apos;t find old employer info, enter &quot;unknown&quot;
            or &quot;out of business&quot;
          </li>
          <li>
            Dates can be estimated — use first of the month if you&apos;re not
            sure of the exact date
          </li>
        </ul>

        <h2>Step 5: Apply to a Job</h2>
        <ul>
          <li>Click on the job posting, review the requirements</li>
          <li>Click Apply</li>
          <li>
            Fill in the <strong>Summary of Accomplishments</strong> — this is
            YOUR chance to explain why you&apos;re qualified. Don&apos;t skip
            this.
          </li>
          <li>
            Summary of Accomplishments is limited to{" "}
            <strong>6,000 characters</strong>
          </li>
          <li>
            <strong>Tip:</strong> Use the STAR format (Situation, Task, Action,
            Result) to describe relevant experience
          </li>
          <li>Upload a resume if you have one (recommended but not always required)</li>
          <li>All mandatory fields are marked with an asterisk (*)</li>
          <li>
            You can save progress and come back — but your{" "}
            <strong>session times out after 30 minutes</strong> of inactivity, so
            don&apos;t leave it sitting
          </li>
        </ul>

        <h2>Step 6: Submit</h2>
        <ul>
          <li>
            Your application stays in <strong>&quot;draft&quot;</strong> until
            all required fields are complete — a draft is NOT submitted
          </li>
          <li>
            Go to the <strong>&quot;Send Application&quot;</strong> tab to
            confirm everything is done and submit
          </li>
          <li>
            You&apos;ll get a confirmation email — check your spam folder if you
            don&apos;t see it
          </li>
        </ul>

        <h2>Step 7: After Applying</h2>
        <ul>
          <li>
            Check application status: Log in → Job Opportunities → My
            Applications
          </li>
          <li>
            You may get an email about an assessment/exam — the exam varies by
            job type
          </li>
          <li>
            Background check and drug test come after a conditional offer
          </li>
          <li>
            <strong>Be patient</strong> — federal hiring is slow. It can take
            weeks to months. This is normal.
          </li>
        </ul>

        <h2>Pro Tips for eCareer (From Experience)</h2>
        <ul>
          <li>
            <strong>The site looks ancient. It is.</strong> Don&apos;t let that
            scare you off — this is a legit government portal that just
            hasn&apos;t been updated in a long time.
          </li>
          <li>
            Apply to <strong>multiple positions and locations</strong> to
            increase your chances
          </li>
          <li>
            <strong>
              Don&apos;t pay anyone for exam prep — the application and exams
              are FREE.
            </strong>{" "}
            Any site charging you money for USPS applications or exam access is a
            scam. Report them to the USPS Postal Inspection Service.
          </li>
          <li>
            If you <strong>copy/paste text</strong> into the application from
            Word or another source, apostrophes and special characters may turn
            into # signs or garbled text — review and fix manually before
            submitting
          </li>
          <li>
            You can save job postings to Favorites, but this does{" "}
            <strong>NOT</strong> extend application deadlines
          </li>
          <li>
            You can withdraw and resubmit an application if the posting is still
            open
          </li>
          <li>
            If you&apos;re a <strong>current USPS employee</strong>, you use
            LiteBlue eCareer (a different system) — the external portal is for
            outside applicants only
          </li>
          <li>
            Forgot your username or password? Use the recovery links on the
            login page — don&apos;t create a new account
          </li>
        </ul>

        <h2>Exam Numbers Quick Reference</h2>
        <ul>
          <li><strong>VEA 474:</strong> CCA (City Carrier Assistant)</li>
          <li><strong>VEA 475:</strong> MHA / PSE Mail Processing</li>
          <li><strong>VEA 476:</strong> PSE Sales &amp; Services</li>
          <li><strong>VEA 477:</strong> RCA (Rural Carrier Associate)</li>
          <li><strong>Exam 916:</strong> Laborer Custodial (Maintenance)</li>
          <li><strong>Exam 955:</strong> Maintenance Mechanic, MPE, Electronic Technician</li>
          <li><strong>Exam 944:</strong> Tractor Trailer Operator (TTO)</li>
        </ul>
        <p>
          VEA exams (474-477) are personality/situational judgment tests — no
          technical knowledge needed. Exams 916, 944, and 955 test actual
          knowledge and skills — study is required.
        </p>
      </div>
    </article>
  );
}
