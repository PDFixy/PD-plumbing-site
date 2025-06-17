import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <Link href="/">
        <img src="/logo.png" alt="PD Plumbing Logo" className="h-12" />
      </Link>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <a href="tel:3168715499" className="bg-red-600 text-white px-4 py-2 rounded">Emergency Call</a>
      </nav>
    </header>
  );
}
