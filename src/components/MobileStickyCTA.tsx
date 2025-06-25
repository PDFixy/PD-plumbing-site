"use client";

import React from "react";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-md flex justify-around items-center py-3 px-4 sm:hidden">
      <a
        href="tel:3168715499"
        className="bg-blue-600 text-white font-semibold text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        📞 Call Now
      </a>
      <a
        href="/contact"
        className="bg-green-600 text-white font-semibold text-sm px-4 py-2 rounded hover:bg-green-700 transition"
      >
        💬 Message
      </a>
    </div>
  );
}

