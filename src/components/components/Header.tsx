'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">PD Plumbing</Link>
        </h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
