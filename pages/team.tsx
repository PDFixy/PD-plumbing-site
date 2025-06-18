import Layout from '../components/Layout';
import MeetTheTeam from '../components/MeetTheTeam';

export default function TeamPage() {
  return (
    <Layout>
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
            Meet the Entire PD Plumbing Team
          </h1>
          <MeetTheTeam />
        </div>
      </section>
    </Layout>
  );
}
