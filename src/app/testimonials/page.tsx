'use client';

import testimonials from '@/app/data/testimonials.json';

export default function TestimonialsPage() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Customer Testimonials</h1>
      <div className="grid gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded shadow">
            <p className="text-gray-800 italic">“{t.content}”</p>
            <p className="mt-2 font-semibold text-right text-gray-600">– {t.name}</p>
            <p className="text-sm text-right text-gray-400">
              Service: {t.service.replace(/-/g, ' ')}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

