// pages/water-softener.tsx

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import FixyImage from '../public/fixy-smile.png'; // Update if your Fixy image is in a different path

export default function WaterSoftener() {
  return (
    <>
      <Head>
        <title>Halo Water Softeners Installed Fast | PD Plumbing Wichita</title>
        <meta name="description" content="We install Halo Water Softeners for Wichita homeowners who want softer water, longer-lasting appliances, and peace of mind. Call PD Plumbing today!" />
      </Head>

      <main className="px-6 py-12 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-700">We Install Halo Water Softeners — Fast & Friendly</h1>
        <p className="text-lg mb-6 text-gray-700">
          Fixy and the team at PD Plumbing help Wichita homeowners get rid of hard water for good — with premium Halo Water Softeners installed the right way.
        </p>

        <Image src={FixyImage} alt="Fixy mascot smiling" width={160} height={160} className="mx-auto mb-6" />

        <div className="bg-blue-600 text-white rounded px-6 py-4 inline-block text-xl shadow">
          Call or Text: <a href="tel:3168715499" className="underline">316-871-5499</a>
        </div>

        <section className="mt-12 text-left">
          <h2 className="text-2xl font-semibold mb-2">Why Homeowners Choose Halo + PD Plumbing:</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>✓ We install Halo Water Softeners – premium quality, long-lasting systems</li>
            <li>✓ Same-day service available in most cases</li>
            <li>✓ Transparent pricing with no surprises</li>
            <li>✓ Trusted locally with over 250 five-star reviews</li>
            <li>✓ Backed by Fixy – the face of fast, friendly plumbing</li>
          </ul>
        </section>

        <section className="mt-12 bg-blue-50 p-6 rounded text-left">
          <h3 className="text-xl font-bold mb-2">Wichita's Authorized Halo Installer</h3>
          <p className="text-gray-700 mb-4">
            Whether you're upgrading your old system or installing a softener for the first time, our team is trained to get your Halo Water Softener installed fast and flawlessly.
          </p>
          <Link href="/contact">
            <span className="text-blue-600 underline">Request a free quote →</span>
          </Link>
        </section>
      </main>
    </>
  );
}
