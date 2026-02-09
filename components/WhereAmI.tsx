"use client";

import { useState } from "react";

const STATUS_OPTIONS = [
  {
    label: "I just applied",
    message:
      "You're at Stage 1 — Application Received. USPS is doing a basic pre-screening (age, citizenship, work history). This is automatic. If everything checks out, you'll get an email inviting you to take the assessment exam within 1-7 days. Keep checking your email, including your spam folder — that's how USPS communicates everything.",
  },
  {
    label: "I'm on the Pre-Hire List",
    message:
      "You're at Stage 3 — Pre-Hire List. This is NOT a job offer. It means you passed the exam and you're in the candidate pool waiting to be reviewed by a local office. This is where most people wait the longest — anywhere from 2 weeks to 6+ months. Your ranking depends on your exam score and whether veterans with preference are ahead of you. Pro tip: Apply to multiple postings and locations to increase your chances. Don't just wait on one office.",
  },
  {
    label: "I'm on the Hiring List",
    message:
      "You're at Stage 4 — Hiring List. Your name is on a ranked list that the local hiring manager can see. You may get a call or email for an interview (more common for maintenance positions — carriers usually skip interviews). This stage typically takes 1-4 weeks. Keep checking your email and application status portal.",
  },
  {
    label: "I'm on the Selection List",
    message:
      "You're at Stage 5 — Selection List. The local office has selected you as a candidate. Your background check (NACI), drug test, and fingerprinting are being processed. Important: Marijuana WILL disqualify you even in legal states — USPS is a federal agency. You're close but NOT hired yet — a failed check kills your application. Expect 1-4 weeks for results.",
  },
  {
    label: "I'm at Offer Phase Ext",
    message:
      "You're at Stage 6 — Offer Phase (Ext). You've been selected, background is processing or cleared, drug test passed. You're waiting on final HR and district management approvals before the official offer letter. This can take 3 days to 4+ weeks. DO NOT quit your current job yet. If you've been stuck here 4+ weeks, it's okay to call the contact number on your original job posting to check in.",
  },
  {
    label: "I got my offer letter",
    message:
      "You're at Stage 7 — Offer Accepted! You're officially being hired. Your orientation letter will arrive with your start date, location, and what to bring (two forms of ID, voided check or bank info for direct deposit, Social Security card). Orientation is 3-5 days of paid classroom training. Dress business casual. After orientation, carriers take the driving exam, then attend their academy (CCA Academy or REACT Academy for RCA). Your 90-day probation starts — don't call out, be on time, work hard.",
  },
  {
    label: "I don't know / it's confusing",
    message: "chat",
  },
];

export default function WhereAmI() {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (STATUS_OPTIONS[index].message === "chat") {
      const chatButton = document.querySelector(
        'button[aria-label="Open chat"]'
      ) as HTMLButtonElement;
      if (chatButton) chatButton.click();
      return;
    }
    setSelected(index === selected ? null : index);
  };

  return (
    <div className="bg-navy-50 border border-navy-200 rounded-xl p-5 mb-10">
      <h2 className="font-bold text-navy-900 text-lg mb-1">
        Where Am I in the Hiring Process?
      </h2>
      <p className="text-sm text-navy-600 mb-4">
        Select your current status to find out what&apos;s happening and
        what to expect next.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {STATUS_OPTIONS.map((option, i) => (
          <button
            key={option.label}
            onClick={() => handleSelect(i)}
            className={`text-xs border rounded-full px-3 py-1.5 transition-colors ${
              selected === i
                ? "bg-accent-500 text-white border-accent-500"
                : "bg-white text-navy-700 border-navy-200 hover:bg-navy-100 hover:border-navy-300"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      {selected !== null && STATUS_OPTIONS[selected].message !== "chat" && (
        <div className="bg-white border border-navy-200 rounded-lg p-4 text-sm text-navy-700 leading-relaxed">
          {STATUS_OPTIONS[selected].message}
        </div>
      )}
    </div>
  );
}
