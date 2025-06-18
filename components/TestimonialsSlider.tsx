import React from 'react';

const testimonials = [
  {
    name: 'Mahpara Karim',
    text: 'Very courteous & knowledgeable. Provide extra tip on how to do preventive maintenance on kitchen sink pipes. Really appreciated the technician wearing shoe cover before entering the house.',
  },
  {
    name: 'Thomas Schumann',
    text: 'Tyler and Cooper did a very professional job. Explained all the steps clearly. Timely and courteous also. Thanks!',
  },
  {
    name: 'Matthew Tannehill',
    text: 'We used them for a full house new plumbing. They were very efficient, professional and courteous. I highly recommend using their business. They even came back after the job was finished to ensure satisfactory install.',
  },
  {
    name: 'Robert Zavala',
    text: 'I called and emailed several Heating and Air businesses in El Dorado without any responses. PD Plumbing emailed right back and I was able to schedule a routine heater inspection two days later. I received a text message when the technician was on their way. I would definitely use PD Plumbing Heating and Cooling again in the future.',
  },
  {
    name: 'Connie Hummel',
    text: 'The young men that came to work on our drain, were professional but very friendly. Along with being very knowledgeable. Definitely will call PD Plumbing the next time we have plumbing issues.',
  },
  {
    name: 'Scott Johnson',
    text: 'Timely, professional, personable, awesome. PD plumbing is the best plumbing/heating service in Kansas let alone my area.',
  },
  {
    name: 'Lisa Wood',
    text: 'Our A/C wasn\'t working. Hunter Tilson came out and did such a thorough job. He took Photos, made a List and sat down & explained everything to me of what he found and what was wrong...',
  },
  {
    name: 'Brookes Milbourn',
    text: 'I have used Pd plumbing now for several years and couldn\'t say enough good about them. Very punctual, professional and the work quality is also good. I have always felt like I was treated fair. I have referred many friends to them and will continue to do so!',
  },
  {
    name: 'Erin',
    text: 'Cooper was great! He went above and beyond to remove tree roots from my sewer lines and get my plumbing back up and going. I’m very appreciative of the time he took to correct the issue. Will use again for all my future plumbing needs.',
  },
  {
    name: 'Christina Hull',
    text: 'I wanted the best because you cannot and should not mess around with anything plumbing related so I called PD plumbing... BOBBY IS THE BEST! Please be good to him PD plumbing.',
  },
];

export default function TestimonialsSlider() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">What Our Customers Say</h2>
        <div className="space-y-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-lg italic">“{t.text}”</p>
              <p className="mt-4 font-semibold text-blue-800">— {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
