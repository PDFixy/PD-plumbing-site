import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import MeetTheTeam from "../components/MeetTheTeam";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>PD Plumbing | Fast, Friendly Service</title>
        <meta name="description" content="The Face of Fast, Friendly Plumbing. Call now or scan Fixy to save 10% today!" />
      </Head>

      <Header />

      <main>
        <section className="hero">
          <img src="/assets/images/same-day-header-banner.jpg" alt="Same-Day Service Guaranteed" style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} />
          <div className="hero-text">
            <h1>Fixy's Fast. Fixy's Friendly.</h1>
            <p>Spot Fixy. Snap a Pic. Save 10%.</p>
            <CallToAction />
          </div>
        </section>

        <MeetTheTeam showOnly={["Britt", "Hunter", "Dylan", "Ari", "Andy"]} />

        <section className="testimonials-section">
          <h2>What Our Customers Say</h2>
          <Testimonials />
        </section>
      </main>

      <Footer />
    </>
  );
}
