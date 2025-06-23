"use client";

import Image from 'next/image';
import CallToAction from '@/app/components/CallToAction';
import Testimonials from '@/app/components/Testimonials';

export default function sewer_line_problems() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10">
      <h1 className="text-4xl font-bold mb-6">Sewer Line Problems</h1>
      <Image src="/assets/images/plumbing-van-company-logo.jpg" alt="Sewer Line Problems" width=800 height=400 className="mb-6 rounded" />
      <p>This is the blog page for sewer line problems.</p>
      <CallToAction />
      <Testimonials service="sewer-line-problems" />
    </main>
  );
}
