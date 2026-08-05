import { Suspense } from 'react';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import ProjectExplorer from '@/components/projects/ProjectExplorer';
import CtaBand from '@/components/sections/CtaBand';
import { projects } from '@/content/projects';
import { company } from '@/content/company';
import { buildMetadata, breadcrumbJsonLd, JsonLd } from '@/lib/seo';
import { formatSqFt } from '@/lib/utils';

export const metadata = buildMetadata(
  'Projects | Healthcare, Laboratory, Civic & Data Center | DATUM',
  'Selected TAB and commissioning projects with the findings included: what was measured, what failed, and what it took to close it.',
  '/projects',
);

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
        ])}
      />

      <PageHeader
        eyebrow="Projects"
        title="Written up with the findings in them"
        lead="A case study with no findings is an advertisement. Each project below states what was measured, what did not meet design, and what it took to close it, including the ones where the answer embarrassed somebody."
        meta={[
          { label: 'Buildings to date', value: String(company.stats.buildings) },
          { label: 'Square feet balanced', value: `${formatSqFt(company.stats.sqFt)} sq ft` },
          { label: 'Deficiencies documented', value: company.stats.deficiencies.toLocaleString('en-US') },
          { label: 'Shown here', value: `${projects.length} of ${company.stats.buildings}` },
        ]}
      />

      <section className="py-16 md:py-20">
        <Container>
          {/* useSearchParams needs a Suspense boundary to stay statically rendered */}
          <Suspense fallback={<div className="h-96" aria-hidden />}>
            <ProjectExplorer projects={projects} />
          </Suspense>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
