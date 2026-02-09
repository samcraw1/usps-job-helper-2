export const SITE_NAME = "USPS Jobs Helper";
export const SITE_DESCRIPTION =
  "AI-powered guidance for navigating the USPS hiring process. Get help from someone who's actually been through it.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://uspsjobshelper.com";

export const DISCLAIMER =
  "This site is not affiliated with, endorsed by, or connected to the United States Postal Service (USPS). Information provided is based on personal experience and publicly available information. Always verify details on official USPS websites. Pay rates and hiring processes may vary by location and are subject to change.";

export const APPLICATION_SITES = {
  jobsUsps: {
    name: "jobs.usps.com",
    url: "https://jobs.usps.com",
    description: "New site for CCA, MHA, and PSE Sales applications",
  },
  eCareer: {
    name: "USPS eCareer Portal",
    url: "https://wp1-ext.usps.gov/sap/bc/webdynpro/sap/hrrcf_a_unreg_job_search",
    description: "Legacy SAP portal for RCA, ARC, maintenance, driving, and other roles",
  },
  aboutCareers: {
    name: "USPS Careers Info",
    url: "https://about.usps.com/careers",
    description: "General career information and links",
  },
} as const;

export interface JobType {
  slug: string;
  title: string;
  abbreviation: string;
  description: string;
  pay: string;
  vehicleRequired: boolean;
  vehicleNote: string;
  conversionTime: string;
  schedule: string;
  applySite: keyof typeof APPLICATION_SITES;
  color: string;
}

export const JOB_TYPES: JobType[] = [
  {
    slug: "cca",
    title: "City Carrier Assistant",
    abbreviation: "CCA",
    description: "Delivers mail on city routes on foot or by vehicle (LLV/ProMaster).",
    pay: "~$20.73/hr starting",
    vehicleRequired: false,
    vehicleNote: "USPS provides vehicle (LLV or ProMaster)",
    conversionTime: "~2 years to career (varies by office)",
    schedule: "No set schedule, on-call, works weekends/holidays",
    applySite: "jobsUsps",
    color: "accent",
  },
  {
    slug: "rca",
    title: "Rural Carrier Associate",
    abbreviation: "RCA",
    description: "Delivers mail on rural routes, substituting for regular carriers.",
    pay: "~$20.38/hr starting",
    vehicleRequired: true,
    vehicleNote: "Must provide own vehicle (eligible for EMA reimbursement)",
    conversionTime: "Can take years, depends on route openings",
    schedule: "Substitute basis, covers regular carrier days off",
    applySite: "eCareer",
    color: "navy",
  },
  {
    slug: "mha",
    title: "Mail Handler Assistant",
    abbreviation: "MHA",
    description: "Loads/unloads mail and operates equipment in processing plants.",
    pay: "~$18.56/hr starting",
    vehicleRequired: false,
    vehicleNote: "No personal vehicle needed",
    conversionTime: "~2 years",
    schedule: "Varies, often overnight shifts",
    applySite: "jobsUsps",
    color: "accent",
  },
  {
    slug: "pse",
    title: "Postal Support Employee",
    abbreviation: "PSE",
    description:
      "Two types: Sales & Services (window clerk) and Mail Processing.",
    pay: "~$19.62/hr starting",
    vehicleRequired: false,
    vehicleNote: "No personal vehicle needed",
    conversionTime: "~2 years",
    schedule: "Varies",
    applySite: "jobsUsps",
    color: "navy",
  },
  {
    slug: "maintenance",
    title: "Maintenance (Custodial, Mechanic, ET)",
    abbreviation: "Maintenance",
    description:
      "Career positions from day one. Includes custodial, building maintenance, mechanics, and electronics technicians.",
    pay: "Varies by position, generally higher than non-career",
    vehicleRequired: false,
    vehicleNote: "No personal vehicle needed",
    conversionTime: "Career from day one",
    schedule: "Set schedules",
    applySite: "eCareer",
    color: "accent",
  },
  {
    slug: "driving",
    title: "Driving (TTO, MVO, PVO)",
    abbreviation: "Driving",
    description:
      "Tractor Trailer Operator, Motor Vehicle Operator, Postal Vehicle Operator. Requires CDL (TTO) or clean driving record.",
    pay: "Varies by position",
    vehicleRequired: false,
    vehicleNote: "CDL required for TTO",
    conversionTime: "Career or near-career positions",
    schedule: "Varies by position",
    applySite: "eCareer",
    color: "navy",
  },
];

export interface QuestionCategory {
  category: string;
  questions: string[];
}

export const SUGGESTED_QUESTIONS_BY_CATEGORY: QuestionCategory[] = [
  {
    category: "Location-Based",
    questions: [
      "I live in Arkansas, what do you recommend for me?",
      "What USPS jobs are available in Houston right now?",
      "Is it better to apply to a small town office or a big city?",
      "I'm in a rural area, should I go RCA or CCA?",
      "Which offices have the fastest conversion times?",
      "I'm willing to relocate, where should I apply?",
      "Do smaller offices really convert faster?",
    ],
  },
  {
    category: "Situation-Based",
    questions: [
      "I don't have a car, what jobs can I do?",
      "I have a felony, can I still work for USPS?",
      "I'm a veteran, do I get priority?",
      "I'm a college student, can I work part-time?",
      "I got fired from USPS before, can I reapply?",
      "I failed the drug test, how long before I can try again?",
      "I have a DUI on my record, can I still deliver mail?",
      "I'm 18, is that old enough to apply?",
      "I don't have a high school diploma, can I apply?",
      "I have a bad back, which position is easiest on the body?",
      "I'm currently on unemployment, will USPS affect my benefits?",
      "English isn't my first language, is that a problem?",
    ],
  },
  {
    category: "Money-Focused",
    questions: [
      "What's the fastest way to make $50K at USPS?",
      "Which position pays the most starting out?",
      "How much overtime can I really get as a CCA?",
      "Is RCA worth it if I have to use my own car?",
      "How much do maintenance workers make?",
      "When do I start getting benefits?",
      "What's the retirement plan like?",
      "How does RCA pay work?",
      "What's the difference between evaluated and hourly pay?",
      "What's the 40-hour trap?",
    ],
  },
  {
    category: "Career Path",
    questions: [
      "How long until I become a regular?",
      "Can I start as a CCA and switch to maintenance?",
      "What's the path from carrier to supervisor?",
      "I want a desk job at USPS, what are my options?",
      "Is it better to go career or stay non-career for flexibility?",
      "Can I transfer to another state?",
      "What USPS job is right for me?",
      "Is it better to be a CCA or RCA?",
    ],
  },
  {
    category: "Process/Confusion",
    questions: [
      "I applied 3 weeks ago and haven't heard back, is that normal?",
      "What does 'Pre-Hire List' mean?",
      "I got a conditional offer, am I hired?",
      "How do I pass the assessment exam?",
      "The website won't let me apply, what's wrong?",
      "I applied on jobs.usps.com but can't find RCA positions",
      "Do I need to apply to both websites?",
      "My application says 'not eligible', what happened?",
      "How do I apply for CCA?",
      "Where do I take the assessment?",
    ],
  },
  {
    category: "Day-to-Day Reality",
    questions: [
      "What's a typical day like as a CCA?",
      "How early do I have to wake up?",
      "Can I listen to music while delivering?",
      "What happens if it's raining or snowing?",
      "Do I get holidays off?",
      "What do I wear on my first day?",
      "Is it true I'll work every Sunday?",
      "How bad is the holiday season really?",
      "How many hours a week will I actually work?",
      "Do I get to pick my days off?",
    ],
  },
  {
    category: "Comparison/Decision",
    questions: [
      "CCA vs RCA, which should I pick?",
      "USPS vs Amazon delivery driver, which is better?",
      "USPS vs UPS vs FedEx, who pays the best?",
      "Should I take this USPS job or keep my current job?",
      "Mail handler vs carrier, what's the difference?",
      "PSE clerk vs CCA, which has a better schedule?",
      "What's the difference between CCA and RCA?",
    ],
  },
];

export const REDDIT_SUBREDDITS = ["USPS", "USPSComplaints", "PostalBlue", "NALC"];

export const MAX_MESSAGES_PER_SESSION = 20;
