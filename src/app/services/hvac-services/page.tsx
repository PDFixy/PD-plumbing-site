"use client";

import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function HvacServices() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10 space-y-16">
      {/* Hero Section */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-900">HVAC Services</h1>
        <Image
          src="/images/plumbing-van-company-logo.jpg"
          alt="HVAC Services"
          width={800}
          height={400}
          className="rounded mb-6"
        />
        <p className="text-gray-700">
          Whether it’s heating, cooling, or air quality, PD Plumbing keeps your
          home comfortable year-round. Fast, friendly service with expert
          technicians who care.
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>AC repair, installation & tune-ups</li>
          <li>Furnace repair and maintenance</li>
          <li>Thermostat upgrades & zoning systems</li>
          <li>Indoor air quality and filtration solutions</li>
        </ul>
      </section>

      {/* Details Section */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Your Comfort is Our Priority</h2>
        <p className="text-gray-700 mb-4">
          Don’t sweat through the summer or shiver in the winter. Whether your
          system needs a quick fix or a full replacement, our certified HVAC
          pros have you covered.
        </p>
        <p className="text-gray-700">
          We service all major brands and provide honest recommendations, fair
          pricing, and fast scheduling — including emergency HVAC services.
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-50 rounded-lg p-8 text-center">
        <CallToAction />
      </section>

      {/* Testimonials */}
      <section className="bg-white shadow-md rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Wichita Trusts PD Plumbing for HVAC Services
        </h2>
        <Testimonials service="hvac-services" />
      </section>
    </main>
  );
}

