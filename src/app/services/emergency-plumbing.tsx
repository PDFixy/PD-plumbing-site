import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import CallToAction from '../../components/CallToAction';
import Image from 'next/image';

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>Emergency Plumbing | PD Plumbing</title>
        <meta name="description" content="Emergency Plumbing services by PD Plumbing in Wichita. Fast, friendly, expert plumbing and HVAC you can count on. Same-day service available!" />
      </Head>
      <section className="py-8 px-4 max-w-4xl mx-auto">
        <Image src="/assets/images/team/team-photo.jpg" alt="PD Plumbing Team" width={1200} height={500} />
        <h1 className="text-3xl font-bold my-6">Emergency Plumbing</h1>
        <p>Looking for reliable emergency plumbing in Wichita and surrounding areas? PD Plumbing offers expert, same-day service from a friendly local team. Whether you're dealing with a leak, upgrade, or emergency, we’re ready to help—fast.</p>

        <h2 className="text-2xl font-semibold mt-6">Why Choose PD Plumbing?</h2>
        <ul className="list-disc ml-6">
          <li>Licensed, experienced technicians</li>
          <li>Locally owned and operated</li>
          <li>24/7 emergency availability</li>
          <li>Same-day and next-day service</li>
          <li>Upfront pricing, no surprises</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Service Areas</h2>
        <p>We proudly serve Wichita, Maize, Andover, Augusta, El Dorado, and surrounding Kansas communities.</p>

        <h2 className="text-2xl font-semibold mt-6">Let’s Get It Fixed</h2>
        <p>Call us at <strong>(316) 871-5499</strong> or <a href="/book" className="text-blue-600 underline">book your service online</a>. Fixy’s Fast. Fixy’s Friendly.</p>

        <CallToAction />
      </section>
    </Layout>
  );
}
