"use client";

import Head from "next/head";
import Image from "next/image";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function GasLineRepair() {
  return (
    <>
      <Head>
        <title>Gas Line Repair: What Every Homeowner Should Know | PD Plumbing</title>
        <meta
          name="description"
          content="Smell gas? Suspect a leak? Learn how to spot the signs of a dangerous gas line issue and what to do before it's too late. PD Plumbing is Wichita’s trusted gas line expert."
        />
      </Head>

      <main className="px-4 sm:px-8 lg:px-16 py-10">
        <h1 className="text-4xl font-bold mb-6">Gas Line Repair: What Every Homeowner Should Know</h1>

        <Image
          src="/assets/images/plumbing-van-company-logo.jpg"
          alt="Gas Line Repair Safety Tips"
          width={800}
          height={400}
          className="mb-6 rounded"
        />

        <p className="text-lg mb-4 text-gray-700">
          A gas leak is not just a plumbing issue — it’s a life safety emergency. Knowing the signs of a leak and who to call can prevent serious harm to
          your home and family. Here’s what you need to know from the pros at PD Plumbing.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">🔥 Signs You May Have a Gas Leak</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Smell of rotten eggs or sulfur</li>
          <li>Hissing sounds near gas appliances</li>
          <li>Dead vegetation or dirt blowing near your gas line</li>
          <li>Dizziness, nausea, or headaches in the home</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">🚫 What NOT to Do</h2>
        <p className="mb-6 text-gray-700">
          Do not turn lights on or off. Don’t use your phone indoors. Don’t attempt to locate the leak yourself.
          Evacuate immediately and call emergency services — then call PD Plumbing.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">🔧 Why PD Plumbing is Wichita’s Gas Line Expert</h2>
        <p className="mb-6 text-gray-700">
          We’re licensed, bonded, and trained in gas line detection and repair. We don’t take chances, and neither should you. If you suspect a leak,
          we’ll be there fast — with the tools and know-how to make your home safe again.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-800 my-8">
          "We don’t upsell fear — we fix what matters, fast and honestly."
        </blockquote>

        <p className="text-lg font-semibold text-gray-800 mt-10 mb-4">
          Need a gas line inspection or emergency repair? Fixy and the PD team are just one call away.
        </p>

        <CallToAction />
        <Testimonials service="gas-line-repair" />
      </main>
    </>
  );
}
