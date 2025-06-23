"use client";

import React from "react";
import Image from "next/image";
import Layout from "@/app/components/Layout";
import CallToAction from "@/app/components/CallToAction";
import Testimonials from "@/app/components/Testimonials";

export default function WaterFiltration() {
  return (
    <Layout>
      <main className="px-4 sm:px-8 lg:px-16 py-10 space-y-16">

        {/* Water Filtration Overview */}
        <section className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-blue-900">
            Water Filtration System Installation in Wichita
          </h1>
          <Image
            src="/assets/images/plumbing-van-company-logo.jpg"
            alt="Water Filtration"
            width={800}
            height={400}
            className="rounded mb-6"
          />
          <p className="text-gray-700 mb-4">
            Clean, pure water is essential for your family’s health and comfort.
            Our water filtration solutions remove contaminants and ensure great-tasting water right from your tap.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Whole-house filtration systems</li>
            <li>Reverse osmosis installations</li>
            <li>Hard water and sediment control</li>
            <li>Expert filter replacement and servicing</li>
          </ul>
        </section>

        {/* Call To Action */}
        <section className="bg-blue-50 shadow-md rounded-lg p-6">
          <CallToAction />
        </section>

        {/* Testimonials */}
        <section className="bg-white shadow-md rounded-lg p-6 text-center">
          <Testimonials service="water-filtration" />
        </section>

      </main>
    </Layout>
  );
}
