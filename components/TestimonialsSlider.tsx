import React from "react";

const testimonials = [
  {
    name: "John M.",
    text: "PD Plumbing came out the same day and fixed our water heater fast. Super friendly and professional!",
  },
  {
    name: "Sandra K.",
    text: "Fixy is the best idea ever. Love the QR code campaign. I spotted Fixy and saved money!",
  },
  {
    name: "Derrick P.",
    text: "Quick, reliable, and honest. I recommend PD Plumbing to all my neighbors.",
  },
  {
    name: "Melissa R.",
    text: "The whole team was courteous and efficient. It’s rare to find service this good anymore.",
  },
  {
    name: "Tom B.",
    text: "Excellent experience — from the office to the tech who showed up. Highly recommend.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial-slider">
      <div className="testimonial-track">
        {testimonials.map((t, idx) => (
          <div className="testimonial" key={idx}>
            <p className="text">“{t.text}”</p>
            <p className="name">– {t.name}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .testimonial-slider {
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding: 1rem 0;
        }

        .testimonial-track {
          display: flex;
          gap: 1rem;
        }

        .testimonial {
          min-width: 300px;
          flex-shrink: 0;
          background: #f8f8f8;
          padding: 1rem;
          border-radius: 8px;
          scroll-snap-align: start;
        }

        .text {
          font-style: italic;
        }

        .name {
          margin-top: 0.5rem;
          font-weight: bold;
        }

        /* Optional: hide horizontal scrollbar */
        .testimonial-slider::-webkit-scrollbar {
          display: none;
        }

        .testimonial-slider {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
