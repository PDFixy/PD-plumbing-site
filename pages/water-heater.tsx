import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function WaterHeaterPage() {
  return (
    <>
      <Head>
        <title>Water Heater Repair & Replacement | PD Plumbing</title>
        <meta name="description" content="Fixy the mascot brings fast, friendly water heater service in Wichita. Call now or request a quote!" />
      </Head>

      <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <Image src="/logo.png" alt="PD Plumbing Logo" width={180} height={80} />

        <h1 style={{ fontSize: '2rem', marginTop: '1.5rem' }}>Need Water Heater Repair or Replacement?</h1>
        <p style={{ margin: '1rem 0' }}>
          Call <strong>PD Plumbing</strong> — the face of fast, friendly plumbing in Wichita.
          Whether it's no hot water, leaking, or a full replacement... Fixy has you covered.
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
          Or <Link href="/contact"><a style={{ color: '#007BFF' }}>Request a Quote</a></Link>
        </p>

        <div style={{ marginTop: '3rem', fontStyle: 'italic', fontSize: '0.9rem', textAlign: 'center' }}>
          ✅ Serving Wichita with 5-Star Water Heater Service
        </div>
      </main>
    </>
  );
}
