"use client";

import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function LeakDetection() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10 space-y-16">
      {/* Hero Section */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">
          Leak Detection
        </h1>
        <Image
          src="/images/plumbing-van-company-logo.jpg"
          alt="Leak Detection"
          width={800}
          height={400}
          className="rounded mb-6"
        />
        <p className="text-gray-700">
          Suspect a hidden leak? We use advanced tools to pinpoint plumbing
          issues without tearing into your home. Quick, non-invasive, and
          accurate.
        </p>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-50 shadow-md rounded-lg p-6">
        <CallToAction />
      </section>

      {/* Testimonials */}
      <section className="bg-white shadow-md rounded-lg p-6 text-center">
        <Testimonials service="leak-detection" />
      </section>
    </main>
  );
}

