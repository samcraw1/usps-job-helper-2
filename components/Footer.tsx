import Link from "next/link";
import { DISCLAIMER } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-2">
              USPS Jobs Helper
            </h3>
            <p className="text-sm leading-relaxed">
              AI-powered guidance for navigating the USPS hiring process, built
              by a current USPS carrier.
            </p>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Guides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/guides/cca"
                  className="hover:text-white transition-colors"
                >
                  City Carrier Assistant (CCA)
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/rca"
                  className="hover:text-white transition-colors"
                >
                  Rural Carrier Associate (RCA)
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/application-process"
                  className="hover:text-white transition-colors"
                >
                  Application Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://jobs.usps.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  USPS Jobs (Official)
                </a>
              </li>
              <li>
                <a
                  href="https://about.usps.com/careers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  USPS Careers (Official)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-navy-800 pt-6">
          <p className="text-xs text-navy-400 leading-relaxed">{DISCLAIMER}</p>
          <p className="text-xs text-navy-500 mt-3">
            &copy; {new Date().getFullYear()} USPS Jobs Helper. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
