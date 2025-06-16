import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function ToiletRepairPage() {
  return (
    <>
      <Head>
        <title>Toilet Repair in Wichita | PD Plumbing</title>
        <meta name="description" content="Running toilet? Leaking tank? Call Fixy at PD Plumbing for fast and friendly toilet repair in Wichita, KS." />
      </Head>

      <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <Image src="/logo.png" alt="PD Plumbing Logo" width={180} height={80} />

        <h1 style={{ fontSize: '2rem', marginTop: '1.5rem' }}>Toilet Trouble? Call PD & Fixy Will Flush It Out!</h1>
        <p style={{ margin: '1rem 0' }}>
          Whether it’s a clog, a leak, or a toilet that just won’t stop running — PD Plumbing has your back.
          We serve the entire Wichita area with fast, affordable toilet repair and replacement.
        </p>

        <Image src="/fixy.png" alt="Fixy Mascot" width={200} height={200} style={{ margin: '1rem auto' }} />

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a href="tel:3168715499" style={{
            background: '#007BFF',
            color: '#fff',
            padding: '1rem 2rem',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}>
            🚽 Call Now: (316) 871-5499
          </a>
        </div>

        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          Wichita’s face of fast, friendly plumbing.
        </p>

        <div style={{ marginTop: '3rem', fontStyle: 'italic', fontSize: '0.9rem', textAlign: 'center' }}>
          ✅ No mess left behind • Same-day service available • Fixy-approved
        </div>
      </main>
    </>
  );
}
