"use client";

import Image from "next/image";
import Layout from "@/app/components/Layout";
import CallToAction from "@/app/components/CallToAction";
import Testimonials from "@/app/components/Testimonials";

export default function WaterHeaterRepair() {
  return (
    <Layout>
      <main className="px-4 sm:px-8 lg:px-16 py-10 space-y-16">

        {/* Overview Section */}
        <section className="bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-blue-900">
            Water Heater Repair in Wichita
          </h1>
          <Image
            src="/assets/images/plumbing-van-company-logo.jpg"
            alt="Water Heater Repair"
            width={800}
            height={400}
            className="rounded mb-6"
          />
          <p className="text-gray-700 mb-4">
            No hot water? Strange noises or leaks? We specialize in fast,
            affordable water heater repairs so you can get back to comfort and
            convenience — today.
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Same-day water heater repairs</li>
            <li>Gas, electric, and tankless systems</li>
            <li>Thermostat and heating element fixes</li>
            <li>Emergency service availabl
