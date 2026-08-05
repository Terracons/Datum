import Hero from '@/components/sections/Hero';
import FindingsCounter from '@/components/sections/FindingsCounter';
import Positioning from '@/components/sections/Positioning';
import ServicesGrid from '@/components/sections/ServicesGrid';
import IndependencePledge from '@/components/sections/IndependencePledge';
import ReportPreview from '@/components/sections/ReportPreview';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import CertificationsBand from '@/components/sections/CertificationsBand';
import TestimonialSlab from '@/components/sections/TestimonialSlab';
import CtaBand from '@/components/sections/CtaBand';
import { buildMetadata } from '@/lib/seo';
import { getProject } from '@/content/projects';

export const metadata = buildMetadata(
  'Independent Test, Balance & Commissioning | Denver | DATUM',
  'Independent TAB and building commissioning across the Mountain West. NEBB certified, AABC member firm. We do not install, sell, or service mechanical equipment. That is the point.',
  '/',
);

export default function HomePage() {
  const testimonial = getProject('arapahoe-justice-center')?.testimonial;

  return (
    <>
      <Hero />
      <FindingsCounter />
      <Positioning />
      <ServicesGrid />
      <IndependencePledge />
      <ReportPreview />
      <ProcessTimeline />
      <FeaturedProjects />
      <CertificationsBand />
      {testimonial && <TestimonialSlab testimonial={testimonial} />}
      <CtaBand />
    </>
  );
}
