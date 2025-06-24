"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-10 mt-20 text-sm text-gray-700 border-t border-gray-200">
      {/* Mascot */}
      <div className="mb-4">
        <Image
          src="/assets/images/fixy/fixy-waving.png"
          alt="Fixy the PD Plumbing mascot waving"
          width={80}
          height={80}
          className="mx-auto"
        />
      </div>

      {/* Copyright */}
      <p className="mb-1">
        &copy; {new Date().getFullYear()} PD Plumbing. All rights reserved.
      </p>
      <p className="mb-6">Built with 💧 by PD Plumbing & Fixy the Mascot 🛠️</p>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-4 text-blue-600">
        <a
          href="/privacy-policy"
          className="underline hover:text-blue-800 transition"
        >
          Privacy Policy
        </a>
        <a
          href="/terms-of-service"
          className="underline hover:text-blue-800 transition"
        >
          Terms of Service
        </a>
        <a
          href="/contact"
          className="underline hover:text-blue-800 transition"
        >
          Contact Us
        </a>
      </div>
    </footer>
  );
}
