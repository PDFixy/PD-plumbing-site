"use client";

import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function DrainCleaning() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
          Drain Cleaning in Wichita
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Clogged drain? Backed-up sink or tub? PD Plumbing has you covered — same-day.
        </p>
        <Image
          src="/assets/images/plumbing-van-company-logo.jpg"
          alt="Drain Cleaning Service"
          width={800}
          height={400}
          className="mx-auto rounded-lg shadow"
        />
      </section>

      {/* Service Details */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Clear Your Drains Fast</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Toilets, showers, kitchen sinks, tubs, and floor drains</li>
          <li>Hair, grease, soap scum, roots, and food blockages</li>
          <li>Snake, auger, and hydrojetting services available</li>
          <li>Fully licensed and insured plumbers</li>
        </ul>
      </section>

      {/* Why Act Fast */}
      <section className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Don’t Let a Clog Become a Flood
        </h2>
        <p className="text-gray-700">
          Ignoring a slow drain can lead to backups, water damage, and bigger
          repair bills. Let Fixy take care of it today — fast, clean, and
          friendly.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 rounded-lg p-6 text-center">
        <CallToAction />
      </section>

      {/* Testimonials */}
      <section className="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Real Wichita Customers, Real Results
        </h2>
        <Testimonials service="drain-cleaning" />
      </section>
    </main>
  );
}
