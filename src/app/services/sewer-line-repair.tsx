"use client";

import Image from "next/image";
import CallToAction from "@/app/components/CallToAction";
import Testimonials from "@/app/components/Testimonials";

export default function SewerLineRepair() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10 space-y-16">

      {/* Hero Section */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">Sewer Line Repair in Wichita</h1>
        <Image
          src="/assets/images/plumbing-van-company-logo.jpg"
          alt="Sewer Line Repair"
          width={800}
          height={400}
          className="rounded mb-6"
        />
        <p className="text-gray-700">
          Backed-up drains or foul odors? These are signs your sewer line might be damaged or clogged. PD Plumbing offers fast, reliable sewer line repair to restore flow and protect your home.
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Trenchless and traditional sewer line repairs</li>
          <li>Video camera inspections included</li>
          <li>Emergency service available 24/7</li>
          <li>Full compliance with city codes and permits</li>
        </ul>
      </section>

      {/* Call To Action */}
      <section className="bg-blue-50
