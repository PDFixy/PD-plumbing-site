import Head from 'next/head';

export default function BlogPost() {
  return (
    <>
      <Head>
        <title>Fixy vs. the Leak | PD Plumbing</title>
        <meta name="description" content="Fixy tackles tough leaks — here's how we help." />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">Fixy vs. the Leak</h1>
        <p className="text-lg text-center mb-4">Fixy tackles tough leaks — here's how we help.</p>

        <img src="/assets/images/fixy/fixy_thumbsup.png" alt="Fixy Mascot" className="mx-auto mb-8 w-60" />
        <img src="/assets/images/work/kitchen-sink-clog.jpg" alt="PD Plumbing at work" className="mx-auto mb-12 w-full rounded shadow" />

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
