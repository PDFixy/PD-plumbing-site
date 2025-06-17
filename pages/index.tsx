// pages/index.tsx
import Layout from '../components/Layout';
import CallToAction from '../components/CallToAction';
import FixyPromo from '../components/FixyPromo';
import ServicesList from '../components/ServicesList';

export default function Home() {
  return (
    <Layout>
      <FixyPromo />
      <ServicesList />
      <CallToAction />
    </Layout>
  );
}
