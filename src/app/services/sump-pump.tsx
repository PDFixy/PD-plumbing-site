"use client";

import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function SumpPump() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10">
      <h1 className="text-4xl font-bold mb-6">Sump Pump Services</h1>
      <Image
        src="/assets/images/plumbing-van-company-logo.jpg"
        alt="Sump Pump"
        width={800}
        height={400}
        className="mb-6 rounded"
      />
      <p className="mb-6">
        A flooded basement can cause serious damage and stress. At PD Plumbing, our sump pump services protect your home by preventing water buildup and keeping your foundation safe and dry. Whether you need a new installation, replacement, or urgent repair, our licensed plumbers will be there fast.
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>New sump pump installation</li>
        <li>Backup battery systems</li>
        <li>Clog and float switch troubleshooting</li>
        <li>Same-day emergency service available</li>
      </ul>
      <CallToAction />
      <Testimonials service="sump-pump" />
    </main>
  );
}
