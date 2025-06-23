"use client";

import testimonials from "@/app/data/testimonials.json";

export default function Testimonials({ service }: { service: string }) {
  const filtered = testimonials
    .filter((t) => t.service === service)
    .slice(0, 2);

  return (
    <section className="mt-12 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        What Our Customers Say
      </h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {filtered.map((t, index) => (
          <div
            key={index}
            className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-gray-800 italic leading-relaxed">
              “{t.content}”
            </p>
            <p className="mt-4 font-semibold text-right text-gray-700">
              – {t.name}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="/testimonials"
          className="inline-block text-blue-600 font-medium underline hover:text-blue-800 transition"
        >
          Read more reviews from happy customers →
        </a>
      </div>
    </section>
  );
}
