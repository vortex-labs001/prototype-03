import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Luxury Serif for Headings
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

// Modern, Ultra-Crisp Sans for Body & UI
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ember & Oak | Luxury Wood-Fired Steakhouse & Kitchen',
    template: '%s | Ember & Oak',
  },
  description: 'Experience premium oak-grilled dry-aged steaks, fresh coastal seafood, and curated Napa Valley wines at Ember & Oak.',
  keywords: ['Ember & Oak', 'luxury steakhouse Napa Valley', 'wood fired grill', 'Napa Valley fine dining', 'oak grilled steak'],
  metadataBase: new URL('https://emberandoak.com'),
  openGraph: {
    title: 'Ember & Oak | Luxury Wood-Fired Steakhouse',
    description: 'Fine wood-fired dining in Napa Valley. Live-fire culinary artistry and curated wines.',
    url: 'https://emberandoak.com',
    siteName: 'Ember & Oak',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-cream text-obsidian font-sans antialiased selection:bg-ember selection:text-cream">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
