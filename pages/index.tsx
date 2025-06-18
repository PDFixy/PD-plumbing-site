import Layout from '../components/Layout';
import CallToAction from '../components/CallToAction';
import MeetTheTeamPreview from '../components/MeetTheTeamPreview';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">The Face of Fast, Friendly Plumbing</h1>
        <p className="text-lg md:text-xl mb-6">
          Fixy’s Fast. Fixy’s Friendly. Fixy’s Here for You.
        </p>
        <a
          href="tel:+13167771234"
          className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded shadow hover:bg-gray-100 transition"
        >
          Call Now (316) 777-1234
        </a>
      </section>

      {/* Same Day Banner */}
      <section className="bg-white text-center py-8">
        <img
          src="/assets/images/banners/same-day-header-banner.jpg"
          alt="Same Day Service Banner"
          className="mx-auto rounded shadow-md"
        />
      </section>

      {/* Call To Action Section */}
      <CallToAction />

      {/* Meet the Team Preview Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Meet the Team</h2>
          <MeetTheTeamPreview />
          <div className="mt-6">
            <a
              href="/team"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
            >
              View Full Team
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
