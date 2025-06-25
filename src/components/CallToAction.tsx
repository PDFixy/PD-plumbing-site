"use client";

import Link from "next/link";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="bg-white border border-gray-200 shadow-xl rounded-2xl p-8 mt-12 text-center max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <Image
          src="/images/fixy/fixy-ready.png"
          alt="Fixy the mascot holding a wrench and ready to help"
          width={140}
          height={140}
          className="mx-auto"
        />

        <div className="text-left md:text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">
            Same-Day Plumbing & HVAC Repairs in Wichita
          </h2>
          <p className="text-gray-700 mb-4 text-lg">
            Fixy’s fast. Fixy’s friendly. Book now and we’ll be on the way today — serving Wichita, Maize, Andover, Augusta, and El Dorado!
          </p>

          {/* ⭐ Google-style rating bar */}
          <div className="flex justify-center items-center gap-1 text-yellow-400 text-xl mb-4">
            {"★★★★★"}
            <span className="text-sm text-gray-500 ml-2">
              Trusted by 100+ 5-Star Reviews on Google
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3168715499"
              className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
            >
              📞 Call Now
            </a>
            <Link href="/services">
              <span className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition cursor-pointer">
                🔧 Browse Services
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

