import type { Metadata } from "next";
import GuideLayout from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "City Carrier Assistant (CCA) Guide",
  description:
    "Complete guide to becoming a USPS City Carrier Assistant. Learn about pay, schedule, application process, assessment exam, and conversion to career.",
};

export default function CCAGuidePage() {
  return (
    <GuideLayout
      title="City Carrier Assistant"
      abbreviation="CCA"
      applySite="jobsUsps"
    >
      <h2>What is a CCA?</h2>
      <p>
        A City Carrier Assistant (CCA) is a non-career mail carrier position
        with USPS. CCAs deliver mail on city routes, either on foot or by
        vehicle (LLV or ProMaster vans). It&apos;s one of the most common entry
        points into the Postal Service and the path most city letter carriers
        take to become career employees.
      </p>

      <h2>Pay and Benefits</h2>
      <ul>
        <li>
          <strong>Starting pay:</strong> ~$19.33/hour (verify current rate on
          USPS website, rates are updated periodically)
        </li>
        <li>
          <strong>Overtime:</strong> Time and a half after 8 hours/day or 40
          hours/week. Many CCAs work significant overtime, especially during
          peak season. Some CCAs report earning $50-60K+ annually with overtime.
        </li>
        <li>
          <strong>Benefits:</strong> As a non-career employee, you get limited
          benefits initially. You&apos;re eligible for health insurance after a
          qualifying period, and you accrue annual leave. Full benefits come
          after conversion to career.
        </li>
      </ul>

      <h2>Schedule</h2>
      <p>
        This is the part most people aren&apos;t prepared for. As a CCA, you do{" "}
        <strong>not</strong> have a set schedule. You&apos;re essentially on call and
        can be asked to work any day, including weekends and holidays. Your
        schedule can change daily.
      </p>
      <ul>
        <li>Expect to work 6 days a week, sometimes 7 during peak season</li>
        <li>
          Morning start times vary — often 6:00-7:30 AM, sometimes earlier
        </li>
        <li>Shifts can run 8-12 hours depending on route and volume</li>
        <li>
          Sundays are common for Amazon package delivery (this is often where
          new hires start)
        </li>
        <li>
          Holiday schedule: You will work most holidays. Christmas season
          (Nov-Dec) is especially demanding.
        </li>
      </ul>

      <h2>Vehicle</h2>
      <p>
        <strong>You do NOT need your own vehicle.</strong> USPS provides the
        vehicle — typically a Long Life Vehicle (LLV) or ProMaster van. You
        will need to complete vehicle training and demonstrate you can safely
        operate these vehicles. Some routes are walking routes (park and loop)
        where you park the vehicle and deliver on foot.
      </p>

      <h2>How to Apply</h2>
      <ol>
        <li>
          Go to{" "}
          <a
            href="https://jobs.usps.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            jobs.usps.com
          </a>{" "}
          and create an account
        </li>
        <li>
          Search for &quot;City Carrier Assistant&quot; or &quot;CCA&quot; in your area (search by
          zip code — try surrounding zip codes too for more openings)
        </li>
        <li>
          Complete the application — you&apos;ll need to list your work history for
          the past 7 years and account for any gaps
        </li>
        <li>
          Take the Virtual Entry Assessment (VEA) — exam code 474. This is a
          multiple-choice test covering work scenarios and situational judgment.
          Passing score is 70+.
        </li>
        <li>
          Wait for a conditional job offer (this can take weeks to months)
        </li>
        <li>
          Pass background check and drug test (marijuana is NOT allowed — USPS
          is a federal employer)
        </li>
        <li>Complete orientation (3-5 days, paid, classroom training)</li>
        <li>
          Complete CCA Academy (additional training specific to carrier duties)
        </li>
        <li>Shadow experienced carriers and start delivering</li>
      </ol>

      <h2>Assessment Exam (VEA 474)</h2>
      <p>
        The Virtual Entry Assessment for CCA (exam 474) is administered
        online. It&apos;s not a knowledge test — it&apos;s situational judgment and
        personality-based. But don&apos;t take it lightly. Your score determines
        your ranking in the candidate pool. Higher scores = faster offers.
      </p>
      <ul>
        <li>Multiple choice format</li>
        <li>Covers work scenarios and how you&apos;d handle situations</li>
        <li>Passing score: 70+</li>
        <li>Can retake after a waiting period if you don&apos;t pass</li>
        <li>Take it seriously and in a quiet environment</li>
      </ul>

      <h2>Conversion to Career</h2>
      <p>
        CCAs typically convert to career (regular) status after approximately{" "}
        <strong>2 years</strong>, though this varies significantly by office.
        Smaller offices often have faster conversion times. Once you convert,
        you get a set route, full benefits, retirement, and job security.
      </p>

      <h2>Probation</h2>
      <p>
        Your first <strong>90 days</strong> are probation.{" "}
        <strong>Do not call out during probation</strong> unless it&apos;s a genuine
        emergency. You can be let go without cause during this period.
        Management watches attendance very closely during probation.
      </p>

      <h2>Pros and Cons</h2>
      <h3>Pros</h3>
      <ul>
        <li>No personal vehicle needed</li>
        <li>Good overtime pay potential ($50-60K+ possible)</li>
        <li>Path to career federal employment with full benefits</li>
        <li>Active job — lots of walking, good exercise</li>
        <li>Union protection after probation (NALC)</li>
        <li>Relatively fast conversion to career (~2 years)</li>
      </ul>

      <h3>Cons</h3>
      <ul>
        <li>No set schedule — on call, unpredictable hours</li>
        <li>Work in all weather conditions (rain, snow, extreme heat)</li>
        <li>Physically demanding, especially walking routes</li>
        <li>Long hours during peak season</li>
        <li>Limited benefits until career conversion</li>
        <li>Can be stressful — time pressure to complete routes</li>
      </ul>

      <h2>Tips from Experience</h2>
      <ul>
        <li>
          Apply to multiple locations simultaneously to increase your chances
        </li>
        <li>
          Smaller offices often mean faster conversion and less overtime
          pressure
        </li>
        <li>
          Invest in good shoes — you&apos;ll walk 10-15+ miles on some routes
        </li>
        <li>
          Don&apos;t quit your current job until you have a firm start date
        </li>
        <li>
          Join the NALC (National Association of Letter Carriers) — the union is
          your biggest ally after probation
        </li>
      </ul>
    </GuideLayout>
  );
}
