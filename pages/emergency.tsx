import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function EmergencyPage() {
  return (
    <>
      <Head>
        <title>24/7 Emergency Plumbing in Wichita | PD Plumbing</title>
        <meta name="description" content="Flooded basement? Burst pipe? Fixy’s on call. Call PD Plumbing 24/7 for fast, friendly emergency plumbing." />
      </Head>

      <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <Image src="/logo.png" alt="PD Plumbing Logo" width={180} height={80} />

        <h1 style={{ fontSize: '2rem', marginTop: '1.5rem' }}>Emergency Plumbing? Fixy’s On the Way!</h1>
        <p style={{ margin: '1rem 0' }}>
          Flooded basement? Burst pipe? No hot water? <strong>PD Plumbing</strong> has you covered 24/7 in Wichita. 
          Fast response, friendly techs, and peace of mind — day or night.
        </p>

        <Image src="/fixy.png" alt="Fixy Mascot" width={200} height={200} style={{ margin: '1rem auto' }} />

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <a href="tel:3168715499" style={{
            background: '#DC3545',
            color: '#fff',
            padding: '1rem 2rem',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            fontSize: '1.2rem'
          }}>
            🚨 Call 24/7: (316) 871-5499
          </a>
        </div>

        <p style={{ marginTop: '1rem', textAlign: 'center' }}>
          Emergencies don’t wait — and neither do we. Call Fixy!
        </p>

        <div style={{ marginTop: '3rem', fontStyle: 'italic', fontSize: '0.9rem', textAlign: 'center' }}>
          ✅ Local. Licensed. 5-Star Rated Emergency Plumbing
        </div>
      </main>
    </>
  );
}
