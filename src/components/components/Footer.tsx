import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-8 mt-12 text-sm text-gray-700">
      <div className="mb-4">
        <Image
          src="/images/fixy/fixy-waving.png"
          alt="Fixy mascot waving"
          width={80}
          height={80}
          className="mx-auto"
        />
      </div>
      <p>&copy; {new Date().getFullYear()} PD Plumbing. All rights reserved.</p>
      <p>Built with 💧 by PD Plumbing & Fixy the Mascot 🛠️</p>
    </footer>
  );
}
