import type { MetadataRoute } from 'next';
import { services } from '@/content/services';
import { projects } from '@/content/projects';
import { SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    '',
    '/services',
    '/independence',
    '/reports',
    '/process',
    '/projects',
    '/for-engineers',
    '/certifications',
    '/about',
    '/prequalification',
    '/careers',
    '/contact',
  ];

  const now = new Date();

  return [
    ...staticPaths.map((p) => ({
      url: `${SITE_URL}${p}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: p === '' ? 1 : p === '/independence' || p === '/reports' ? 0.9 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...projects.map((p) => ({
      url: `${SITE_URL}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
