"use client";

import Image from "next/image";
import CallToAction from "@/app/components/CallToAction";
import Testimonials from "@/app/components/Testimonials";

export default function HvacServices() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10 space-y-16">

      {/* Hero Section */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">HVAC Services</h1>
        <Image
          src="/assets/images/plumbing-van-company-logo.jpg"
          alt="HVAC Services"
          width={800}
          height={400}
          className="rounded mb-6"
        />
        <p className="text-gray-700">
          Whether it’s heating, cooling, or air quality, PD Plumbing keeps your home comfortable year-round. Fast, friendly service
