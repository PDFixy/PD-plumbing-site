"use client";

import React from "react";
import Image from "next/image";
import Layout from "@/components/Layout";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";

export default function WaterFiltration() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">
          Water Filtration System Installation in Wichita
        </h1>
        <Image
          src="/assets/images/plumbing-van-company-logo.jpg"
          alt="Water Filtration"
          width={800}
          height={400}
          className="rounded mb-6"
        />
        <p className="mb-4">
          Clean, pure water is essential for your family’s health and comfort.
          Our water filtration solutions remove contaminants and ensure great-tasting water right from your tap.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Whole-house filtration systems</li>
          <li>Reverse osmosis installations</li>
          <li>Hard water and sediment control</li>
          <li>Expert filter replacement and servicing</li>
        </ul>
        <CallToAction />
        <Testimonials service="water-filtration" />
      </div>
    </Layout>
  );
}
