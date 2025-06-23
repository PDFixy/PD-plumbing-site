"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import MobileStickyCTA from "@/components/MobileStickyCTA";
import GoogleReviewBadge from "@/components/GoogleReviewBadge";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      <main className="flex-grow">
        {children}

        {/* Google Rating Badge (visible on all pages just before footer) */}
        <div className="flex justify-center mt-12">
          <GoogleReviewBadge />
        </div>
      </main>

      {/* Mobile sticky call/message bar */}
      <MobileStickyCTA />

      <CookieBanner />
      <Footer />
    </div>
  );
}
