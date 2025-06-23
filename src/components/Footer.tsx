import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-8 mt-20 text-sm text-gray-700 border-t">
      <div className="mb-4">
        <Image
          src="/assets/images/fixy/fixy-waving.png"
          alt="Fixy the PD Plumbing mascot waving"
          width={80}
          height={80}
          className="mx-auto"
        />
      </div>
      <p className="mb-1">
        &copy; {new Date().getFullYear()} PD Plumbing. All rights reserved.
      </p>
      <p className="mb-4">Built with 💧 by PD Plumbing & Fixy the Mascot 🛠️</p>

      <div className="flex justify-center space-x-4">
        <a
          href="/privacy-policy"
          className="text-blue-600 underline hover:text-blue-800"
        >
          Privacy Policy
        </a>
        <a
