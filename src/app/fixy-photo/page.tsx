"use client";

import Head from "next/head";
import Image from "next/image";


export default function FixyPhotoGiveaway() {
  return (
    <>
      <Head>
        <title>Fixy Photo Giveaway – Win a $50 Gift Card! | PD Plumbing</title>
        <meta
          name="description"
          content="Snap a selfie with Fixy and win! Enter the monthly Fixy Photo Giveaway for a chance to win a $50 gift card from PD Plumbing. Just good vibes – no automation."
        />
      </Head>

      <main className="bg-white text-gray-800 min-h-screen">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-4 border-b">
          <Image
            src="/images/logos/plumbing-van-company-logo.jpg"
            alt="PD Plumbing Logo"
            width={140}
            height={60}
          />
          <div className="mt-4 sm:mt-0 space-x-3">
            <a
              href="tel:3168715499"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Hero + Giveaway Info */}
        <section className="text-center px-4 py-10">
          <Image
            src="/images/banners/banner-fixy-photo-giveaway.jpg"
            alt="Fixy Photo Giveaway"
            width={900}
            height={300}
            className="mx-auto rounded"
          />
          <h1 className="text-4xl font-bold mt-6">
            Snap a Photo with Fixy & Win!
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Each month, PD Plumbing selects the most creative selfie with Fixy.
            Winner receives a <strong>$50 gift card</strong> — no bots, just
            real smiles.
          </p>

          {/* QR Code */}
          <div className="mt-8">
            <Image
              src="/images/qr/qr_fixy_photo_giveaway.png"
              alt="Fixy Photo QR Code"
              width={180}
              height={180}
              className="mx-auto border border-gray-300 rounded"
            />
          </div>

          {/* Fixy Selfie Pose */}
          <div className="mt-6">
            <Image
              src="/images/fixy/fixy_selfie.png"
              alt="Fixy Selfie Pose"
              width={200}
              height={200}
              className="mx-auto"
            />
          </div>

          {/* Tally Form */}
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

          {/* Monthly Winner */}
          <section className="mt-16 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              🎉 Monthly Winner Spotlight
            </h2>
            <Image
              src="/images/fixy/monthly_winner.jpg"
              alt="June Winner: Alex in Andover"
              width={500}
              height={500}
              className="rounded shadow mx-auto"
            />
            <p className="mt-2 text-gray-600 italic">
              June Winner: Alex in Andover!
            </p>
          </section>

          {/* CTAs */}
          <div className="mt-16 text-center space-x-4">
            <a
              href="tel:3168715499"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
            >
              Call Now
            </a>
            <a
              href="/contact"
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
            >
              Book Now
            </a>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 text-sm text-gray-600 max-w-xl mx-auto text-center">
            <p>
              One entry per person. Photo must clearly include Fixy. Monthly
              winners are selected manually by PD Plumbing staff. We reserve the
              right to change or end the giveaway at any time. Gift cards are
              sent via email.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
