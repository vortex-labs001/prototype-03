import React from 'react';
import ReservationForm from '@/components/ReservationForm';
import { CalendarRange, ShieldAlert, Sparkles, Clock, GlassWater } from 'lucide-react';

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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-xl mx-auto space-y-4">
        <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">
          Culinary Experiences
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal tracking-wide uppercase">
          Reservations
        </h1>
        <div className="w-16 h-[2px] bg-terracotta mx-auto"></div>
        <p className="font-sans text-xs text-charcoal/60 leading-relaxed">
          Secure your wood-fired experience. We recommend booking 2-3 weeks in advance for weekend dinner slots.
        </p>
      </div>

      {/* Main split grid: Form vs Rules */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Reservation Form (7 cols) */}
        <div className="lg:col-span-7">
          <ReservationForm />
        </div>

        {/* Guidelines Sidebar (5 cols) */}
        <div className="lg:col-span-5 space-y-8 bg-cream-dark/30 p-8 sm:p-10 rounded border border-charcoal/5">
          <div className="space-y-4">
            <h2 className="font-serif text-xl font-bold text-charcoal flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-terracotta" /> Dining Guidelines
            </h2>
            <p className="font-sans text-xs text-charcoal/65 leading-relaxed">
              We look forward to welcoming you to Ember & Oak. To guarantee the finest dining experience for all guests, please review our dining policies below.
            </p>
          </div>

          <div className="space-y-6">
            {guidelines.map((guide, idx) => {
              const Icon = guide.icon;
              return (
                <div key={idx} className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-terracotta/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-charcoal mb-1">
                      {guide.title}
                    </h3>
                    <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Special Events notice */}
          <div className="pt-6 border-t border-charcoal/5 space-y-3">
            <p className="font-serif text-sm font-bold text-charcoal">
              Private Dinners & Large Parties
            </p>
            <p className="font-sans text-xs text-charcoal/65 leading-relaxed">
              Planning a wedding rehearsal, corporate dinner, or winery gathering? We offer buyout spaces and customized wood-fired family-style menus. Contact our events coordinator at <a href="mailto:events@emberandoak.com" className="text-terracotta underline hover:text-terracotta-dark">events@emberandoak.com</a>.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
