'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function SpotFixyPage() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <Image
          src="/assets/images/logos/plumbing-van-company-logo.jpg"
          alt="PD Plumbing Logo"
          width={140}
          height={60}
        />
        <div className="space-x-4">
          <a href="tel:3168715499" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Call Now
          </a>
          <a href="/contact" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Book Now
          </a>
        </div>
      </div>

      {/* Hero section */}
      <section className="text-center px-4 py-10">
        <Image
          src="/assets/images/fixy/fixy_save10_banner.png"
          alt="Fixy Save 10% Banner"
          width={900}
          height={300}
          className="mx-auto"
        />
        <h1 className="text-4xl font-bold mt-6">Spot Fixy, Save 10%!</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Mention the Spot Fixy campaign and get <strong>10% off your mobilization fee</strong> when you book with PD Plumbing.
        </p>
        <p className="text-sm mt-2 text-gray-500">Terms and conditions apply.</p>

        {/* CTA Buttons */}
        <div className="mt-6 space-x-4">
          <a href="tel:3168715499" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Call Now
          </a>
          <a href="/contact" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
            Book Now
          </a>
        </div>

        {/* Fixy mascot */}
        <div className="mt-10">
          <Image
            src="/assets/images/fixy/fixy_pointing.png"
            alt="Fixy pointing"
            width={220}
            height={220}
            className="mx-auto"
          />
        </div>

        {/* Spot Fixy QR */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-2">Scan this QR code on our vans:</h2>
          <Image
            src="/assets/images/qr/qr_spot_fixy.png"
            alt="Spot Fixy QR Code"
            width={200}
            height={200}
            className="mx-auto border border-gray-300 rounded"
          />
        </div>

        {/* Repeated CTA */}
        <div className="mt-10 space-x-4">
          <a href="tel:3168715499" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Call Now
          </a>
          <a href="/contact" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
            Book Now
          </a>
        </div>

        {/* Redirect to Fixy Photo Giveaway */}
        <div className="mt-14 border-t pt-8 max-w-xl mx-auto">
          <p className="text-lg font-medium">Want a chance to save even more?</p>
          <p className="text-md text-gray-700 mt-2">
            Win a $50 gift card! Snap a photo with Fixy and enter to win.
          </p>
          <Link
            href="/fixy-photo"
            className="inline-block mt-4 bg-yellow-500 text-white px-5 py-3 rounded hover:bg-yellow-600"
          >
            Enter Fixy Photo Giveaway
          </Link>
        </div>
      </section>
    </main>
  );
}
