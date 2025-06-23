import Link from 'next/link';
import Image from 'next/image';

export default function CallToAction() {
  return (
    <section className="bg-blue-50 border border-blue-200 p-6 rounded-2xl mt-12 text-center shadow-md">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
        <Image
          src="/assets/images/fixy/fixy-ready.png"
          alt="Fixy holding a wrench"
          width={120}
          height={120}
          className="mb-4 md:mb-0"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2 text-blue-900">Need Plumbing Help Fast?</h2>
          <p className="mb-4 text-gray-700">
            Call PD Plumbing now or browse our services — Fixy’s always ready!
          </p>
          <Link href="/services">
            <span className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
              🔧 See All Services
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
