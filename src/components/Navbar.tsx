'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Flame } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle transparent vs glass header transition on scroll
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-header py-3 shadow-md'
          : 'bg-charcoal/95 md:bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <Flame className="w-8 h-8 text-terracotta group-hover:text-gold transition-colors duration-300" />
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-cream uppercase">
              Ember <span className="text-terracotta">&</span> Oak
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
                  className={`relative font-sans text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:text-terracotta ${
                    isActive ? 'text-terracotta' : 'text-cream'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-terracotta rounded" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/reserve"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded border border-terracotta bg-terracotta text-cream font-sans text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-transparent hover:text-terracotta"
            >
              Reserve a Table
            </Link>
          </div>

          {/* Mobile hamburger toggle button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-cream hover:text-terracotta focus:outline-none transition-colors duration-300"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Slide down) */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-charcoal/95 border-b border-white/5 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-3 py-2.5 rounded font-sans text-sm font-semibold tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? 'bg-terracotta/20 text-terracotta border-l-4 border-terracotta'
                    : 'text-cream hover:bg-white/5 hover:text-terracotta'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2 px-3">
            <Link
              href="/reserve"
              className="block text-center w-full py-3 bg-terracotta text-cream rounded font-sans text-xs font-bold uppercase tracking-widest hover:bg-terracotta-dark transition-all duration-300"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
