"use client";

import Image from "next/image";

export default function OwnerMessage() {
  return (
    <section className="bg-gray-50 py-14 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <Image
          src="/images/team/britt.jpeg"
          alt="Britt, Owner of PD Plumbing"
          width={200}
          height={200}
          className="rounded-full mx-auto mb-6 border-4 border-blue-200 shadow-md"
        />
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
          A Message from the Owner
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg">
          At PD Plumbing, We believe in honest work, transparent pricing,
          and treating your home like our own. Whether it’s a leaky faucet or a
          full system replacement, our job is to make your life easier — not
          harder.
        </p>
        <p className="text-lg font-semibold text-gray-800 italic mb-2">
          “We’re here to fix it fast, fix it right, and treat you like family.”
        </p>
        <p className="font-bold text-blue-800">– Britt, Owner</p>
      </div>
    </section>
  );
}

