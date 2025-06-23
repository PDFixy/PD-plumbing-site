"use client";

import Head from "next/head";
import Image from "next/image";
import CallToAction from "@/app/components/CallToAction";
import Testimonials from "@/app/components/Testimonials";

export default function FaucetInstallation() {
  return (
    <>
      <Head>
        <title>Choosing the Right Faucet for Your Kitchen or Bath | PD Plumbing</title>
        <meta
          name="description"
          content="Need a new faucet? Learn when to DIY, when to call a pro, and how PD Plumbing delivers fast, friendly faucet installation you can trust."
        />
      </Head>

      <main className="px-4 sm:px-8 lg:px-16 py-10">
        <h1 className="text-4xl font-bold mb-6">
          Choosing the Right Faucet for Your Kitchen or Bath
        </h1>

        <Image
          src="/assets/images/plumbing-van-company-logo.jpg"
          alt="Choosing the Right Faucet for Your Kitchen or Bath"
          width={800}
          height={400}
          className="mb-6 rounded"
        />

        <p className="text-lg mb-4 text-gray-700">
          Thinking of upgrading your kitchen or bathroom faucet? PD Plumbing makes it simple.
          Here's how to choose the right one — and how we can help if things go sideways.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">🔧 What You Should Know First</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Drips, rust, or poor pressure? It’s time to replace.</li>
          <li>DIY is fine for some — but know your shut-off valves!</li>
          <li>PD Plumbing handles this fast, with no mess left behind.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">📞 Why Customers Trust PD Plumbing</h2>
        <p className="mb-6 text-gray-700">
          We’re not just plumbers — we’re local pros who show up when it counts.
          Our upfront pricing and Fixy’s friendly service guarantee your home is in the right hands.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-800 my-8">
          "We’re the face of fast, friendly service — and we show up when it matters most."
        </blockquote>

        <p className="text-lg font-semibold text-gray-800 mt-10 mb-4">
          Have questions about faucet installs? Book your visit today — Fixy and the PD team have your back.
        </p>

        <CallToAction />
        <Testimonials service="faucet-installation" />
      </main>
    </>
  );
}
