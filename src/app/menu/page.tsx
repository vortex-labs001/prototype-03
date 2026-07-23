'use client';

import React, { useState } from 'react';
import { menuData } from '@/data/menuData';
import MenuCard from '@/components/MenuCard';
import { Flame, Sparkles, PhoneCall } from 'lucide-react';

type FilterType = 'all' | 'veg' | 'non-veg' | 'starters' | 'mains' | 'soups-salads' | 'desserts' | 'drinks';

interface FilterOption {
  key: FilterType;
  label: string;
}

export default function Menu() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filterOptions: FilterOption[] = [
    { key: 'all', label: 'All' },
    { key: 'veg', label: 'Veg' },
    { key: 'non-veg', label: 'Non-Veg' },
    { key: 'starters', label: 'Starters' },
    { key: 'mains', label: 'Main Course' },
    { key: 'soups-salads', label: 'Soups & Salads' },
    { key: 'desserts', label: 'Desserts' },
    { key: 'drinks', label: 'Drinks' },
  ];

  // Client-side filtering logic
  const filteredItems = menuData.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'veg') return item.isVeg;
    if (activeFilter === 'non-veg') return !item.isVeg;
    return item.category === activeFilter;
  });

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 font-sans">
      
      {/* Page Header */}
      <div className="text-center max-w-xl mx-auto space-y-4">
        <p className="text-xs font-bold tracking-[0.25em] text-[#d9531e] uppercase bg-[#d9531e]/10 px-4 py-1.5 rounded-full inline-block border border-[#d9531e]/30 shadow-sm">
          Artisanal Culinary Fare
        </p>

        {/* Main Title with outline effect so it pops on white background */}
        <h1 
          className="font-serif text-4xl sm:text-6xl font-extrabold text-[#0f0e0d] tracking-wider uppercase"
          style={{ textShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)' }}
        >
          Our Menu
        </h1>

        <div className="w-20 h-[3px] bg-gradient-to-r from-[#d9531e] to-[#d4af37] mx-auto rounded-full"></div>

        <p className="font-sans text-xs sm:text-sm text-[#0f0e0d] font-semibold leading-relaxed max-w-md mx-auto">
          Sourced from local organic farms in northern California. Every single hot dish is touched by red oak fire and charcoal embers.
        </p>
      </div>

      {/* Filter Tabs Container with sharp contrast buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto pb-6 border-b-2 border-[#0f0e0d]/10">
        {filterOptions.map((option) => {
          const isActive = activeFilter === option.key;
          return (
            <button
              key={option.key}
              onClick={() => setActiveFilter(option.key)}
              className={`px-5 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border-2 ${
                isActive
                  ? 'bg-[#d9531e] text-white border-[#d9531e] shadow-lg scale-105'
                  : 'bg-white text-[#0f0e0d] border-[#0f0e0d]/20 hover:border-[#d9531e] hover:text-[#d9531e] hover:bg-neutral-50 shadow-sm'
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      {/* Menu Cards Grid */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="animate-fade-in">
              <MenuCard item={item} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border-2 border-dashed border-[#0f0e0d]/20 max-w-md mx-auto space-y-2">
          <Sparkles className="w-6 h-6 text-[#d4af37] mx-auto" />
          <p className="font-serif italic text-base text-[#0f0e0d] font-semibold">
            No dishes found in this category.
          </p>
          <p className="text-xs text-[#0f0e0d]/60 font-medium">Please select another menu filter above.</p>
        </div>
      )}

      {/* Bottom informational block */}
      <div className="bg-[#0f0e0d] text-white rounded-2xl p-8 sm:p-10 border-2 border-[#d4af37]/40 shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-2">
          <h3 className="font-serif text-xl font-bold text-[#d4af37] uppercase tracking-wider">
            Dietary Concerns & Private Bookings
          </h3>
          <p className="font-sans text-xs text-white/85 max-w-xl leading-relaxed font-normal">
            Consuming raw or undercooked meats, poultry, seafood, or eggs may increase your risk of foodborne illness. Please notify your server of any severe food allergies before ordering.
          </p>
        </div>
        <div className="shrink-0">
          <a
            href="tel:7075550199"
            className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-[#d4af37] text-[#d4af37] bg-black/40 font-sans text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#d4af37] hover:text-[#0f0e0d] transition-all duration-300 shadow-md"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Culinary Team</span>
          </a>
        </div>
      </div>

    </div>
  );
}
