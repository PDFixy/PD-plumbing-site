"use client";

import Image from "next/image";

export default function GoogleReviewBadge() {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white border border-gray-200 shadow-lg rounded-full flex items-center gap-2 px-4 py-2 hover:shadow-xl transition-all">
      <a
        href="https://www.google.com/search?q=PD+Plumbing+Wichita+Reviews"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
      >
        <Image
          src="/images/logos/google-guaranteed-logo.png"
          alt="Google Guaranteed"
          width={28}
          height={28}
        />
        <div className="text-sm font-medium text-gray-800">
          <span className="text-yellow-500">★★★★★</span>
          <span className="ml-1">(4.9)</span>
        </div>
      </a>
    </div>
  );
}
