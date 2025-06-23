'use client';

import Head from 'next/head';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function FinancingPage() {
  return (
    <>
      <Head>
        <title>Financing Options | PD Plumbing</title>
        <meta
          name="description"
          content="Need plumbing or HVAC repairs but worried about cost? PD Plumbing offers financing with low monthly payments and no hidden fees."
        />
      </Head>

      <Header />

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">Fix Now. Pay Later. Smile Sooner.</h1>
        <p className="mb-6 text-center text-gray-700 text-lg">
          We believe everyone should have access to affordable plumbing and HVAC solutions — without the stress of upfront costs.
        </p>

        <section className="bg-gray-100 rounded-lg p-6 mb-10">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>Low monthly payments</li>
            <li>No down payment</li>
            <li>No annual fees or prepayment penalties</li>
            <li>Competitive interest rates</li>
            <li>Programs available even with less-than-perfect credit</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2">How to Apply</h2>
          <p className="text-gray-700">
            Financing is available for complete replacements, installations, and even repair services. All financing options
            require a completed application and approval before PD Plumbing can begin work.
          </p>
        </section>

        <div className="text-center">
          <p className="mb-4 font-medium text-lg">Call us at <a href="tel:3168715499" className="text-blue-600 hover:underline">316-871-5499</a> to apply or ask questions.</p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700"
          >
            Get In Touch
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
