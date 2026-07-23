'use client';

import React, { useState } from 'react';
import { menuData } from '@/data/menuData';
import MenuCard from '@/components/MenuCard';
import { Flame, Sparkles, PhoneCall, Info } from 'lucide-react';

type FilterType = 'all' | 'veg' | 'non-veg' | 'starters' | 'mains' | 'soups-salads' | 'desserts' | 'drinks';

interface FilterOption {
  key: FilterType;
  label: string;
}

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filterOptions: FilterOption[] = [
    { key: 'all', label: 'All Dishes' },
    { key: 'veg', label: 'Vegetarian' },
    { key: 'non-veg', label: 'Non-Vegetarian' },
    { key: 'starters', label: 'Starters' },
    { key: 'mains', label: 'Main Courses' },
    { key: 'soups-salads', label: 'Soups & Salads' },
    { key: 'desserts', label: 'Desserts' },
    { key: 'drinks', label: 'Artisan Drinks' },
  ];

  // Client-side filtering logic
  const filteredItems = menuData.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'veg') return item.isVeg;
    if (activeFilter === 'non-veg') return !item.isVeg;
    return item.category === activeFilter;
  });

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 font-sans bg-cream">
      
      {/* 1. Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-ember/10 border border-ember/20 text-ember text-xs font-bold uppercase tracking-[0.2em]">
          <Flame className="w-3.5 h-3.5" />
          <span>Artisanal Culinary Fare</span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-obsidian tracking-wide uppercase">
          Our Menu
        </h1>

        <div className="w-20 h-0.5 bg-gradient-to-r from-ember via-gold to-ember mx-auto"></div>

        <p className="font-sans text-xs sm:text-sm text-obsidian/70 leading-relaxed max-w-lg mx-auto">
          Sourced daily from organic estate farms across Napa Valley. Every warm dish is roasted over open red oak coals and embers.
        </p>
      </div>

      {/* 2. Filter Tabs Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto pb-6 border-b border-obsidian/10">
        {filterOptions.map((option) => {
          const isActive = activeFilter === option.key;
          return (
            <button
              key={option.key}
              onClick={() => setActiveFilter(option.key)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer border ${
                isActive
                  ? 'bg-gradient-to-r from-ember to-ember-dark text-cream border-ember shadow-lg ember-glow scale-105'
                  : 'bg-cream-dark/60 text-obsidian/80 border-obsidian/10 hover:border-gold hover:text-ember hover:bg-cream-dark'
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {/* 3. Menu Cards Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="animate-fade-in">
              <MenuCard item={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 space-y-3 bg-cream-dark/30 rounded-2xl border border-obsidian/5 max-w-lg mx-auto">
          <Sparkles className="w-8 h-8 text-gold mx-auto opacity-60" />
          <p className="font-serif italic text-lg text-obsidian/60">
            No culinary offerings found in this category.
          </p>
          <p className="text-xs text-obsidian/40">
            Try selecting another filter option above.
          </p>
        </div>
      )}

      {/* 4. Bottom Information & Dietary Advisory Card */}
      <div className="bg-obsidian text-cream rounded-2xl p-8 sm:p-10 border border-white/10 shadow-2xl max-w-4xl mx-auto relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Subtle Ember Glow Overlay */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-ember/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="space-y-3 relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest">
            <Info className="w-4 h-4 text-gold" />
            <span>Dietary Concerns & Special Requests</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-cream">
            Allergies & Dietary Notice
          </h3>
          <p className="font-sans text-xs text-cream-dark/70 leading-relaxed">
            Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness. Please inform your server or our culinary staff of any severe allergies prior to placing your order.
          </p>
        </div>

        <div className="shrink-0 relative z-10">
          <a
            href="tel:7075550199"
            className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-gold text-gold font-sans text-xs font-bold uppercase tracking-[0.15em] rounded-lg hover:bg-gold hover:text-obsidian transition-all duration-300 gold-glow"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Culinary Team</span>
          </a>
        </div>

      </div>

    </div>
  );
}
