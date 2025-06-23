"use client";

import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function SumpPump() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10 space-y-16">
      {/* Sump Pump Service Overview */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">
          Sump Pump Services in Wichita
        </h1>
        <Image
          src="/assets/images/plumbing-van-company-logo.jpg"
          alt="Sump Pump"
          width={800}
          height={400}
          className="mb-6 rounded"
        />
        <p className="text-gray-700 mb-4">
          A flooded basement can cause serious damage and stress. At PD
          Plumbing, our sump pump services protect your home by preventing water
          buildup and keeping your foundation safe and dry. Whether you need a
          new installation, replacement, or urgent repair, our licensed plumbers
          will be there fast.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>New sump pump installation</li>
          <li>Backup battery systems</li>
          <li>Clog and float switch troubleshooting</li>
          <li>Same-day emergency service available</li>
        </ul>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-50 shadow-md rounded-lg p-6">
        <CallToAction />
      </section>

      {/* Testimonials */}
      <section className="bg-white shadow-md rounded-lg p-6 text-center">
        <Testimonials service="sump-pump" />
      </section>
    </main>
  );
}
