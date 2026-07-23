import React from 'react';
import ReservationForm from '@/components/ReservationForm';
import { CalendarRange, ShieldAlert, Sparkles, Clock, GlassWater, Flame, Mail } from 'lucide-react';

export default function Reservation() {
  const guidelines = [
    {
      icon: Clock,
      title: 'Table Hold Policy',
      desc: 'We hold reserved tables for up to 15 minutes past your scheduled time. Please call us directly if you are running late.',
    },
    {
      icon: CalendarRange,
      title: 'Seating Duration',
      desc: 'To ensure a seamless flow of service, dinner reservations are allocated 2 hours. Brunch seatings are allocated 90 minutes.',
    },
    {
      icon: GlassWater,
      title: 'Dress Code & Ambience',
      desc: 'Smart casual attire requested. We kindly ask guests to refrain from athletic wear, swimwear, or beachwear.',
    },
    {
      icon: ShieldAlert,
      title: 'Cancellation Notice',
      desc: 'Should your plans change, please notify us at least 24 hours in advance to avoid a late cancellation fee.',
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 font-sans">
      
      {/* 1. Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-ember/10 border border-ember/20 text-ember text-xs font-bold uppercase tracking-[0.2em]">
          <Flame className="w-3.5 h-3.5" />
          <span>Table Booking</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-obsidian tracking-wide uppercase">
          Reservations
        </h1>

        <div className="w-16 h-0.5 bg-gradient-to-r from-ember to-gold mx-auto"></div>

        <p className="font-sans text-xs sm:text-sm text-obsidian/70 leading-relaxed max-w-lg mx-auto">
          Secure your wood-fired culinary journey in Napa Valley. We recommend booking 2–3 weeks in advance for weekend dinner slots.
        </p>
      </div>

      {/* 2. Main Split Grid (Form vs Guidelines) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Reservation Form Container (7 cols) */}
        <div className="lg:col-span-7 bg-cream-dark/40 border border-obsidian/10 p-6 sm:p-10 rounded-2xl shadow-xl">
          <ReservationForm />
        </div>

        {/* Dining Guidelines Sidebar (5 cols) */}
        <div className="lg:col-span-5 space-y-8 bg-obsidian text-cream p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* Ambient Ember Glow Background Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-ember/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Guidelines Header */}
          <div className="space-y-3 relative z-10">
            <div className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>Dining Etiquette</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-cream">
              Guest Guidelines
            </h2>
            <div className="w-10 h-0.5 bg-ember"></div>
            <p className="font-sans text-xs text-cream-dark/70 leading-relaxed">
              We look forward to welcoming you to Ember & Oak. Please review our policies below to guarantee an extraordinary experience for all guests.
            </p>
          </div>

          {/* List of Guidelines */}
          <div className="space-y-6 relative z-10">
            {guidelines.map((guide, idx) => {
              const Icon = guide.icon;
              return (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-ember/15 border border-ember/30 flex items-center justify-center shrink-0 text-ember shadow-md">
                    <Icon className="w-5 h-5 text-ember" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-base font-bold text-cream tracking-wide">
                      {guide.title}
                    </h3>
                    <p className="font-sans text-xs text-cream-dark/70 leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Private Dinners & Buyouts Notice */}
          <div className="pt-8 border-t border-white/10 space-y-3 relative z-10">
            <h3 className="font-serif text-lg font-bold text-gold">
              Private Dinners & Full Buyouts
            </h3>
            <p className="font-sans text-xs text-cream-dark/75 leading-relaxed">
              Planning a wedding rehearsal, corporate dinner, or estate gathering? We offer private cellar spaces and curated family-style wood-fired menus.
            </p>
            <a 
              href="mailto:events@emberandoak.com" 
              className="inline-flex items-center gap-2 text-xs font-bold text-ember hover:text-gold transition-colors tracking-wide pt-1"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact events@emberandoak.com</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  );
}
