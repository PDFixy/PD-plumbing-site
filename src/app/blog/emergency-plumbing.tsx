"use client";

import Head from "next/head";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function EmergencyPlumbing() {
  return (
    <>
      <Head>
        <title>Emergency Plumbing Tips to Prevent Major Damage | PD Plumbing</title>
        <meta
          name="description"
          content="Burst pipe? Overflowing toilet? Learn how to minimize damage with these emergency plumbing tips from the pros at PD Plumbing — and when to call Fixy fast."
        />
      </Head>

      <main className="px-4 sm:px-8 lg:px-16 py-10">
        <h1 className="text-4xl font-bold mb-6">Emergency Plumbing Tips to Prevent Major Damage</h1>

        <Image
          src="/assets/images/plumbing-van-company-logo.jpg"
          alt="Emergency Plumbing Tips to Prevent Major Damage"
          width={800}
          height={400}
          className="mb-6 rounded"
        />

        <p className="text-lg mb-4 text-gray-700">
          When a plumbing emergency strikes — time is everything. Whether you’re dealing with a burst pipe, a flooded basement, or an overflowing toilet,
          these quick tips can help you avoid thousands in damage before the PD Plumbing team arrives.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">🚨 What To Do Immediately</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Shut off your main water supply (know where it is!)</li>
          <li>Turn off your water heater to avoid pressure buildup</li>
          <li>Contain the leak with towels, buckets, or plastic wrap</li>
          <li>Avoid using electrical devices near flooded areas</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">📵 When Not to DIY</h2>
        <p className="mb-6 text-gray-700">
          Emergencies aren’t the time to guess. If you notice water near your electrical syst
