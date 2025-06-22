'use client';

[
  {
    "name": "Sarah J.",
    "content": "PD Plumbing fixed our water heater the same day we called. Super friendly and professional!",
    "service": "water-heater-repair"
  },
  {
    "name": "John D.",
    "content": "They replaced our sewer line quickly and cleaned everything up perfectly. Highly recommend!",
    "service": "sewer-line-repair"
  },
  {
    "name": "Angela K.",
    "content": "The technician found our leak fast and explained everything clearly. Honest company!",
    "service": "leak-detection"
  },
  {
    "name": "Mike T.",
    "content": "PD Plumbing handled my emergency pipe burst on a Saturday night. Lifesavers.",
    "service": "emergency-plumbing"
  },
  {
    "name": "Jessica H.",
    "content": "Loved how fast and affordable their faucet install was. Would use again.",
    "service": "faucet-installation"
  }
]
'use client';

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
            <p className="text-sm text-right text-gray-400">Service: {t.service.replace(/-/g, ' ')}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
