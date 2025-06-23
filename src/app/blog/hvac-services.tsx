"use client";

import Head from "next/head";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function HvacServices() {
  return (
    <>
      <Head>
        <title>HVAC Maintenance Tips to Save You Money Year-Round | PD Plumbing</title>
        <meta
          name="description"
          content="HVAC Maintenance Tips to Save You Money Year-Round from PD Plumbing. Learn how to solve problems, prevent issues, and improve your home systems."
        />
      </Head>

      <main className="px-4 sm:px-8 lg:px-16 py-10">
        <h1 className="text-4xl font-bold mb-6">HVAC Maintenance Tips to Save You Money Year-Round</h1>

        <Image
          src="/assets/images/plumbing-van-company-logo.jpg"
          alt="HVAC Maintenance Tips to Save You Money Year-Round"
          width=800
          height=400
          className="mb-6 rounded"
        />

        <p className="text-lg mb-4 text-gray-700">
          HVAC Maintenance Tips to Save You Money Year-Round – Learn how PD Plumbing can help you handle this common home concern with confidence.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">🔧 What You Need to Know</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Warning signs to look out for</li>
          <li>When DIY is okay vs. when to call a pro</li>
          <li>How PD Plumbing solves this fast</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">📞 Why Call PD Plumbing?</h2>
        <p className="mb-6 text-gray-700">
          We offer honest pricing, fast response times, and the kind of local service that big chains just can’t match.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-800 my-8">
          "We're the face of fast, friendly service — and we show up when it matters most."
        </blockquote>

        <p className="text-lg font-semibold text-gray-800 mt-10 mb-4">
          Have questions about hvac maintenance tips to save you money year-round? Book your service with Fixy and the PD team today.
        </p>

        <CallToAction />
        <Testimonials service="hvac-services" />
      </main>
    </>
  );
}