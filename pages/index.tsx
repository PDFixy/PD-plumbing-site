import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <>
      <Head>
        <title>PD Plumbing | The Face of Fast, Friendly Plumbing</title>
        <meta
          name="description"
          content="Fast, friendly plumbing service in Wichita. The Face of Fast, Friendly Plumbing. Available 24/7 for emergencies."
        />
      </Head>

      <Header />

      <main className="max-w-5xl mx-auto px-4 py-10 text-center">
        {/* 🧼 Slogan for Brand Identity */}
        <h1 className="text-3xl font-bold text-blue-800 mb-2">
          The Face of Fast, Friendly Plumbing
        </h1>

        {/* Intro copy */}
        <p className="text-lg text-gray-700 mb-6">
          Serving Wichita and surrounding areas with reliable, same-day plumbing, heating, and cooling. Trusted by homeowners and contractors alike.
        </p>

        {/* Same Day Service Banner */}
        <img
          src="/assets/images/same-day-header-banner.jpg"
          alt="Same Day Service Guaranteed"
          className="mx-auto w-full max-w-3xl rounded-lg shadow-md mb-10"
        />

        {/* Call To Action Button */}
        <CallToAction />

        {/* Highlights */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
          <div>
            <h3 className="font-bold text-xl text-blue-700 mb-2">Emergency Service</h3>
            <p>24/7 plumbing emergencies handled fast. We’re on call when you need us most.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl text-blue-700 mb-2">Trusted Technicians</h3>
            <p>Licensed, background-checked, and friendly. Our team gets the job done right.</p>
          </div>
          <div>
            <h3 className="font-bold text-xl text-blue-700 mb-2">Upfront Pricing</h3>
            <p>No surprises — just honest rates and professional results you can count on.</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
