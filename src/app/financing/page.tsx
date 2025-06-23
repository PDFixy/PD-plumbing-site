"use client";

import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function FinancingPage() {
  return (
    <>
      <Head>
        <title>Affordable Plumbing & HVAC Financing | PD Plumbing</title>
        <meta
          name="description"
          content="Fix now and pay later with PD Plumbing. Enjoy low monthly payments, no upfront costs, and fast approval for all plumbing and HVAC services."
        />
      </Head>

      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Fix Now. Pay Later. Smile Sooner.
        </h1>
        <p className="mb-6 text-center text-gray-700 text-lg">
          Everyone deserves quality repairs without financial stress. PD
          Plumbing offers flexible payment plans to help you move forward with
          confidence.
        </p>

        <section className="bg-gray-100 rounded-lg p-6 mb-10 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">💳 What We Offer</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Low monthly payments</li>
            <li>No down payment required</li>
            <li>No annual fees or prepayment penalties</li>
            <li>Competitive interest rates</li>
            <li>Options for all credit levels</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">📄 How to Apply</h2>
          <p className="text-gray-700">
            Financing is available for replacements, new installs, and even
            major repairs. Approval is fast — simply call or apply before
            service begins.
          </p>
        </section>

        <div className="text-center mt-8">
          <p className="mb-4 font-medium text-lg">
            Call{" "}
            <a href="tel:3168715499" className="text-blue-600 hover:underline">
              316-871-5499
            </a>{" "}
            to apply or get your questions answered.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Get In Touch
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
