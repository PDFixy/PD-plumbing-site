import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function SumpPumpPage() {
  return (
    <>
      <Head>
        <title>Sump Pump Repair & Emergency Service | PD Plumbing</title>
        <meta name="description" content="Fixy fixes flooded basements fast! Get fast, friendly sump pump repair in Wichita. Call PD Plumbing now." />
      </Head>

      <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <Image src="/logo.png" alt="PD Plumbing Logo" width={180} height={80} />

        <h1 style={{ fontSize: '2rem', marginTop: '1.5rem' }}>Sump Pump Trouble? Fixy’s Got You Covered!</h1>
        <p style={{ margin: '1rem 0' }}>
          Basement flooding? Sump pump acting up or not kicking on? 
          <strong> PD Plumbing</strong> is Wichita’s fast, friendly solution.
          We handle sump pump installs, repairs, and battery backups.
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
          Or <Link href="/contact"><a style={{ color: '#007BFF' }}>Request a Free Estimate</a></Link>
        </p>

        <div style={{ marginTop: '3rem', fontStyle: 'italic', fontSize: '0.9rem', textAlign: 'center' }}>
          ✅ Trusted by Wichita homeowners — 5-star rated local plumbing
        </div>
      </main>
    </>
  );
}
