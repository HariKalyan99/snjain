import PageWrapper from '../components/layout/PageWrapper';
import Hero from '../components/home/Hero';
import Marquee from '../components/ui/Marquee';
import TrustSection from '../components/home/TrustSection';
import ServicesPreview from '../components/home/ServicesPreview';
import MaterialsPreview from '../components/home/MaterialsPreview';
import ProcessTimeline from '../components/home/ProcessTimeline';
import AboutPreview from '../components/home/AboutPreview';
import GlobalPreview from '../components/home/GlobalPreview';
import CtaBand from '../components/sections/CtaBand';

const marqueeItems = [
  'Aluminium',
  'Copper',
  'Brass',
  'Zinc',
  'Tin',
  'Lead',
  'Recycling',
  'Export',
  'Sourcing',
];

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <div className="border-y border-steel-100 bg-white py-6">
        <Marquee items={marqueeItems} />
      </div>
      <TrustSection />
      <ServicesPreview />
      <MaterialsPreview />
      <ProcessTimeline />
      <AboutPreview />
      <GlobalPreview />
      <CtaBand />
    </PageWrapper>
  );
}
