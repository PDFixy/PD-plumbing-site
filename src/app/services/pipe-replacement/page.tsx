"use client";

import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function PipeReplacement() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10 space-y-16">
      {/* Hero Section */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">
          Pipe Replacement
        </h1>
        <Image
          src="/images/plumbing-van-company-logo.jpg"
          alt="Pipe Replacement"
          width={800}
          height={400}
          className="rounded mb-6"
        />
        <p className="text-gray-700">
          Rusty, leaky, or outdated pipes? We provide expert repiping services
          for homes and businesses in Wichita — fast, affordable, and built to
          last.
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Whole-home repiping</li>
          <li>Copper and PEX pipe upgrades</li>
          <li>Leak prevention and pressure optimization</li>
          <li>Minimal disruption to your home</li>
        </ul>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-50 shadow-md rounded-lg p-6">
        <CallToAction />
      </section>

      {/* Testimonials */}
      <section className="bg-white shadow-md rounded-lg p-6 text-center">
        <Testimonials service="pipe-replacement" />
      </section>
    </main>
  );
}
