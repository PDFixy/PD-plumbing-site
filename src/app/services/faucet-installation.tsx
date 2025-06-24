"use client";
import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function FaucetInstallation() {
  return (
    <Layout>
      <main className="px-4 sm:px-8 lg:px-16 py-10 space-y-16">
        {/* Hero Section */}
        <section className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-blue-900">
            Faucet Installation in Wichita
          </h1>
          <Image
            src="/images/plumbing-van-company-logo.jpg"
            alt="Faucet Installation"
            width={800}
            height={400}
            className="rounded mb-6"
          />
          <p className="mb-4 text-gray-700">
            Leaky or outdated faucet? We’ll help you upgrade to a modern,
            water-efficient model quickly and professionally.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Kitchen and bathroom faucet installs</li>
            <li>Leak repairs and replacements</li>
            <li>Stylish fixture upgrades</li>
            <li>Water-saving options available</li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-50 shadow-md rounded-lg p-6">
          <CallToAction />
        </section>

        {/* Testimonials Section */}
        <section className="bg-white shadow-md rounded-lg p-6 text-center">
          <Testimonials service="faucet-installation" />
        </section>
      </main>
    </Layout>
  );
}
