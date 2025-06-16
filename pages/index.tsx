import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>PD Plumbing | Fast, Friendly Plumbing & HVAC in Wichita</title>
        <meta name="description" content="Fixy’s Fast. Fixy’s Friendly. Call PD Plumbing for 24/7 service in Wichita." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
        {/* HEADER */}
        <div className="text-center">
          <img src="/logo.png" alt="PD Plumbing Logo" className="mx-auto w-52 md:w-64 mb-4" />
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-blue-800">Fast, Friendly Plumbing & HVAC in Wichita</h1>
          <p className="text-lg text-blue-600 font-semibold">📞 <a href="tel:3168715499" className="underline">Call 316-871-5499</a> — 24/7 Emergency Service</p>
        </div>

        {/* FIXY PROMO */}
        <div className="mt-10 bg-yellow-100 border border-yellow-400 p-6 rounded-lg text-center shadow-md">
          <img src="/fixy.png" alt="Fixy the Mascot" className="mx-auto w-28 md:w-36 mb-4" />
          <h2 className="text-2xl font-bold text-yellow-700">Spot Fixy. Snap a Pic. Save 10%.</h2>
          <p className="text-gray-700 mt-2">If you see Fixy on the road, take a photo and show it at your next service to get 10% off!</p>
        </div>

        {/* SERVICES LIST */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4 text-blue-800">Our Services</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left list-disc list-inside text-blue-800">
            <li>Water Heaters</li>
            <li>Drains</li>
            <li>Toilets</li>
            <li>Faucets & Fixtures</li>
            <li>HVAC Repairs</li>
            <li>Emergency Plumbing</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a href="tel:3168715499" className="bg-red-600 text-white text-lg px-8 py-4 rounded-lg shadow hover:bg-red-700 transition">
            📞 Call Now for Fast, Friendly Service
          </a>
        </div>
      </main>
    </>
  )
}
