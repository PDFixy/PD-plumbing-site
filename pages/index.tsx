import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
import MeetTheTeam from '../components/MeetTheTeam';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div>
      <Head>
        <title>PD Plumbing | Fast, Friendly Service</title>
        <meta name="description" content="Professional plumbing, heating, and cooling in Wichita. Fast emergency repairs, trusted by Kansas homeowners." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Fixy Mascot + Slogan */}
      <div style={{ textAlign: 'center', marginTop: '3rem', marginBottom: '2rem' }}>
        <img
          src="/assets/images/logos/fixy-mascot-save.jpg"
          alt="Fixy the PD Plumbing Mascot"
          style={{ width: '220px', height: 'auto' }}
        />
        <p style={{ fontSize: '1.4rem', fontWeight: 'bold', marginTop: '1rem', color: '#003366' }}>
          Fixy’s Fast. Fixy’s Friendly.
        </p>
      </div>

      {/* Call To Action */}
      <CallToAction />

      {/* Meet the Team (Home Page Preview) */}
      <MeetTheTeam showOnly={['Britt', 'Hunter', 'Dylan', 'Ari', 'Andy']} />

      {/* Testimonials Section */}
      <Testimonials />

      <Footer />
    </div>
  );
}
