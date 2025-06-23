'use client';

import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import Testimonials from '@/components/Testimonials';
import OwnerMessage from '@/components/OwnerMessage';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>PD Plumbing | Fast, Friendly Plumbing in Wichita</title>
        <meta
          name="description"
          content="Fixy’s Fast. Fixy’s Friendly. The face of fast, friendly plumbing in Wichita. Call PD today for same-day service."
        />
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">

        {/* Hero */}
        <section className="text-center">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
            Fixy’s Fast. Fixy’s Friendly.
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            The Face of Fast, Friendly Plumbing. Proudly serving Wichita 24/7.
          </p>
          <Image
            src="/images/fixy/banner-fixy-thumbs-up.png"
            alt="Fixy giving thumbs up"
            width={300}
            height={300}
            className="mx-auto"
          />
        </section>

        {/* Value Props */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["5-Star Rated in Wichita", "Same-Day Service Available", "No Hidden Fees"].map((title, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-6 text-center">
              <Image src={`/images/badge-${idx + 1}.png`} alt={title} width={80} height={80} className="mx-auto mb-2" />
              <h3 className="font-bold text-lg mb-1">{title}</h3>
              <p className="text-sm text-gray-600">
                {idx === 0 && 'Hundreds of customers love our fast, friendly service.'}
                {idx === 1 && 'Call before noon and we’ll fix it by sundown — guaranteed.'}
                {idx === 2 && 'Straightforward pricing. Honest work. No surprises.'}
              </p>
            </div>
          ))}
        </section>

        {/* Trust Logos */}
        <section className="bg-gray-50 py-10 px-6 rounded-xl flex flex-wrap items-center justify-center gap-6">
          {["bbb", "phcc", "google-guaranteed", "pack", "satisfaction"].map((logo, idx) => (
            <Image
              key={idx}
              src={`/assets/images/logos/${logo}.png`}
              alt={`${logo} logo`}
              width={120}
              height={50}
            />
          ))}
        </section>

        {/* CTA */}
        <CallToAction />

        {/* Testimonials */}
        <section className="bg-white shadow-md rounded-lg p-10 text-center">
          <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
          <Testimonials />
        </section>

        {/* Owner Message */}
        <section className="bg-gray-50 py-12 px-6 rounded-xl">
          <OwnerMessage />
        </section>

        {/* Fixy Campaign */}
        <section className="grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">📸 Spot Fixy — Save 10%</h2>
            <p className="mb-2">
              See Fixy around town on a van, yard sign, or campaign poster? Snap a photo and show it to your tech for 10% off!
            </p>
            <a
              href="/spot-fixy"
              className="text-blue-600 font-semibold hover:underline"
            >
              Learn More About the Fixy 10% Campaign →
            </a>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">🎁 Fixy Photo Contest</h2>
            <p className="mb-2">
              Be creative! Snap a fun pic with Fixy, upload it, and get a shot at a $50 gift card.
            </p>
            <a
              href="/fixy-photo"
              className="text-blue-600 font-semibold hover:underline"
            >
              Upload Your Photo →
            </a>
          </div>
        </section>

        {/* Financing Section */}
        <section className="bg-blue-50 rounded-lg p-10 text-center">
          <h2 className="text-2xl font-bold mb-3">💰 Fix Now. Pay Later. Smile Sooner.</h2>
          <p className="mb-4 text-gray-700">
            We offer low monthly payments, no down payment, and programs for all budgets — even with less-than-perfect credit.
          </p>
          <a
            href="/financing"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700"
          >
            Learn More About Financing
          </a>
        </section>

      </main>

      <Footer />
    </>
  );
}
