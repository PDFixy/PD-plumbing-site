"use client";
import React from "react";
import Image from "next/image";
import Layout from "@/app/components/Layout";
import CallToAction from "@/app/components/CallToAction";
import Testimonials from "@/app/components/Testimonials";

export default function FaucetInstallation() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Faucet Installation in Wichita</h1>
        <Image
          src="/assets/images/plumbing-van-company-logo.jpg"
          alt="Faucet Installation"
          width={800}
          height={400}
          className="rounded mb-6"
        />
        <p className="mb-4">
          Leaky or outdated faucet? We’ll help you upgrade to a modern, water-efficient model quickly and professionally.
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Kitchen and bathroom faucet installs</li>
          <li>Leak repairs and replacements</li>
          <li>Stylish fixture upgrades</li>
          <li>Water-saving options available</li>
        </ul>
        <CallToAction />
        <Testimonials service="faucet-installation" />
      </div>
    </Layout>
  );
}
