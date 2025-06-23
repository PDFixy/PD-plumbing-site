"use client";

import Image from 'next/image';
import CallToAction from '@/app/components/CallToAction';
import Testimonials from '@/app/components/Testimonials';

export default function bathroom_remodeling() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10">
      <h1 className="text-4xl font-bold mb-6">Bathroom Remodeling</h1>
      <Image src="/assets/images/plumbing-van-company-logo.jpg" alt="Bathroom Remodeling" width=800 height=400 className="mb-6 rounded" />
      <p>This is the service page for bathroom remodeling.</p>
      <CallToAction />
      <Testimonials service="bathroom-remodeling" />
    </main>
  );
}
