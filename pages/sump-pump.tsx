import Layout from '@/components/Layout';
import Head from 'next/head';

export default function Sump PumpBlog() {
  return (
    <Layout>
      <Head>
        <title>Sump Pump | PD Plumbing Blog</title>
        <meta name="description" content="Learn about sump pump and how PD Plumbing helps Wichita homeowners solve this issue quickly and affordably." />
      </Head>
      <main className="p-6 md:p-12">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Sump Pump</h1>
        <p className="text-lg text-gray-700 mb-6">
          Discover how PD Plumbing addresses common sump pump issues with fast, friendly service and expert workmanship.
        </p>
        <p className="text-md text-gray-600 mb-4">
          Our licensed technicians are available 24/7 to handle your sump pump needs. Whether it's routine maintenance or an emergency fix, we’ve got you covered.
        </p>
        <p className="text-md text-gray-600">
          Schedule your appointment today or contact us for a free consultation. Trust PD Plumbing for reliable, affordable solutions.
        </p>
      </main>
    </Layout>
  );
}
