"use client";

import Image from 'next/image';
import CallToAction from '@/components/CallToAction';
import Testimonials from '@/components/Testimonials';

export default function CommercialPlumbing() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-16">

      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Commercial Plumbing Services</h1>
        <p className="text-lg text-gray-700 mb-6">
          Reliable, fast-response plumbing for offices, restaurants, medical buildings, and industrial properties.
        </p>
        <Image
          src="/assets/images/plumbing-van-company-logo.jpg"
          alt="Commercial Plumbing"
          width={800}
          height={40
