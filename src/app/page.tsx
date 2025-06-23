'use client';

import Head from 'next/head';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CallToAction from '@/app/components/CallToAction';
import Testimonials from '@/app/components/Testimonials';
import OwnerMessage from '@/app/components/OwnerMessage';

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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">

        {/* Hero */}
        <section className="mb-12">
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
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <Image src="/images/badge-5star.png" alt="5-star rating" width={80} height={80} className="mx-auto mb-2" />
            <h3 className="font-bold text-lg">5-Star Rated in Wichita</h3>
            <p className="text-sm">Hundreds of customers love our fast, friendly service.</p>
          </div>
          <div>
            <Image src="/images/badge-same-day.png" alt="Same-day service" width={80} height={80} className="mx-auto mb-2" />
            <h3 className="font-bold text-lg">Same-Day Service Available</h3>
            <p className="text-sm">Call before noon and we’ll fix it by sundown — guaranteed.</p>
          </div>
          <div>
            <Image src="/images/badge-no-hidden-fees.png" alt="No hidden fees" width={80} height={80} className="mx-auto mb-2" />
            <h3 className="font-bold text-lg">No Hidden Fees</h3>
            <p className="text-sm">Straightforward pricing. Honest work. No surprises.</p>
          </div>
        </section>

        {/* Trust Logos */}
        <section className="flex flex-wrap items-center justify-center gap-6 mb-20">
          <Image src="/assets/images/logos/bbb.png" alt="BBB Accredited" width={120} height={50} />
          <Image src="/assets/images/logos/phcc.png" alt="PHCC Member" width={120} height={50} />
          <Image src="/assets/images/logos/google-guaranteed.png" alt="Google Guaranteed" width={120} height={50} />
          <Image src="/assets/images/logos/pack.png" alt="PACK Certified" width={120} height={50} />
          <Image src="/assets/images/logos/satisfaction.png" alt="Customer Satisfaction" width={120} height={50} />
        </section>

        {/* CTA */}
        <CallToAction />

        {/* Testimonials */}
        <section className="my-20">
          <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
          <Testimonials />
        </section>

        {/* Owner Message */}
        <OwnerMessage />

        {/* Spot Fixy Campaign */}
        <section className="mt-20">
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
        </section>

        {/* Fixy Photo Contest */}
        <section className="mt-12">
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
        </section>

        {/* Financing Section */}
        <section className="mt-20 bg-gray-100 rounded-lg p-6 md:p-10 text-center">
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
