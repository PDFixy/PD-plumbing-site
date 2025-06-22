import Link from 'next/link';
import Image from 'next/image';

export default function CallToAction() {
  return (
    <section className="bg-blue-50 border border-blue-200 p-6 rounded-xl mt-12 text-center">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <Image
          src="/images/fixy/fixy-ready.png"
          alt="Fixy with wrench"
          width={120}
          height={120}
          className="mb-4 md:mb-0"
        />
        <div>
          <h2 className="text-2xl font-bold mb-1 text-blue-900">Need Plumbing Help Fast?</h2>
          <p className="mb-4 text-gray-700">
            Call PD Plumbing now or explore all our services — Fixy’s always ready to go!
          </p>
          <Link href="/services">
            <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition">
              🔧 See All Services
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
