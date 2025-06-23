"use client";

import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function ToiletRepair() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10">
      <h1 className="text-4xl font-bold mb-6">Toilet Repair</h1>
      <Image
        src="/assets/images/plumbing-van-company-logo.jpg"
        alt="Toilet Repair"
        width={800}
        height={400}
        className="mb-6 rounded"
      />
      <p className="mb-6">
        Got a toilet that won't flush, leaks, or constantly runs? Our expert technicians can repair or replace it fast — and get your bathroom back to normal today.
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>Toilet clogs and backups</li>
        <li>Leaking seals or tanks</li>
        <li>Flushing issues and weak flow</li>
        <li>Toilet replacements and installs</li>
      </ul>
      <CallToAction />
      <Testimonials service="toilet-repair" />
    </main>
  );
}
