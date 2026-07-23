import React from 'react';
import Link from 'next/link';
import { menuData } from '@/data/menuData';
import MenuCard from '@/components/MenuCard';
import { Star, Clock, MapPin, Phone, Flame, Wine, Sparkles, Award, ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredDishes = menuData.filter((item) => ['s1', 'm1', 'd1'].includes(item.id));

  const testimonials = [
    {
      name: 'Sarah Jennings',
      role: 'Napa Valley Food Critic',
      quote: 'The Oak-Grilled Prime Ribeye was cooked to smoky perfection. Ember & Oak blends rustic live-fire techniques with upscale California wine country cuisine in a breathtaking way.',
      stars: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Local Patron',
      quote: 'An extraordinary dining experience. The truffle arancini melts in your mouth, and the service was warm and attentive. Order the Ember Old Fashioned!',
      stars: 5,
    },
    {
      name: 'Elena Rostova',
      role: 'Travel Journalist',
      quote: 'The ambiance is a perfect marriage of terracotta brickwork, warm wood logs, and modern glass architecture. Easily my favorite dinner spot in CA.',
      stars: 5,
    },
  ];

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
      alt: 'Prime Ribeye Steaks over Wood-Fired Grill',
    },
    {
      url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80',
      alt: 'Elegant Ambiance Fine Dining Room',
    },
    {
      url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80',
      alt: 'Artisan Food Plating Presentation',
    },
    {
      url: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80',
      alt: 'Craft Cocktails Smoked Old Fashioned Bar',
    },
    {
      url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
      alt: 'Premium Wine Cellar Selection',
    },
    {
      url: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80',
      alt: 'Smoked Chocolate Molten Lava Dessert',
    },
  ];

  return (
    <div className="space-y-24 pb-16 font-sans bg-cream">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[94vh] flex items-center justify-center bg-obsidian overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1600&q=80"
            alt="Ember & Oak Fine Dining Table"
            className="w-full h-full object-cover object-center brightness-[0.32] scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-cream space-y-8 py-20">
          
          {/* Flame Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border border-gold/30 text-gold text-xs font-semibold uppercase tracking-[0.2em]">
            <Flame className="w-3.5 h-3.5 text-ember animate-flame" />
            <span>Napa Valley Fine Dining</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-semibold tracking-wide leading-none">
            EMBER <span className="text-ember-gradient font-normal">&</span> OAK
          </h1>

          <p className="font-serif italic text-lg sm:text-2xl text-cream-dark/85 max-w-2xl mx-auto font-light leading-relaxed">
            Live-fire culinary artistry, oak-grilled prime cuts, and locally grown Napa Valley ingredients.
          </p>

          {/* Call To Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <Link
              href="/reserve"
              className="w-full sm:w-auto px-9 py-4 bg-ember text-cream font-bold text-xs uppercase tracking-[0.2em] rounded hover:bg-ember-dark transition-all duration-300 shadow-lg ember-glow flex items-center justify-center gap-2"
            >
              <span>Reserve a Table</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/menu"
              className="w-full sm:w-auto px-9 py-4 glass-dark text-cream font-bold text-xs uppercase tracking-[0.2em] rounded border border-white/20 hover:border-gold hover:text-gold transition-all duration-300"
            >
              Explore Menu
            </Link>
          </div>

          {/* Quick Highlights Row */}
          <div className="pt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto border-t border-white/10 text-center">
            <div>
              <p className="font-serif text-2xl font-bold text-gold">100%</p>
              <p className="text-[10px] uppercase tracking-widest text-cream-dark/60">Red Oak Fired</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-gold">300+</p>
              <p className="text-[10px] uppercase tracking-widest text-cream-dark/60">Curated Wines</p>
            </div>
            <div>
              <p className="font-serif text-2xl font-bold text-gold">A5</p>
              <p className="text-[10px] uppercase tracking-widest text-cream-dark/60">Japanese Wagyu</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gold/60 text-[10px] uppercase tracking-widest">
          <span>Scroll</span>
          <div className="w-1 h-4 bg-ember rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Overlapping Masonry Gallery */}
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="space-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80"
                alt="Wood fire open grill"
                className="w-full h-72 object-cover rounded-lg shadow-xl border border-obsidian/5"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=500&q=80"
                alt="Chef preparing cuts"
                className="w-full h-48 object-cover rounded-lg shadow-xl border border-obsidian/5"
              />
            </div>
            <div className="space-y-4 pt-10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80"
                alt="Steaks searing"
                className="w-full h-48 object-cover rounded-lg shadow-xl border border-obsidian/5"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=500&q=80"
                alt="Wine cellars"
                className="w-full h-72 object-cover rounded-lg shadow-xl border border-obsidian/5"
              />
            </div>

            {/* Floating Gold Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-obsidian text-cream p-5 rounded-full border-2 border-gold/40 shadow-2xl text-center hidden sm:block">
              <Award className="w-6 h-6 text-gold mx-auto mb-1" />
              <p className="font-serif text-xs font-bold text-gold">Michelin</p>
              <p className="text-[9px] uppercase tracking-wider text-cream-dark/70">Recommended</p>
            </div>
          </div>

          {/* Text Narrative */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-ember uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Culinary Heritage</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-obsidian leading-tight">
              Honoring Live-Fire & Napa Heritage
            </h2>

            <div className="w-16 h-0.5 bg-gradient-to-r from-ember to-gold"></div>

            <p className="text-sm leading-relaxed text-obsidian/80">
              At <strong className="text-obsidian font-semibold">Ember & Oak</strong>, we return to the elemental roots of cooking: a blazing open flame and aged California red oak logs. Under the guidance of Executive Chef Marcus Vance, every steak, seafood dish, and seasonal harvest is touched by fire.
            </p>

            <p className="text-sm leading-relaxed text-obsidian/80">
              Partnering directly with local organic Napa Valley estates, we ensure that every ingredient is sourced at peak seasonal ripeness. Paired with our extensive cellar of estate cabernets and handcrafted barrel-aged cocktails, dining here is an unforgettable feast.
            </p>

            {/* Chef Profile Card */}
            <div className="pt-6 border-t border-obsidian/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-gold">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=150&q=80"
                    alt="Executive Chef Marcus Vance"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif text-base font-bold text-obsidian">Marcus Vance</p>
                  <p className="text-[11px] tracking-widest text-ember font-bold uppercase">Executive Chef & Founder</p>
                </div>
              </div>

              <div className="hidden sm:block text-right">
                <p className="font-serif italic text-sm text-obsidian/70">&ldquo;Flame is the ultimate seasoning.&rdquo;</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED DISHES PREVIEW */}
      <section className="bg-charcoal-card text-cream py-24 border-y border-white/10 relative overflow-hidden">
        {/* Subtle Ember Glow Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-ember/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase">
              Curated Masterpieces
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream">
              From the Charcoal Embers
            </h2>
            <div className="w-12 h-0.5 bg-ember mx-auto"></div>
            <p className="text-xs text-cream-dark/70 leading-relaxed">
              A selection of our signature creations, hand-picked by Executive Chef Marcus Vance.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredDishes.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          {/* Full Menu CTA */}
          <div className="text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 px-9 py-4 bg-gold text-obsidian font-bold text-xs uppercase tracking-[0.2em] rounded hover:bg-gold-light transition-all duration-300 gold-glow"
            >
              <span>Explore Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] text-ember uppercase">
            Guest Experiences
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-obsidian">
            The Talk of Napa Valley
          </h2>
          <div className="w-12 h-0.5 bg-ember mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-cream-dark/40 p-8 rounded-xl border border-obsidian/10 flex flex-col justify-between space-y-6 hover:border-gold/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex gap-1 text-gold">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-serif italic text-sm leading-relaxed text-obsidian/85">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-obsidian/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ember/10 flex items-center justify-center font-serif text-xs font-bold text-ember border border-ember/20">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-serif text-sm font-bold text-obsidian">{t.name}</p>
                  <p className="text-[10px] tracking-wider text-obsidian/50 uppercase font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. IMAGE GALLERY SECTION */}
      <section className="bg-obsidian text-cream py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase">
              Visual Journey
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-cream">
              Capturing the Ambiance
            </h2>
            <div className="w-12 h-0.5 bg-ember mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative h-72 rounded-lg overflow-hidden group border border-white/10 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-6">
                  <p className="font-sans text-xs font-bold tracking-widest text-gold uppercase">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LOCATION, MAP & HOURS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-cream-dark/50 p-8 sm:p-10 rounded-xl border border-obsidian/10">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-[0.25em] text-ember uppercase">
                Find Your Way
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-obsidian">
                Location & Hours
              </h2>
              <div className="w-12 h-0.5 bg-ember"></div>
              
              <ul className="space-y-6 text-xs text-obsidian/80">
                <li className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-ember/10 flex items-center justify-center shrink-0 border border-ember/20 text-ember">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-obsidian text-sm mb-0.5">Address</p>
                    <p className="leading-relaxed">123 Hearthside Way, Napa Valley, CA 94558</p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-ember/10 flex items-center justify-center shrink-0 border border-ember/20 text-ember">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-obsidian text-sm mb-0.5">Serving Hours</p>
                    <p className="mb-1">Mon - Thu: 5:00 PM - 10:00 PM</p>
                    <p className="mb-1">Fri - Sat: 4:30 PM - 11:00 PM</p>
                    <p>Sun: 10:30 AM - 3:00 PM (Brunch), 5:00 PM - 9:30 PM</p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <div className="w-9 h-9 rounded-full bg-ember/10 flex items-center justify-center shrink-0 border border-ember/20 text-ember">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-obsidian text-sm mb-0.5">Reservations Line</p>
                    <a href="tel:7075550199" className="hover:text-ember transition-colors font-semibold">
                      (707) 555-0199
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-obsidian/10 text-xs text-obsidian/60 leading-relaxed">
              <p>
                <strong className="text-obsidian font-semibold">Valet Parking:</strong> Available Friday through Sunday evenings at the main entrance.
              </p>
            </div>
          </div>

          {/* Interactive Google Map iframe */}
          <div className="lg:col-span-7 h-[450px] lg:h-auto min-h-[380px] rounded-xl overflow-hidden border border-obsidian/10 shadow-lg relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12467.433282245357!2d-122.28825866160538!3d38.300583482596956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80850669145610ef%3A0xe54efb5ef6017ecb!2sNapa%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ember & Oak Google Maps Location"
            ></iframe>
          </div>

        </div>
      </section>

    </div>
  );
}
