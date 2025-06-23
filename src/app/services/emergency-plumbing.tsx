"use client";

import Image from 'next/image';
import CallToAction from '@/components/CallToAction';
import Testimonials from '@/components/Testimonials';

export default function EmergencyPlumbing() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10 space-y-16">

      {/* Hero Section */}
      <section className="bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-900">Emergency Plumbing</h1>
        <p className="text-gray-700 mb-6">
          When disaster strikes, you need a fast, reliable plumber — 24/7. We’re Wichita’s top-rated emergency plumbing experts.
        </p>
        <Image
          src="/assets/images/plumbing-van-company-logo.jpg"
          alt="Emergency Plumbing"
          width={800}
          height={400}
          className="mx-auto rounded"
        />
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 shadow-md rounded-lg p-6">
        <CallToAction />
      </section>

      {/* Testimonials */}
      <section className="bg-white shadow-md rounded-lg p-6 text-center">
        <Testimonials service="emergency-plumbing" />
      </section>

    </main>
  );
}
