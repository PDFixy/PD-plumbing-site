'use client';

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/Layout";

export default function SpotFixyPage() {
  return (
    <>
      <Head>
        <title>Spot Fixy, Save 10% | PD Plumbing Campaign</title>
        <meta
          name="description"
          content="See Fixy on a PD Plumbing van, sign, or flyer? Snap a photo and save 10% off your mobilization fee. Call or book today!"
        />
      </Head>

      <Layout>
        <main className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-20">
          {/* Campaign Card */}
          <div className="bg-white shadow-xl rounded-xl max-w-4xl mx-auto p-8 text-center space-y-8">
            {/* Fixy Banner */}
            <Image
              src="/assets/images/fixy/fixy_save10_banner.png"
              alt="Fixy Save 10% Banner"
              width={900}
              height={300}
              className="mx-auto rounded"
            />

            <h1 className="text-4xl font-extrabold text-blue-900">
              Spot Fixy. Save 10%.
            </h1>

            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              See Fixy on a van, yard sign, or poster around Wichita? Snap a photo and show it to your PD Plumbing tech for{' '}
              <strong className="text-blue-700">10% off your mobilization fee</strong>.
            </p>

            <p className="text-sm text-gray-500">
              Some restrictions may apply. Limit one discount per visit.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="tel:3168715499"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                📞 Call Now
              </a>
              <a
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
              >
                💬 Book Online
              </a>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
