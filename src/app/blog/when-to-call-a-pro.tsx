import React from 'react';
import Head from 'next/head';
import Layout from '../../components/Layout';
import CallToAction from '../../components/CallToAction';

export default function Page() {
  return (
    <Layout>
      <Head>
        <title>When to Call a Pro: DIY vs. Professional Plumbing | PD Plumbing</title>
        <meta name="description" content="Learn about when to call a pro: diy vs. professional plumbing from PD Plumbing. Expert insights, pro tips, and when to call our friendly Wichita-based team for help." />
      </Head>
      <article>
        <h1>When to Call a Pro: DIY vs. Professional Plumbing</h1>
        <p><strong>Snippet:</strong> When to Call a Pro: DIY vs. Professional Plumbing can save homeowners thousands by preventing damage, avoiding DIY mistakes, and keeping your home running efficiently.</p>

        <h2>Overview</h2>
        <p>When to Call a Pro: DIY vs. Professional Plumbing is a common concern for homeowners. Whether you're dealing with an urgent issue or planning ahead, knowing what to expect can save time and money.</p>

        <h2>What You’ll Learn</h2>
        <ul>
          <li>When to call PD Plumbing for help</li>
          <li>Common issues we solve</li>
          <li>How to avoid costly mistakes</li>
        </ul>

        <h2>Redirected Service</h2>
        <p>Need help now? <a href="/services">Visit our plumbing and HVAC service page</a> or call us at (316) 871-5499.</p>

        <h2>Pro Tips</h2>
        <ul>
          <li>Schedule seasonal inspections</li>
          <li>Know where your shut-off valves are</li>
        </ul>

        <CallToAction />
      </article>
    </Layout>
  );
}
