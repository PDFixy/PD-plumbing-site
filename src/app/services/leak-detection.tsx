"use client"
import Image from 'next/image';
import CallToAction from '@/app/components/CallToAction';
import Testimonials from '@/app/components/Testimonials';

export default function LeakDetection() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10 space-y-12">
      <section className="text-center">
        <Image
          src="/assets/images/work/plumbing-van-company-logo.jpg"
          alt="Leak Detection"
          width={1200}
          height={600}
          className="mx-auto rounded shadow"
        />
        <h1 className="text-3xl sm:text-4xl font-bold mt-6">Leak Detection</h1>
        <p className="mt-4 text-lg text-gray-700">
          Need help with leak detection? PD Plumbing is your fast, friendly, and local expert.
        </p>
        <CallToAction />
      </section>

      <section className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-semibold">Why Choose Us for Leak Detection</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Experienced and licensed technicians</li>
          <li>Same-day service availability</li>
          <li>Fully stocked service vehicles</li>
          <li>Transparent pricing and no hidden fees</li>
          <li>Backed by real reviews and satisfied customers</li>
        </ul>
      </section>

      <section>
        <Testimonials />
      </section>
    </main>
  );
}
