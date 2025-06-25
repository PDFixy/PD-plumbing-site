"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-10 mt-20 text-sm text-gray-700 border-t border-gray-200">
      {/* Mascot */}
      <div className="mb-4">
        <Image
          src="/images/fixy/fixy-waving.png"
          alt="Fixy the PD Plumbing mascot waving"
          width={80}
          height={80}
          className="mx-auto"
        />
      </div>

      {/* Operating Hours */}
      <div className="mb-4">
        <p className="font-semibold">Hours of Operation:</p>
        <p>Mon–Fri: 8am–5pm | Sat–Sun: Emergency Service Only</p>
      </div>

      {/* Service Areas */}
      <div className="mb-4 text-xs text-gray-600">
        Serving Wichita, Maize, Andover, Augusta, El Dorado
      </div>

      {/* Trust Badges */}
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        <Image src="/images/logos/google-guaranteed.png" alt="Google Guaranteed" width={80} height={30} />
        <Image src="/images/logos/bbb-accredited.png" alt="BBB Accredited" width={80} height={30} />
        <Image src="/images/logos/phcc.png" alt="PHCC" width={80} height={30} />
        <Image src="/images/logos/pack.png" alt="PACK" width={80} height={30} />
        <Image src="/images/logos/5-star-customer.png" alt="5 Star Reviews" width={80} height={30} />
        <Image src="/images/logos/customer-satisfaction.png" alt="Customer Satisfaction" width={80} height={30} />
      </div>

      {/* Copyright */}
      <p className="mb-1">
        &copy; {new Date().getFullYear()} PD Plumbing. All rights reserved.
      </p>
      <p className="mb-6">Built with 💧 by PD Plumbing & Fixy the Mascot 🛠️</p>

      {/* Footer Links */}
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

