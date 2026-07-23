import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Load Google Fonts and expose them as CSS variables
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Configure Google Search Preview and SEO Metadata
export const metadata: Metadata = {
  title: {
    default: 'Ember & Oak | Premium Wood-Fired Steakhouse & Kitchen',
    template: '%s | Ember & Oak',
  },
  description: 'Experience premium oak-grilled steaks, fresh seafood, and artisan local Napa wines at Ember & Oak. Fine wood-fired dining in Napa Valley, CA.',
  applicationName: 'Ember & Oak Restaurant',
  keywords: ['Ember & Oak', 'steakhouse Napa Valley', 'wood fired grill', 'Napa Valley restaurant', 'fine dining California', 'oak grilled steak', 'table reservation Napa'],
  authors: [{ name: 'Ember & Oak Culinary Group' }],
  creator: 'Ember & Oak',
  publisher: 'Ember & Oak',
  metadataBase: new URL('https://emberandoak.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ember & Oak | Premium Wood-Fired Steakhouse',
    description: 'Fine wood-fired dining in Napa Valley. Oak-grilled dry-aged steaks, fresh coastal seafood, and curated wines.',
    url: 'https://emberandoak.com',
    siteName: 'Ember & Oak',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Ember & Oak Signature Ribeye Steak',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ember & Oak | Napa Valley Wood-Fired Restaurant',
    description: 'Oak-grilled steaks and Napa wines. Taste the flame.',
    images: ['https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&h=630&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-cream text-charcoal font-sans antialiased selection:bg-terracotta selection:text-cream">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
