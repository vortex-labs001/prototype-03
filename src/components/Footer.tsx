'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Flame, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="bg-charcoal text-cream-dark pt-16 pb-8 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand details */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Flame className="w-6 h-6 text-terracotta" />
              <span className="font-serif text-lg font-bold tracking-widest text-cream uppercase">
                Ember <span className="text-terracotta">&</span> Oak
              </span>
            </Link>
            <p className="text-xs leading-relaxed text-cream-dark/65 max-w-sm">
              Crafting unforgettable culinary memories through open flame, wood smoke, and local organic ingredients. Located in the heart of Napa Valley.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-terracotta hover:text-cream transition-colors duration-300"
                aria-label="Instagram page"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-terracotta hover:text-cream transition-colors duration-300"
                aria-label="Facebook page"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-terracotta hover:text-cream transition-colors duration-300"
                aria-label="Twitter profile"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Hours */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-wider text-cream uppercase mb-4 pb-1 border-b border-white/5">
              Hours of Operation
            </h3>
            <ul className="space-y-2 text-xs text-cream-dark/80">
              <li className="flex justify-between">
                <span>Monday - Thursday:</span>
                <span className="text-cream font-medium">5:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday - Saturday:</span>
                <span className="text-cream font-medium">4:30 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday Brunch:</span>
                <span className="text-cream font-medium">10:30 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday Dinner:</span>
                <span className="text-cream font-medium">5:00 PM - 9:30 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm font-semibold tracking-wider text-cream uppercase mb-4 pb-1 border-b border-white/5">
              Get In Touch
            </h3>
            <ul className="space-y-2.5 text-xs text-cream-dark/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <span>123 Hearthside Way,<br />Napa Valley, CA 94558</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-terracotta shrink-0" />
                <a href="tel:7075550199" className="hover:text-terracotta transition-colors duration-200">
                  (707) 555-0199
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-terracotta shrink-0" />
                <a href="mailto:reservations@emberandoak.com" className="hover:text-terracotta transition-colors duration-200">
                  reservations@emberandoak.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-serif text-sm font-semibold tracking-wider text-cream uppercase mb-4 pb-1 border-b border-white/5">
              The Smoke Signals
            </h3>
            <p className="text-xs text-cream-dark/65 mb-4 leading-relaxed">
              Subscribe to receive private chef tastings invitations, menu updates, and special holiday events notifications.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded font-sans text-xs text-cream placeholder-cream-dark/30 focus:outline-none focus:border-terracotta transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-terracotta text-cream text-xs font-semibold tracking-widest uppercase rounded hover:bg-terracotta-dark transition-all duration-300 shadow-sm cursor-pointer"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-[10px] text-sage font-medium animate-fade-in">
                Thank you! You are now subscribed to Smoke Signals.
              </p>
            )}
          </div>
        </div>

        {/* Footer Bottom copyright and links */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-cream-dark/45 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Ember & Oak. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-terracotta transition-colors">Home</Link>
            <Link href="/menu" className="hover:text-terracotta transition-colors">Menu</Link>
            <Link href="/reserve" className="hover:text-terracotta transition-colors">Reservations</Link>
            <a href="#" className="hover:text-terracotta transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
