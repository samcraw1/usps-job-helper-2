import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "USPS Maintenance Positions Guide (Custodial, Mechanic, ET)",
  description:
    "Complete guide to USPS maintenance positions including Laborer Custodial, Maintenance Mechanic, MPE, and Electronic Technician. Learn about pay, exams, and how to apply on eCareer.",
};

export default function MaintenanceGuidePage() {
  return (
    <GuideLayout
      title="Maintenance (Custodial, Mechanic, ET)"
      abbreviation="Maintenance"
      applySite="eCareer"
    >
      <h2>What are Maintenance Positions?</h2>
      <p>
        USPS maintenance covers several different roles. These are some of the
        best-kept secrets in the Postal Service — many are{" "}
        <strong>career from day one</strong> with full benefits, set schedules,
        and higher pay than entry-level carrier or clerk positions.
      </p>

      <h3>Laborer Custodial</h3>
      <p>
        Entry-level maintenance. Janitorial duties: cleaning, scrubbing, waxing
        floors, lawn care, snow removal, moving furniture. No technical skills
        required — just a willingness to work.
      </p>

      <h3>Maintenance Mechanic</h3>
      <p>
        Semi-skilled position. Preventive and corrective maintenance on
        plumbing, heating, AC, building equipment, and some mail processing
        equipment. You need some mechanical aptitude.
      </p>

      <h3>Maintenance Mechanic MPE (Mail Processing Equipment)</h3>
      <p>
        Skilled position. Complex troubleshooting and maintenance on automated
        mail processing machines. These are big, expensive machines and you need
        to know what you&apos;re doing.
      </p>

      <h3>Electronic Technician (ET)</h3>
      <p>
        The most advanced maintenance role. Full diagnostic, preventive
        maintenance, calibration, and overhaul on electronic mail processing and
        building systems. Highest pay in the maintenance category.
      </p>

      <h2>How to Find These Jobs on eCareer</h2>
      <p>
        This is important — maintenance jobs are on the{" "}
        <strong>eCareer portal</strong>, NOT jobs.usps.com. And they&apos;re not
        always easy to find:
      </p>
      <ul>
        <li>
          Go to the{" "}
          <a
            href="https://wp1-ext.usps.gov/sap/bc/webdynpro/sap/hrrcf_a_unreg_job_search"
            target="_blank"
            rel="noopener noreferrer"
          >
            eCareer Portal
          </a>
        </li>
        <li>
          In the <strong>Functional Area</strong> dropdown, look under{" "}
          <strong>&quot;Facilities&quot;</strong> for custodial and building
          maintenance positions
        </li>
        <li>
          Look under <strong>&quot;Processing Operations&quot;</strong> for MPE
          and ET positions that work on mail processing equipment
        </li>
        <li>
          You can also search by keyword: &quot;custodial&quot;,
          &quot;maintenance mechanic&quot;, &quot;electronic technician&quot;,
          &quot;MPE&quot;
        </li>
        <li>
          <strong>Pro tip:</strong> USPS&apos;s own documentation says
          &quot;For the broadest selection, do NOT use Functional Area&quot; — so
          also try searching by keyword + state only
        </li>
        <li>
          The search only shows <strong>30 results max</strong>. If you see
          &quot;Search Result: 30 hits&quot; you&apos;re probably not seeing
          everything. Refine your search.
        </li>
        <li>
          <strong>Always hit &quot;Reset&quot;</strong> before a new search — old
          criteria carries over and messes up results
        </li>
      </ul>

      <h2>Pay and Benefits</h2>
      <ul>
        <li>
          <strong>Laborer Custodial:</strong> ~$20-22/hr starting
        </li>
        <li>
          <strong>Maintenance Mechanic:</strong> ~$23-26/hr starting
        </li>
        <li>
          <strong>Maintenance Mechanic MPE:</strong> ~$25-29/hr starting
        </li>
        <li>
          <strong>Electronic Technician:</strong> ~$27-32/hr starting
        </li>
        <li>
          (Verify current rates — these change with contract negotiations)
        </li>
        <li>
          <strong>Key difference:</strong> Many maintenance positions are{" "}
          <strong>CAREER from day one</strong> — full benefits, set schedule,
          retirement immediately. No waiting 2 years like CCA/RCA/MHA/PSE.
        </li>
      </ul>

      <h2>Schedule</h2>
      <ul>
        <li>Generally more predictable than carrier positions</li>
        <li>Often set shifts (day, evening, or night)</li>
        <li>Set days off — you know your schedule in advance</li>
        <li>
          Plants run 24/7 so night shifts are common, but at least they&apos;re
          consistent
        </li>
        <li>
          Plant-based positions (MPE, ET) follow the USPS{" "}
          <strong>tour system</strong>: Tour 1 (overnight ~11 PM – 7:30 AM),
          Tour 2 (day ~7 AM – 3:30 PM), Tour 3 (evening ~3 PM – 11:30 PM).
          Tour preference comes with seniority.
        </li>
      </ul>
      <p>
        New to how USPS schedules work at plants?{" "}
        <a
          href="/guides/application-process#understanding-work-tours-shifts"
        >
          Read our full explanation of work tours
        </a>
        .
      </p>

      <h2>Vehicle Requirements</h2>
      <p>No personal vehicle needed for the job itself.</p>

      <h2>Assessment Exams</h2>
      <p>
        These are <strong>different from carrier assessments</strong>. They test
        actual technical knowledge — not personality or situational judgment.
      </p>
      <ul>
        <li>
          <strong>Laborer Custodial:</strong> Exam 916
        </li>
        <li>
          <strong>Maintenance Mechanic &amp; MPE:</strong> Exam 955
        </li>
        <li>
          <strong>Electronic Technician:</strong> Exam 955
        </li>
        <li>
          Exam 955 covers electrical, mechanical, and electronic principles —{" "}
          <strong>study is required</strong>
        </li>
        <li>Exam 916 is more general aptitude — less technical</li>
        <li>
          These are NOT the easy personality tests like the VEA for carriers
        </li>
      </ul>

      <h2>Conversion to Career</h2>
      <p>
        Many maintenance positions are{" "}
        <strong>career from day one</strong>. This is a HUGE advantage over
        CCA/RCA/MHA/PSE where you wait ~2 years for career status.
      </p>
      <ul>
        <li>
          Career from day one = full benefits, retirement contributions, TSP
          matching, job security — immediately
        </li>
        <li>
          This alone makes maintenance one of the best entry points into USPS if
          you can pass the exams
        </li>
      </ul>

      <h2>Probation</h2>
      <p>
        Still have a <strong>90-day probation period</strong> even though
        you&apos;re career from day one. Same rules — attendance matters, follow
        instructions, don&apos;t give them a reason.
      </p>

      <h2>Pros and Cons</h2>
      <h3>Pros</h3>
      <ul>
        <li>
          <strong>Career from day one</strong> (many positions) — this is the
          biggest advantage
        </li>
        <li>Set schedule with consistent days off</li>
        <li>Higher pay than entry-level carrier/clerk positions</li>
        <li>Learn real technical skills</li>
        <li>
          Less physically demanding than carrying mail (depending on role)
        </li>
        <li>Indoor work</li>
      </ul>
      <h3>Cons</h3>
      <ul>
        <li>
          Exams require actual technical knowledge — harder to pass than VEA
        </li>
        <li>Night shifts common (especially at plants)</li>
        <li>
          Can be hard to find openings — fewer positions available compared to
          carrier jobs
        </li>
        <li>Some positions require prior technical experience</li>
        <li>
          Custodial work is janitorial — cleaning bathrooms, mopping floors,
          shoveling snow
        </li>
      </ul>

      <h2>Tips from Experience</h2>
      <ul>
        <li>
          If you have <strong>any</strong> mechanical, electrical, or technical
          background — maintenance might be your fastest path to a career
          position at USPS
        </li>
        <li>
          Laborer Custodial is the easiest to get into if you have no technical
          background — exam 916 is more general
        </li>
        <li>
          Study for exam 955 seriously — there are study guides available online.
          It covers things like Ohm&apos;s law, circuit diagrams, basic
          mechanics
        </li>
        <li>
          Check the eCareer portal regularly — maintenance postings come and go
          quickly
        </li>
        <li>
          The &quot;career from day one&quot; benefit cannot be overstated. While
          CCAs and RCAs are waiting 2+ years for full benefits, you have them
          from your first paycheck.
        </li>
      </ul>
    </GuideLayout>
  );
}
