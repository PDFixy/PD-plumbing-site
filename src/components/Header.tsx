"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logos/pd-logo-new.png"
            alt="PD Plumbing Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold">PD Plumbing</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm lg:text-base">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/pages/testimonials">Testimonials</Link>
          <Link href="/pages/financing">Financing</Link>
          <Link href="/pages/spot-fixy">Spot Fixy</Link>
          <Link href="/pages/fixy-photo">Fixy Photo</Link>
          <Link href="/pages/meet-the-team">Meet the Team</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:3168715499"
          className="hidden md:inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-xl text-sm"
        >
          📞 (316) 871-5499
        </a>
      </div>
    </header>
  );
}
