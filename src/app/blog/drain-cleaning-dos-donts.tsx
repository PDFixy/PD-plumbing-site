import Head from 'next/head';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Drain Cleaning Dos and Don’ts | PD Plumbing</title>
        <meta name="description" content="Learn how to properly clean drains and when to call PD Plumbing." />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Drain Cleaning Dos and Don’ts</h1>
        <p className="text-lg text-center mb-4">Learn how to properly clean drains and when to call PD Plumbing.</p>

        <img src="/assets/images/fixy/fixy_toolbox.png" alt="Fixy Mascot" className="mx-auto mb-8 w-60" />
        <img src="/assets/images/work/sewer-repair.jpg" alt="PD Plumbing at work" className="mx-auto mb-12 w-full rounded shadow" />

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
