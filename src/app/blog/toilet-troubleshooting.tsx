"use client";

import Image from 'next/image';
import CallToAction from '@/components/CallToAction';
import Testimonials from '@/components/Testimonials';

export default function ToiletTroubleshooting() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10">
      <h1 className="text-4xl font-bold mb-6">Toilet Troubleshooting</h1>
      <Image
        src="/assets/images/plumbing-van-company-logo.jpg"
        alt="Toilet Troubleshooting"
        width={800}
        height={400}
        className="mb-6 rounded"
      />
      <p className="mb-6">
        This is the blog page for toilet troubleshooting.
      </p>
      <CallToAction />
      <Testimonials service="toilet-troubleshooting" />
    </main>
  );
}
