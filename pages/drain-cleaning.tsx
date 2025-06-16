import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function DrainCleaningPage() {
  return (
    <>
      <Head>
        <title>Drain Cleaning Services in Wichita | PD Plumbing</title>
        <meta name="description" content="Slow drain? Backed-up sink? Call Fixy at PD Plumbing for fast, professional drain cleaning in Wichita." />
      </Head>

      <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <Image src="/logo.png" alt="PD Plumbing Logo" width={180} height={80} />

        <h1 style={{ fontSize: '2rem', marginTop: '1.5rem' }}>Clogged Drain? Fixy’s Got You Covered!</h1>
        <p style={{ margin: '1rem 0' }}>
          Whether it’s your sink, shower, or main line — we clear drains fast. 
          <strong>PD Plumbing</strong> offers expert drain cleaning services in Wichita to keep your water flowing.
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
            📞 Call Now: (316) 871-5499
          </a>
        </div>

        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          Fast. Friendly. Fixy.
        </p>

        <div style={{ marginTop: '3rem', fontStyle: 'italic', fontSize: '0.9rem', textAlign: 'center' }}>
          ✅ Affordable pricing • No mess left behind • Locally trusted
        </div>
      </main>
    </>
  );
}
