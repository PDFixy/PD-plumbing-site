"use client";

import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function CommercialPlumbing() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">
          Commercial Plumbing Services
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Reliable, fast-response plumbing for offices, restaurants, medical
          buildings, and industrial properties.
        </p>
        <Image
          src="/images/plumbing-van-company-logo.jpg"
          alt="Commercial Plumbing"
          width={800}
          height={400}
          className="mx-auto rounded-lg shadow"
        />
      </section>

      {/* Service Details */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Keep Your Business Running
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>24/7 emergency service available</li>
          <li>Grease trap cleaning and backflow prevention</li>
          <li>Water heater repair and installation</li>
          <li>Restroom fixture upgrades and maintenance</li>
        </ul>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-50 rounded-lg p-6 text-center">
        <CallToAction />
      </section>

      {/* Testimonials */}
      <section className="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Trusted by Wichita Businesses
        </h2>
        <Testimonials service="commercial-plumbing" />
      </section>
    </main>
  );
}
