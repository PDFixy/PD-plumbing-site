"use client";

import Image from "next/image";
import CallToAction from "@/app/components/CallToAction";
import Testimonials from "@/app/components/Testimonials";

export default function ToiletRepair() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10 space-y-16">
      {/* Toilet Repair Overview */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">
          Toilet Repair in Wichita
        </h1>
        <Image
          src="/assets/images/plumbing-van-company-logo.jpg"
          alt="Toilet Repair"
          width={800}
          height={400}
          className="mb-6 rounded"
        />
        <p className="text-gray-700 mb-4">
          Got a toilet that won't flush, leaks, or constantly runs? Our expert
          technicians can repair or replace it fast — and get your bathroom back
          to normal today.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Toilet clogs and backups</li>
          <li>Leaking seals or tanks</li>
          <li>Flushing issues and weak flow</li>
          <li>Toilet replacements and installs</li>
        </ul>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-50 shadow-md rounded-lg p-6">
        <CallToAction />
      </section>

      {/* Testimonials */}
      <section className="bg-white shadow-md rounded-lg p-6 text-center">
        <Testimonials service="toilet-repair" />
      </section>
    </main>
  );
}
