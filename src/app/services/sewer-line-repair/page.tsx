"use client";

import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function SewerLineRepair() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10 space-y-16">
      {/* Hero Section */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">
          Sewer Line Repair in Wichita
        </h1>
        <Image
          src="/images/plumbing-van-company-logo.jpg"
          alt="Sewer Line Repair"
          width={800}
          height={400}
          className="rounded mb-6"
        />
        <p className="text-gray-700">
          Backed-up drains or foul odors? These are signs your sewer line might be damaged or clogged.
          PD Plumbing offers fast, reliable sewer line repair to restore flow and protect your home.
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Trenchless and traditional sewer line repairs</li>
          <li>Video camera inspections included</li>
          <li>Emergency service available 24/7</li>
          <li>Full compliance with city codes and permits</li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">
          What Causes Sewer Line Damage?
        </h2>
        <p className="text-gray-700 mb-4">
          Tree root invasion, ground shifting, and aging pipes are the most common culprits in Wichita homes.
          Our licensed pros will pinpoint the issue and walk you through your options.
        </p>
        <p className="text-gray-700">
          We offer minimally invasive trenchless solutions wherever possible to save your yard, your time, and your budget.
        </p>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-50 rounded-lg p-8 text-center">
        <CallToAction />
      </section>

      {/* Testimonials */}
      <section className="bg-white shadow-md rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          What Wichita Customers Say About Our Sewer Line Service
        </h2>
        <Testimonials service="sewer-line-repair" />
      </section>
    </main>
  );
}


