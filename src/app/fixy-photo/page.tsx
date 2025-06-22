'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function FixyPhotoGiveaway() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
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

      <section className="text-center px-4 py-10">
        <Image
          src="/assets/images/banners/banner-fixy-photo-giveaway.jpg"
          alt="Fixy Photo Giveaway"
          width={900}
          height={300}
          className="mx-auto"
        />
        <h1 className="text-4xl font-bold mt-6">Snap a Photo with Fixy & Win!</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Every month, the PD Plumbing team picks the most fun or creative photo with Fixy.
          The winner gets a <strong>$50 gift card</strong> — no automation, just good vibes.
        </p>
        <div className="mt-8">
          <Image
            src="/assets/images/qr/qr_fixy_photo_giveaway.png"
            alt="Fixy Photo QR Code"
            width={180}
            height={180}
            className="mx-auto border border-gray-300 rounded"
          />
        </div>
        <div className="mt-6">
          <Image
            src="/assets/images/fixy/fixy_selfie.png"
            alt="Fixy selfie pose"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>
        <div className="mt-12 max-w-2xl mx-auto">
          <iframe
            data-tally-src="https://tally.so/r/3jzPVW"
            loading="lazy"
            width="100%"
            height="500"
            frameBorder="0"
            title="Fixy Photo Giveaway"
          ></iframe>
          <script async src="https://tally.so/widgets/embed.js"></script>
        </div>
        <section className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">🎉 Monthly Winner Spotlight</h2>
          <Image
            src="/assets/images/fixy/monthly_winner.jpg"
            alt="June Winner: Alex in Andover!"
            width={500}
            height={500}
            className="rounded shadow mx-auto"
          />
          <p className="mt-2 text-gray-600 italic">June Winner: Alex in Andover!</p>
        </section>
        <div className="mt-16 text-center space-x-4">
          <a href="tel:3168715499" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Call Now
          </a>
          <a href="/contact" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
            Book Now
          </a>
        </div>
        <div className="mt-12 text-sm text-gray-600 max-w-xl mx-auto text-center">
          <p>One entry per person. Photo must clearly show Fixy. Winners chosen manually each month by PD Plumbing staff. We reserve the right to cancel or modify this giveaway at any time. Gift card delivered by email.</p>
        </div>
      </section>
    </main>
  );
}
