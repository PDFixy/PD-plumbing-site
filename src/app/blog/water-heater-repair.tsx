"use client";

import Head from "next/head";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function WaterHeaterRepair() {
  return (
    <>
      <Head>
        <title>Signs Your Water Heater Needs Repair Now | PD Plumbing</title>
        <meta
          name="description"
          content="Signs Your Water Heater Needs Repair Now from PD Plumbing. Learn how to spot issues, prevent breakdowns, and keep your home comfortable."
        />
      </Head>

      <main className="px-4 sm:px-8 lg:px-16 py-10">
        <h1 className="text-4xl font-bold mb-6">
          Signs Your Water Heater Needs Repair Now
        </h1>

        <Image
          src="/images/plumbing-van-company-logo.jpg"
          alt="Signs Your Water Heater Needs Repair Now"
          width={800}
          height={400}
          className="mb-6 rounded"
        />

        <p className="text-lg mb-4 text-gray-700">
          Water heater issues can sneak up fast — leaving you without hot water
          when you need it most. Here’s what to look for and how PD Plumbing can
          help.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🔧 What You Need to Know
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Warning signs your unit is about to fail</li>
          <li>When a repair makes sense vs. full replacement</li>
          <li>How PD Plumbing fixes water heaters fast</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          📞 Why Call PD Plumbing?
        </h2>
        <p className="mb-6 text-gray-700">
          We offer fast diagnostics, honest pricing, and licensed repair techs
          who show up prepared. Local service you can trust.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-800 my-8">
          "We're the face of fast, friendly service — and we show up when it
          matters most."
        </blockquote>

        <p className="text-lg font-semibold text-gray-800 mt-10 mb-4">
          Need your water heater checked out? Book your repair with Fixy and the
          PD Plumbing team today.
        </p>

        <CallToAction />
        <Testimonials service="water-heater-repair" />
      </main>
    </>
  );
}
