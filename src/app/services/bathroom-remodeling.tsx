"use client";

import Image from 'next/image';
import CallToAction from '@/app/components/CallToAction';
import Testimonials from '@/app/components/Testimonials';

export default function BathroomRemodeling() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">

      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Bathroom Remodeling</h1>
        <p className="text-lg text-gray-700 mb-6">
          Transform your bathroom into a modern, functional space — without the stress. Our experts handle everything from demo to tile.
        </p>
        <Image
          src="/assets/images/plumbing-van-company-logo.jpg"
          alt="Bathroom Remodeling"
          width={800}
          height={400}
          className="mx-auto rounded-lg shadow"
        />
      </section>

      {/* Why Remodel Box */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Why Remodel Your Bathroom?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Outdated fixtures or tile that need replacing</li>
          <li>Improve layout and functionality</li>
          <li>Increase home value and comfort</li>
          <li>Replace moldy grout or leaking plumbing</li>
        </ul>
      </section>

      {/* Our Remodeling Services */}
      <section className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">What’s Included in Our Remodeling Services</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Full demolition and haul-away</li>
          <li>Plumbing reroutes and fixture installation</li>
          <li>Custom tile and waterproofing</li>
          <li>Vanity, tub, shower, and toilet installs</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 rounded-lg p-6 text-center">
        <CallToAction />
      </section>

      {/* Testimonials */}
      <section className="bg-white shadow-md rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">What Our Bathroom Customers Say</h2>
        <Testimonials service="bathroom-remodeling" />
      </section>
    </main>
  );
}
