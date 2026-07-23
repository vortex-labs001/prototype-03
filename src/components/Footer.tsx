import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f0e0d] text-white border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Hours */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
            Hours of Operation
          </h4>
          <p className="font-sans text-xs text-white/80 leading-relaxed">
            Monday – Thursday: 5:00 PM – 10:00 PM<br />
            Friday – Saturday: 4:30 PM – 11:00 PM<br />
            Sunday Brunch: 10:30 AM – 3:00 PM<br />
            Sunday Dinner: 5:00 PM – 9:30 PM
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
            Get In Touch
          </h4>
          <p className="font-sans text-xs text-white/80 leading-relaxed">
            123 Hearthside Way, Napa Valley, CA 94558<br />
            Phone: (707) 555-0199<br />
            Email: reservations@emberandoak.com
          </p>
        </div>

        {/* Newsletter */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold uppercase tracking-[0.2em] text-[#d4af37]">
            The Smoke Signals
          </h4>
          <p className="font-sans text-xs text-white/80 leading-relaxed">
            Subscribe for private tasting invitations and seasonal menu updates.
          </p>
          <div className="flex gap-2 max-w-sm mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Your Email Address"
              className="px-4 py-2 bg-white/10 border border-white/20 text-white placeholder-white/50 text-xs rounded focus:outline-none focus:border-[#d4af37] w-full"
            />
            <button className="px-4 py-2 bg-[#d9531e] text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-[#d4af37] transition-colors">
              Join
            </button>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-10 mt-10 border-t border-white/10 text-center text-[11px] text-white/50 uppercase tracking-widest font-semibold">
        © 2026 Ember & Oak. All rights reserved.
      </div>
    </footer>
  );
}
