"use client";

import Image from 'next/image';
import CallToAction from '@/components/CallToAction';
import Testimonials from '@/components/Testimonials';

export default function SumpPumpCare() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10">
      <h1 className="text-4xl font-bold mb-6">Sump Pump Care</h1>
      <Image
        src="/assets/images/plumbing-van-company-logo.jpg"
        alt="Sump Pump Care"
        width={800}
        height={400}
        className="mb-6 rounded"
      />
      <p className="mb-6">
        This is the blog page for sump pump care.
      </p>
      <CallToAction />
      <Testimonials service="sump-pump-care" />
    </main>
  );
}
