import React from 'react';
import Layout from '../components/Layout';
import CallToAction from '../components/CallToAction';

export default function HVACServicesPage() {
  return (
    <Layout title="HVAC Services | PD Plumbing">
      <section className="py-10 px-4 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">HVAC Services</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          At PD Plumbing, we specialize in expert-level hvac services. Whether you’re dealing with an emergency or planning an upgrade, our licensed professionals are here to help. Expect fast service, transparent pricing, and our signature smile — every time.
        </p>
        <p className="mt-4 max-w-xl mx-auto text-md text-gray-600">
          Trusted by Wichita homeowners for 5-star service, our team delivers the kind of quality and friendliness that keeps customers coming back. Call now to schedule or get a fast quote.
        </p>
      </section>
      <CallToAction />
    </Layout>
  );
}
