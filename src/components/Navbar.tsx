'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Flame } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle glass header transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile nav drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Reservations', href: '/reserve' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0f0e0d]/95 backdrop-blur-md border-b border-white/10 shadow-xl ${
        isScrolled ? 'py-3.5 shadow-2xl bg-[#0f0e0d]/98' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-[#d9531e]/15 border border-[#d9531e]/40 flex items-center justify-center group-hover:border-[#d4af37] transition-colors duration-300">
              <Flame className="w-5 h-5 text-[#d9531e] group-hover:text-[#d4af37] transition-colors duration-300" />
            </div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-white uppercase">
              Ember <span className="text-[#d9531e]">&</span> Oak
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-sans text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 ${
                    isActive
                      ? 'text-[#d9531e]'
                      : 'text-white/90 hover:text-[#d4af37]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1.5 w-full h-[2px] bg-gradient-to-r from-[#d9531e] to-[#d4af37] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/reserve"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border-2 border-[#d9531e] bg-[#d9531e] text-white font-sans text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 hover:bg-transparent hover:text-[#d9531e] hover:shadow-lg"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Mobile hamburger toggle button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-[#d9531e] focus:outline-none transition-colors duration-300"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Slide down) */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-[#0f0e0d] border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out shadow-2xl ${
          isOpen ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="px-4 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 rounded-lg font-sans text-xs font-bold tracking-widest uppercase transition-all duration-200 ${
                  isActive
                    ? 'bg-[#d9531e]/20 text-[#d9531e] border-l-4 border-[#d9531e]'
                    : 'text-white/90 hover:bg-white/10 hover:text-[#d4af37]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2 px-1">
            <Link
              href="/reserve"
              className="block text-center w-full py-3 bg-[#d9531e] text-white rounded-lg font-sans text-xs font-bold uppercase tracking-widest hover:bg-[#b33a0b] transition-all duration-300 shadow-md"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
