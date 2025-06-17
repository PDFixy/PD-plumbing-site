// components/Layout.tsx
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Head>
      <title>PD Plumbing | Fast, Friendly Plumbing & HVAC in Wichita</title>
      <meta name="description" content="Fixy’s Fast. Fixy’s Friendly. Call PD Plumbing for 24/7 plumbing and HVAC service in Wichita." />
    </Head>
    <Header />
    <main className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
