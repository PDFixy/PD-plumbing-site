"use client";

import Image from "next/image";
import Layout from "@/components/Layout";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function WaterHeaterRepair() {
  return (
    <Layout>
      <main className="px-4 sm:px-8 lg:px-16 py-10 space-y-16">
        {/* Overview Section */}
        <section className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-blue-900">
            Water Heater Repair in Wichita
          </h1>
          <Image
            src="/images/plumbing-van-company-logo.jpg"
            alt="Water Heater Repair"
            width={800}
            height={400}
            className="rounded mb-6"
          />
          <p className="text-gray-700 mb-4">
            No hot water? Strange noises or leaks? We specialize in fast,
            affordable water heater repairs so you can get back to comfort and
            convenience — today.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Same-day water heater repairs</li>
            <li>Gas, electric, and tankless systems</li>
            <li>Thermostat and heating element fixes</li>
            <li>Emergency service available 24/7</li>
          </ul>
        </section>

        {/* Education Section */}
        <section className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Signs You Need Water Heater Repair
          </h2>
          <p className="text-gray-700 mb-4">
            If your water is taking too long to heat, runs out quickly, or has a
            rusty tint or odor, these are clear signs your water heater needs
            attention. Delaying service could lead to higher energy bills or a
            complete system failure.
          </p>
          <p className="text-gray-700">
            Our trained techs can diagnose and repair most issues in a single
            visit. We stock the most common parts and tools to restore your hot
            water — fast.
          </p>
        </section>

        {/* Call To Action */}
        <section className="bg-blue-50 rounded-lg p-8 text-center">
          <CallToAction />
        </section>

        {/* Testimonials */}
        <section className="bg-white shadow-md rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Wichita Customers Trust Our Water Heater Repair
          </h2>
          <Testimonials service="water-heater-repair" />
        </section>
      </main>
    </Layout>
  );
}

