"use client";

import Image from 'next/image';
import CallToAction from '@/app/components/CallToAction';
import Testimonials from '@/app/components/Testimonials';

export default function sump_pump() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10">
      <h1 className="text-4xl font-bold mb-6">Sump Pump</h1>
      <Image src="/assets/images/plumbing-van-company-logo.jpg" alt="Sump Pump" width=800 height=400 className="mb-6 rounded" />
      <p>This is the service page for sump pump.</p>
      <CallToAction />
      <Testimonials service="sump-pump" />
    </main>
  );
}
