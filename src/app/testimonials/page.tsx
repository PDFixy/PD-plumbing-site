'use client';

import testimonials from '@/app/data/testimonials.json';
import { Star } from 'lucide-react';

export default function TestimonialsPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Customer Testimonials</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300"
          >
            <p className="text-gray-700 italic text-lg leading-relaxed">“{t.content}”</p>

            {/* Star Rating */}
            <div className="mt-4 flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={i < t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>

            <div className="mt-4 text-right">
              <p className="font-semibold text-blue-600">– {t.name}</p>
              <p className="text-sm text-gray-500">Service: {t.service.replace(/-/g, ' ')}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
