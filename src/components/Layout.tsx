"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import GoogleReviewBadge from "@/components/GoogleReviewBadge";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Top navigation */}
      <Header />

      {/* Page Content */}
      <main className="flex-grow">
        {children}

        {/* Google Review Badge - shown just above the footer */}
        <div className="mt-16 flex justify-center">
          <GoogleReviewBadge />
        </div>
      </main>

      {/* Mobile sticky CTA (Call Now / Message) */}
      <MobileStickyCTA />

      {/* Cookie notice */}
      <CookieBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}

