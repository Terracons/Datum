import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHead from '@/components/ui/SectionHead';
import Reveal from '@/components/motion/Reveal';
import ProjectCard from '@/components/projects/ProjectCard';
import { featuredProjects } from '@/content/projects';

export default function FeaturedProjects() {
  return (
    <section className="border-b border-ink-100 py-20 md:py-28">
      <Container>
        <SectionHead
          index="06"
          eyebrow="Projects"
          title="Three buildings, and what we found in them"
          intro="Each of these is written up with the findings included, because a case study without findings is an advertisement."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.07}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Link
            href="/projects"
            className="mt-10 inline-flex items-center gap-2 text-sm text-signal-pass-ink transition-colors hover:text-ink-900"
          >
            All projects
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
