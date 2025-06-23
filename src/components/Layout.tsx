"use client";

import Header from "./Header";
import Footer from "./Footer";
import CookieBanner from "./CookieBanner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />
      <main className="flex-grow">{children}</main>
      <CookieBanner />
      <Footer />
    </div>
  );
}
