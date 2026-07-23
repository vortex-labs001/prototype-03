import React from 'react';
import ReservationForm from '@/components/ReservationForm';
import { CalendarRange, ShieldAlert, Sparkles, Clock, GlassWater, Flame, Mail } from 'lucide-react';

export default function Reservation() {
  const guidelines = [
    {
      icon: Clock,
      title: 'Table Hold Policy',
      desc: 'We hold reserved tables for a maximum of 15 minutes past your scheduled reservation time. Please call us if you are running late.',
    },
    {
      icon: CalendarRange,
      title: 'Seating Duration',
      desc: 'To ensure a smooth flow of service, dinner reservations are allocated 2 hours. Brunch reservations are allocated 90 minutes.',
    },
    {
      icon: GlassWater,
      title: 'Dress Code',
      desc: 'We request smart casual attire. Please refrain from beachwear, athletic wear, and clothing with offensive graphics.',
    },
    {
      icon: ShieldAlert,
      title: 'Cancellation Notice',
      desc: 'If you need to cancel or change your reservation, please notify us at least 24 hours in advance of your scheduled time.',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 font-sans">
      
      {/* Page Header */}
      <div className="text-center max-w-xl mx-auto space-y-4">
        <p className="text-xs font-bold tracking-[0.25em] text-[#d9531e] uppercase bg-[#d9531e]/10 px-4 py-1.5 rounded-full inline-block border border-[#d9531e]/30 shadow-sm">
          Culinary Experiences
        </p>

        {/* Main Title with text-shadow outline to prevent white bg blending */}
        <h1 
          className="font-serif text-4xl sm:text-6xl font-extrabold text-[#0f0e0d] tracking-wider uppercase"
          style={{ textShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)' }}
        >
          Reservations
        </h1>

        <div className="w-20 h-[3px] bg-gradient-to-r from-[#d9531e] to-[#d4af37] mx-auto rounded-full"></div>

        <p className="font-sans text-xs sm:text-sm text-[#0f0e0d] font-semibold leading-relaxed max-w-md mx-auto">
          Secure your wood-fired experience. We recommend booking 2-3 weeks in advance for weekend dinner slots.
        </p>
      </div>

      {/* Main split grid: Form vs Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Reservation Form (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border-2 border-[#0f0e0d]/15 shadow-xl">
          <ReservationForm />
        </div>

        {/* Guidelines Sidebar (5 cols) */}
        <div className="lg:col-span-5 space-y-8 bg-[#0f0e0d] text-white p-8 sm:p-10 rounded-2xl border-2 border-[#d4af37]/40 shadow-2xl relative overflow-hidden">
          
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-white flex items-center gap-2 tracking-wide">
              <Sparkles className="w-5 h-5 text-[#d4af37]" /> Dining Guidelines
            </h2>
            <div className="w-12 h-0.5 bg-[#d9531e]"></div>
            <p className="font-sans text-xs text-white/85 leading-relaxed font-normal">
              We look forward to welcoming you to Ember & Oak. To guarantee the finest dining experience for all guests, please review our dining policies below.
            </p>
          </div>

          <div className="space-y-6">
            {guidelines.map((guide, idx) => {
              const Icon = guide.icon;
              return (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#d9531e]/20 border border-[#d9531e]/50 flex items-center justify-center shrink-0 shadow-sm">
                    <Icon className="w-5 h-5 text-[#d9531e]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#d4af37] mb-1 tracking-wide">
                      {guide.title}
                    </h3>
                    <p className="font-sans text-xs text-white/90 leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Special Events notice */}
          <div className="pt-6 border-t border-white/20 space-y-3">
            <p className="font-serif text-base font-bold text-[#d4af37]">
              Private Dinners & Large Parties
            </p>
            <p className="font-sans text-xs text-white/85 leading-relaxed">
              Planning a wedding rehearsal, corporate dinner, or winery gathering? We offer buyout spaces and customized wood-fired family-style menus.
            </p>
            <a 
              href="mailto:events@emberandoak.com" 
              className="inline-flex items-center gap-2 text-xs font-bold text-[#d9531e] hover:text-[#d4af37] underline transition-colors pt-1"
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
