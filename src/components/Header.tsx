'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo or Title */}
        <h1 className="text-2xl font-bold tracking-tight">
          <Link href="/" className="hover:text-blue-200 transition">
            PD Plumbing
          </Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm sm:text-base font-medium">
          <Link href="/" className="hover:text-blue-200 transition">Home</Link>
          <Link href="/services" className="hover:text-blue-200 transition">Services</Link>
          <Link href="/blog" className="hover:text-blue-200 transition">Blog</Link>
          <Link href="/testimonials" className="hover:text-blue-200 transition">Testimonials</Link>
          <Link href="/financing" className="hover:text-blue-200 transition">Financing</Link>
          <Link href="/contact" className="hover:text-blue-200 transition">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
