import Head from 'next/head';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Fixy’s Fixtures Guide | PD Plumbing</title>
        <meta name="description" content="Your guide to faucets, toilets, and everything between." />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Fixy’s Fixtures Guide</h1>
        <p className="text-lg text-center mb-4">Your guide to faucets, toilets, and everything between.</p>

        <img src="/assets/images/fixy/fixy_pointing.png" alt="Fixy Mascot" className="mx-auto mb-8 w-60" />
        <img src="/assets/images/work/faucet-repair.jpg" alt="PD Plumbing at work" className="mx-auto mb-12 w-full rounded shadow" />

        <p className="text-gray-700 mb-6">PD Plumbing is here to help with reliable, same-day service backed by years of experience. Whether it’s a leak, clog, or full fixture replacement, our pros get the job done fast and friendly. Call today!</p>

        <div className="text-center">
          <a href="tel:3168715499" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded">
            📞 Call PD Now
          </a>
        </div>
      </main>
    </>
  );
}
