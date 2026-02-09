import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "USPS Driving Positions Guide (TTO, MVO, PVO)",
  description:
    "Complete guide to USPS driving positions including Tractor Trailer Operator, Motor Vehicle Operator, and Postal Vehicle Operator. Learn about CDL requirements, pay, and how to apply.",
};

export default function DrivingGuidePage() {
  return (
    <GuideLayout
      title="Driving (TTO, MVO, PVO)"
      abbreviation="Driving"
      applySite="eCareer"
    >
      <h2>What are Driving Positions?</h2>
      <p>
        USPS driving positions haul mail between processing facilities,
        airports, and distribution centers. These are{" "}
        <strong>not</strong> delivery routes like CCA or RCA — you&apos;re
        driving trucks and transporting bulk mail. Many are career or
        near-career from day one.
      </p>

      <h3>Tractor Trailer Operator (TTO)</h3>
      <p>
        Drives tractor-trailers (18-wheelers) hauling mail between processing
        facilities, airports, and distribution centers. Both long-haul and local
        routes. <strong>Requires a CDL (Commercial Driver&apos;s License) Class A.</strong>
      </p>

      <h3>Motor Vehicle Operator (MVO)</h3>
      <p>
        Operates mail trucks (not tractor-trailers) for scheduled routes. Picks
        up and delivers bulk mail between facilities. Requires a clean driving
        record. Does not typically require a CDL.
      </p>

      <h3>Postal Vehicle Operator (PVO)</h3>
      <p>
        A newer position created under the Delivering for America plan. Operates
        various postal vehicles. Does not require a CDL in most cases. Being
        rolled out region by region — availability varies.
      </p>

      <h2>Where to Apply</h2>
      <p>
        All driving positions are on the{" "}
        <strong>
          <a
            href="https://wp1-ext.usps.gov/sap/bc/webdynpro/sap/hrrcf_a_unreg_job_search"
            target="_blank"
            rel="noopener noreferrer"
          >
            eCareer Portal
          </a>
        </strong>
        . They are NOT on jobs.usps.com.
      </p>
      <ul>
        <li>
          Search keywords: &quot;tractor trailer&quot;, &quot;motor vehicle
          operator&quot;, &quot;TTO&quot;, &quot;MVO&quot;, &quot;PVO&quot;
        </li>
        <li>
          Check under the <strong>Transportation</strong> functional area in the
          dropdown
        </li>
        <li>
          Remember: max 30 results shown. Hit &quot;Reset&quot; before each new
          search.
        </li>
      </ul>

      <h2>Pay and Benefits</h2>
      <ul>
        <li>
          <strong>TTO:</strong> ~$26-30/hr starting (varies by location and
          experience)
        </li>
        <li>
          <strong>MVO:</strong> ~$24-28/hr starting
        </li>
        <li>
          <strong>PVO:</strong> ~$26-29/hr starting
        </li>
        <li>
          (Verify current rates on USPS postings — these change with contract
          negotiations)
        </li>
        <li>
          Many driving positions are <strong>career or near-career from day one</strong>{" "}
          — full benefits available
        </li>
      </ul>

      <h2>Requirements</h2>
      <ul>
        <li>
          <strong>TTO:</strong> CDL Class A required, clean driving record, must
          pass road test
        </li>
        <li>
          <strong>MVO:</strong> Clean driving record required, may need specific
          license depending on vehicle type
        </li>
        <li>
          <strong>PVO:</strong> Clean driving record, no CDL required in most
          cases
        </li>
        <li>
          <strong>All positions:</strong> Must pass background check, drug test,
          and physical/medical assessment
        </li>
        <li>
          <strong>Safe driving record is critical</strong> — DUIs, multiple
          moving violations, or accidents can disqualify you
        </li>
      </ul>

      <h2>Assessment Exam</h2>
      <ul>
        <li>
          <strong>TTO:</strong> Exam 944
        </li>
        <li>
          <strong>MVO/PVO:</strong> May vary by posting — check the specific job
          listing
        </li>
        <li>
          These exams are different from the VEA assessments used for carriers
          and clerks
        </li>
      </ul>

      <h2>Schedule</h2>
      <ul>
        <li>
          TTO routes can be early morning, overnight, or varied — mail moves
          around the clock
        </li>
        <li>Generally more set schedules than CCA/RCA</li>
        <li>May include weekends and holidays</li>
        <li>
          Long-haul TTO routes mean extended time on the road, but schedules are
          more predictable
        </li>
      </ul>

      <h2>Pros and Cons</h2>
      <h3>Pros</h3>
      <ul>
        <li>
          Career or near-career from day one (many positions) — full benefits
        </li>
        <li>Higher starting pay than most entry-level USPS positions</li>
        <li>Set routes and more predictable schedules (especially TTO)</li>
        <li>
          If you already have a CDL, you&apos;re ahead of most applicants —
          fewer people applying means less competition
        </li>
        <li>
          Independent work — it&apos;s you and the road, less micromanagement
        </li>
      </ul>
      <h3>Cons</h3>
      <ul>
        <li>
          CDL required for TTO — expensive to get if you don&apos;t have one
          ($3,000-$7,000 for CDL school)
        </li>
        <li>Long hours on the road</li>
        <li>Overnight shifts common for TTO</li>
        <li>
          Driving in all weather conditions — snow, rain, ice, you&apos;re still
          going
        </li>
        <li>Physical loading/unloading of mail at stops</li>
      </ul>

      <h2>Tips from Experience</h2>
      <ul>
        <li>
          If you already have a CDL, TTO is one of the best ways into USPS —
          career from day one with good pay and less competition
        </li>
        <li>
          If you don&apos;t have a CDL, look at MVO and PVO positions first —
          they don&apos;t require one
        </li>
        <li>
          Your driving record matters more here than any other USPS position.
          Clean it up before applying if you have violations.
        </li>
        <li>
          PVO is newer and still being rolled out — check if positions are
          available in your area
        </li>
        <li>
          These positions are on the eCareer portal, not jobs.usps.com — a lot
          of people miss them because they only check the main site
        </li>
      </ul>
    </GuideLayout>
  );
}
