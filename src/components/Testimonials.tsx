"use client";

import testimonials from '@/app/data/testimonials.json';

export default function Testimonials({ service }: { service: string }) {
  const filtered = testimonials.filter(t => t.service === service).slice(0, 2);

  return (
    <section className="mt-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">What Our Customers Say</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((t, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded shadow">
            <p className="text-gray-800 italic">“{t.content}”</p>
            <p className="mt-2 font-semibold text-right text-gray-600">– {t.name}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a href="/testimonials" className="text-blue-600 underline hover:text-blue-800">
          See all testimonials
        </a>
      </div>
    </section>
  );
}
