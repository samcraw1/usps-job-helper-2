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
    pay: "~$19.33/hr starting",
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

export const SUGGESTED_QUESTIONS = [
  "What USPS job is right for me?",
  "How do I apply for CCA?",
  "What's the difference between CCA and RCA?",
  "Where do I take the assessment?",
  "How long until I become career?",
];

export const REDDIT_SUBREDDITS = ["USPS", "USPSComplaints", "PostalBlue", "NALC"];

export const MAX_MESSAGES_PER_SESSION = 20;
