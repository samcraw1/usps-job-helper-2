import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "USPS Jobs Helper — Navigate USPS Hiring Without the Confusion",
    template: "%s | USPS Jobs Helper",
  },
  description:
    "AI-powered guidance for navigating the USPS hiring process. Get help with CCA, RCA, MHA, PSE applications, assessment exams, and more from a current USPS carrier.",
  keywords: [
    "USPS jobs",
    "USPS hiring",
    "CCA application",
    "RCA application",
    "USPS assessment exam",
    "postal service jobs",
    "USPS career",
    "mail carrier jobs",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
