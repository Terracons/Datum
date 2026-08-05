import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import MotionProvider from '@/components/motion/MotionProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { JsonLd, organizationJsonLd, SITE_URL } from '@/lib/seo';

/**
 * Two families, both with an engineering pedigree. IBM Plex was drawn for
 * technical documentation, which is what this site is; JetBrains Mono carries
 * every measured value. Inter was removed deliberately: it is the most
 * over-used interface face on the web and reads as a default rather than a
 * decision.
 */
const display = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-display',
  display: 'swap',
});

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Independent Test, Balance & Commissioning | Denver | DATUM',
    template: '%s',
  },
  description:
    'Independent TAB and building commissioning across the Mountain West. NEBB certified, AABC member. We do not install, sell, or service equipment. That is the point.',
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#FAFAFA',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={organizationJsonLd()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
