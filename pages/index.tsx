import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>PD Plumbing | Wichita Plumbing & HVAC</title>
        <meta name="description" content="Fast, friendly plumbing & HVAC in Wichita. 24/7 emergency service. Call 316-871-5499." />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 p-8">
        {/* HEADER */}
        <div className="text-center">
          <img src="/logo.png" alt="PD Plumbing Logo" className="mx-auto w-40 mb-4" />
          <h1 className="text-4xl font-bold mb-2">Fast, Friendly Plumbing & HVAC in Wichita</h1>
          <p className="text-lg text-blue-600 font-semibold">Call Now: <a href="tel:3168715499" className="underline">316-871-5499</a> (24/7 Emergency Service)</p>
        </div>

        {/* FIXY PROMO */}
        <div className="mt-10 bg-blue-100 border border-blue-300 p-6 rounded-lg text-center">
          <img src="/fixy.png" alt="Fixy the Mascot" className="mx-auto w-28 mb-3" />
          <h2 className="text-2xl font-bold">Spot Fixy, Snap a Pic, Save 10%!</h2>
          <p className="text-gray-700">See Fixy on the road? Snap a pic and show us at your next service call to get 10% off!</p>
        </div>

        {/* SERVICES */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">Our Services</h3>
          <ul className="grid grid-cols-2 gap-4 text-left list-disc list-inside text-blue-800">
            <li>Plumbing Repairs</li>
            <li>HVAC Maintenance</li>
            <li>Water Heater Installations</li>
            <li>Drain Cleaning</li>
            <li>Toilet & Faucet Repair</li>
            <li>Emergency Plumbing (24/7)</li>
          </ul>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-10 text-center">
          <a href="tel:3168715499" className="bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 transition">
            📞 Call Now for Service
          </a>
        </div>
      </main>
    </>
  )
}
