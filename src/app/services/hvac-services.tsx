"use client";

import Image from 'next/image';
import CallToAction from '@/components/CallToAction';
import Testimonials from '@/components/Testimonials';

export default function HvacServices() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10">
      <h1 className="text-4xl font-bold mb-6">HVAC Services</h1>
      <Image
        src="/assets/images/plumbing-van-company-logo.jpg"
        alt="HVAC Services"
        width={800}
        height={400}
        className="mb-6 rounded"
      />
      <p>This is the service page for HVAC services.</p>
      <CallToAction />
      <Testimonials service="hvac-services" />
    </main>
  );
}
