import React from 'react';
import Link from 'next/link';
import { menuData } from '@/data/menuData';
import MenuCard from '@/components/MenuCard';
import { Star, Clock, MapPin, Phone, MessageSquare, Shield, Award } from 'lucide-react';

export default function Home() {
  // Get 3 signature dishes for the preview (Truffle Arancini, Prime Ribeye, Smoked Lava Cake)
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
      quote: 'Absolutely incredible dining experience. The truffle arancini melts in your mouth, and the service was warm and attentive. Make sure you order the Ember Old Fashioned!',
      stars: 5,
    },
    {
      name: 'Elena Rostova',
      role: 'Travel Journalist',
      quote: 'The ambiance is a perfect marriage of terracotta brickwork, warm wood logs, and modern glass architecture. Easily my favorite dinner spot in CA. A masterclass in open-fire culinary arts.',
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
    <div className="space-y-24 pb-12 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative h-[92vh] flex items-center justify-center bg-charcoal-medium overflow-hidden">
        {/* Background Image overlay */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1600&q=80"
            alt="Ember & Oak Fine Dining Table"
            className="w-full h-full object-cover object-center brightness-[0.35]"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-cream space-y-6">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-terracotta uppercase">
            Taste the Fire • Savor the Heritage
          </p>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-wide leading-tight">
            EMBER <span className="text-terracotta">&</span> OAK
          </h1>
          <p className="font-serif italic text-base sm:text-xl md:text-2xl text-cream-dark/80 max-w-2xl mx-auto">
            Live-fire culinary artistry, oak-grilled prime cuts, and locally grown Napa Valley ingredients.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
              href="/reserve"
              className="w-full sm:w-auto px-8 py-3.5 bg-terracotta text-cream font-semibold text-xs uppercase tracking-widest rounded border border-terracotta hover:bg-transparent hover:text-terracotta transition-all duration-300 shadow-lg cursor-pointer"
            >
              Reserve a Table
            </Link>
            <Link
              href="/menu"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-cream font-semibold text-xs uppercase tracking-widest rounded border border-white/40 hover:bg-white hover:text-charcoal transition-all duration-300 cursor-pointer"
            >
              View Our Menu
            </Link>
          </div>
        </div>

        {/* Bottom scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream-dark/50 text-[10px] uppercase tracking-widest animate-bounce">
          <span>Scroll down</span>
          <div className="w-1 h-3.5 bg-terracotta rounded"></div>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Story Images */}
          <div className="grid grid-cols-2 gap-4 relative">
            <div className="absolute inset-0 bg-sage/5 -m-4 rounded -z-10"></div>
            <div className="space-y-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80"
                alt="Wood fire open grill"
                className="w-full h-64 object-cover rounded shadow-md"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=500&q=80"
                alt="Our Head Chef preparing cuts"
                className="w-full h-48 object-cover rounded shadow-md"
              />
            </div>
            <div className="space-y-4 pt-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80"
                alt="Steaks searing on embers"
                className="w-full h-48 object-cover rounded shadow-md"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=500&q=80"
                alt="Wine cellars at Ember & Oak"
                className="w-full h-64 object-cover rounded shadow-md"
              />
            </div>
          </div>

          {/* Right Column: Narrative content */}
          <div className="space-y-6">
            <p className="text-xs font-semibold tracking-widest text-terracotta uppercase">
              Our Culinary Philosophy
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              Honoring Live-Fire & Napa Heritage
            </h2>
            <div className="w-12 h-[2px] bg-terracotta"></div>
            
            <p className="text-sm leading-relaxed text-charcoal/75">
              At **Ember & Oak**, we return to the elemental roots of cooking: a blazing open flame and aged oak logs. Under the direction of Executive Chef Marcus Vance, every steak, seafood plate, and roasted vegetable is touched by smoke, building rich layers of caramelization and flavor.
            </p>
            <p className="text-sm leading-relaxed text-charcoal/75">
              We partner directly with Napa Valley organic estates, bringing fresh, pesticide-free harvest to your plate. Paired with a deep selection of regional cabernets and hand-crafted barrel-aged cocktails, dining here is a sensory tribute to California wine country.
            </p>

            {/* Chef badge block */}
            <div className="pt-4 border-t border-charcoal/5 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden shrink-0 border border-terracotta/25">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=150&q=80"
                  alt="Executive Chef Marcus Vance portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-sm font-bold text-charcoal">Marcus Vance</p>
                <p className="text-[10px] tracking-widest text-sage font-bold uppercase">Executive Chef & Partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Dishes Preview */}
      <section className="bg-cream-dark/20 py-20 border-y border-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <p className="text-xs font-semibold tracking-widest text-terracotta uppercase">
              Curated Masterpieces
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
              From the Charcoal Embers
            </h2>
            <div className="w-12 h-[2px] bg-terracotta mx-auto"></div>
            <p className="text-xs text-charcoal/60 leading-relaxed">
              Explore a handful of our signature creations, selected by the kitchen staff to represent the depth of our wood-fired menu.
            </p>
          </div>

          {/* Featured Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredDishes.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>

          {/* Go to full Menu CTA */}
          <div className="text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-charcoal text-cream font-sans text-xs font-bold uppercase tracking-widest rounded hover:bg-terracotta transition-colors duration-300"
            >
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-semibold tracking-widest text-terracotta uppercase">
            Guest Experiences
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal">
            The Talk of Napa Valley
          </h2>
          <div className="w-12 h-[2px] bg-terracotta mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-cream p-8 rounded border border-charcoal/5 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                {/* 5 Stars display */}
                <div className="flex gap-1 text-gold">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="font-serif italic text-xs leading-relaxed text-charcoal/80">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Guest Details */}
              <div className="pt-4 border-t border-charcoal/5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-terracotta/10 flex items-center justify-center font-serif text-xs font-bold text-terracotta">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-serif text-xs font-bold text-charcoal">{t.name}</p>
                  <p className="text-[9px] tracking-wider text-charcoal/50 uppercase font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Image Gallery Section */}
      <section className="bg-charcoal text-cream py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <p className="text-xs font-semibold tracking-widest text-terracotta uppercase">
              Visual Journey
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream">
              Capturing the Ambiance
            </h2>
            <div className="w-12 h-[2px] bg-terracotta mx-auto"></div>
            <p className="text-xs text-cream-dark/65 max-w-md mx-auto leading-relaxed">
              Step inside our dining room and kitchen, where local ingredients are roasted over red oak coals.
            </p>
          </div>

          {/* Grid of photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative h-72 rounded overflow-hidden group bg-charcoal-medium border border-white/5 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                {/* Simple hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end p-5">
                  <p className="font-sans text-[10px] font-bold tracking-widest text-cream uppercase">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Location, Map & Hours */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Map details block */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-cream-dark/30 p-8 sm:p-10 rounded border border-charcoal/5">
            <div className="space-y-6">
              <p className="text-xs font-semibold tracking-widest text-terracotta uppercase">
                Find Your Way
              </p>
              <h2 className="font-serif text-3xl font-bold text-charcoal">
                Location & Hours
              </h2>
              <div className="w-12 h-[2px] bg-terracotta"></div>
              
              <ul className="space-y-4 text-xs text-charcoal/80">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-charcoal text-sm mb-1">Our Address</p>
                    <p className="leading-relaxed">123 Hearthside Way, Napa Valley, CA 94558</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Clock className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-charcoal text-sm mb-1">Serving Times</p>
                    <p className="mb-1">Mon - Thu: 5:00 PM - 10:00 PM</p>
                    <p className="mb-1">Fri - Sat: 4:30 PM - 11:00 PM</p>
                    <p>Sun: 10:30 AM - 3:00 PM (Brunch), 5:00 PM - 9:30 PM</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-terracotta shrink-0" />
                  <div>
                    <p className="font-bold text-charcoal text-sm mb-1">Call Booking</p>
                    <a href="tel:7075550199" className="hover:text-terracotta transition-colors duration-200">
                      (707) 555-0199
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick directions helper */}
            <div className="pt-6 border-t border-charcoal/5 text-xs text-charcoal/60 leading-relaxed">
              <p>
                <strong>Complimentary Valet:</strong> Available Friday, Saturday, and Sunday evening. Street parking is available along Hearthside Way.
              </p>
            </div>
          </div>

          {/* Interactive Google Map iframe container */}
          <div className="lg:col-span-7 h-[450px] lg:h-auto min-h-[350px] relative rounded overflow-hidden border border-charcoal/5 shadow-md">
            {/* Real aesthetic Google Map pointer to a restaurant hub in Napa Valley */}
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
