"use client";

import Head from "next/head";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function HvacServices() {
  return (
    <>
      <Head>
        <title>
          HVAC Maintenance Tips That Actually Save You Money | PD Plumbing
        </title>
        <meta
          name="description"
          content="Want lower utility bills and fewer breakdowns? Discover the most effective HVAC maintenance tips from PD Plumbing to protect your comfort year-round."
        />
      </Head>

      <main className="px-4 sm:px-8 lg:px-16 py-10">
        <h1 className="text-4xl font-bold mb-6">
          HVAC Maintenance Tips That Actually Save You Money
        </h1>

        <Image
          src="/assets/images/plumbing-van-company-logo.jpg"
          alt="HVAC Maintenance Tips That Save You Money"
          width={800}
          height={400}
          className="mb-6 rounded"
        />

        <p className="text-lg mb-4 text-gray-700">
          Tired of surprise HVAC repairs? Ready to lower your heating and cooling bills?
          Smart homeowners know that consistent HVAC maintenance is the key to long-term
          savings — and peace of mind.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          ✅ Quick Wins You Can Do Right Now
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Replace your air filter every 30–60 days</li>
          <li>Keep outdoor condenser units clear of debris and leaves</li>
          <li>Check thermostat settings for seasonal efficiency</li>
          <li>Seal leaky ducts with tape or mastic</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          💸 Why Annual Tune-Ups Pay Off
        </h2>
        <p className="mb-6 text-gray-700">
          Systems that are regularly tuned run more efficiently, last longer,
          and are less likely to break when it&apos;s freezing or scorching. Our team
          at PD Plumbing offers full HVAC inspections to catch small issues
          before they become big bills.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          📍 Wichita’s Local HVAC Pros
