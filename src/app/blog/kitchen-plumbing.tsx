"use client";

import Head from "next/head";
import Image from "next/image";
import CallToAction from "@/app/components/CallToAction";
import Testimonials from "@/app/components/Testimonials";

export default function KitchenPlumbing() {
  return (
    <>
      <Head>
        <title>
          Top Kitchen Plumbing Upgrades That Make Life Easier | PD Plumbing
        </title>
        <meta
          name="description"
          content="Discover the most valuable kitchen plumbing upgrades that boost function and convenience — brought to you by the pros at PD Plumbing in Wichita."
        />
      </Head>

      <main className="px-4 sm:px-8 lg:px-16 py-10">
        <h1 className="text-4xl font-bold mb-6">
          Top Kitchen Plumbing Upgrades That Make Life Easier
        </h1>

        <Image
          src="/assets/images/plumbing-van-company-logo.jpg"
          alt="Top Kitchen Plumbing Upgrades That Make Life Easier"
          width={800}
          height={400}
          className="mb-6 rounded"
        />

        <p className="text-lg mb-4 text-gray-700">
          Your kitchen is the heart of your home — and when the plumbing works
          better, everything runs smoother. Whether you're remodeling or just
          making simple changes, these smart upgrades will save you time, water,
          and headaches.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          🚰 Game-Changing Kitchen Upgrades
        </h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Touchless or pull-down faucets for hands-free convenience</li>
          <li>Garbage disposals that don’t jam every week</li>
          <li>Pot fillers — a must-have above the stove</li>
          <li>Filtered water taps for drinking and cooking</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          👨‍🔧 When to Call a Pro
        </h2>
        <p className="mb-6 text-gray-700">
          If you're dealing with low water pressure, recurring clogs, or leaky
          fixtures — don’t patch it yourself. We’ll diagnose the root issue and
          upgrade your kitchen plumbing the right way the first time.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          📍 Wichita’s Kitchen Plumbing Experts
        </h2>
        <p className="mb-6 text-gray-700">
          PD Plumbing delivers expert kitchen plumbing upgrades for homeowners
          across Wichita, Andover, Maize, El Dorado, and surrounding areas. We
          combine smart solutions with fast, friendly service.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-800 my-8">
          "We don’t just fix kitchens — we optimize them for everyday life."
        </blockquote>

        <p className="text-lg font-semibold text-gray-800 mt-10 mb-4">
          Ready to upgrade your kitchen plumbing? Book your service with Fixy
          and the PD Plumbing team today.
        </p>

        <CallToAction />
        <Testimonials service="kitchen-plumbing" />
      </main>
    </>
  );
}
