"use client";

import Head from "next/head";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function BathroomUpgrades() {
  return (
    <>
      <Head>
        <title>Top Bathroom Upgrade Ideas That Add Value | PD Plumbing</title>
        <meta
          name="description"
          content="Discover the best bathroom upgrades to increase home value and comfort. Learn what to upgrade, when to repair, and how PD Plumbing gets it done fast."
        />
      </Head>

      <main className="px-4 sm:px-8 lg:px-16 py-10">
        <h1 className="text-4xl font-bold mb-6">
          Top Bathroom Upgrade Ideas That Add Value
        </h1>

        <Image
          src="/assets/images/plumbing-van-company-logo.jpg"
          alt="Top Bathroom Upgrade Ideas That Add Value"
          width={800}
          height={400}
          className="mb-6 rounded"
        />

        <p className="text-lg mb-4 text-gray-700">
          Thinking about remodeling your bathroom? These proven upgrades boost
          your home’s value and improve your everyday comfort. Let Fixy and the
          PD Plumbing team show you how to get the most from your remodel.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🛁 Small Changes, Big Impact
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Swap old faucets for modern, water-saving designs</li>
          <li>Install low-flow toilets that lower your bill</li>
          <li>
            Improve lighting and ventilation for comfort and mold prevention
          </li>
          <li>Upgrade vanities and mirrors for better storage and style</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🔍 Repair or Replace?
        </h2>
        <p className="mb-6 text-gray-700">
          Leaky pipes, outdated layouts, or low water pressure? It may be time
          to upgrade. PD Plumbing gives honest advice to help you decide whether
          to repair or replace — and we always put your needs first.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          📈 Will a Bathroom Upgrade Boost Value?
        </h2>
        <p className="mb-6 text-gray-700">
          Yes! A mid-range remodel has an average ROI of 60–70%, according to
          national reports. It’s one of the smartest home improvements you can
          make — especially if you’re planning to sell or refinance.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-800 my-8">
          "We're the face of fast, friendly service — and we show up when it
          matters most."
        </blockquote>

        <p className="text-lg font-semibold text-gray-800 mt-10 mb-4">
          Book your bathroom upgrade with PD Plumbing today — and let Fixy
          handle it the right way from the start.
        </p>

        <CallToAction />
        <Testimonials service="bathroom-upgrades" />
      </main>
    </>
  );
}
