'use client';

import React, { useState } from 'react';
import { menuData } from '@/data/menuData';
import MenuCard from '@/components/MenuCard';

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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-xl mx-auto space-y-4">
        <p className="text-xs font-semibold tracking-[0.2em] text-terracotta uppercase">
          Artisanal Culinary Fare
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal tracking-wide uppercase">
          Our Menu
        </h1>
        <div className="w-16 h-[2px] bg-terracotta mx-auto"></div>
        <p className="font-sans text-xs text-charcoal/60 leading-relaxed">
          Sourced from local organic farms in northern California. Every single hot dish is touched by red oak fire and charcoal embers.
        </p>
      </div>

      {/* Filter Tabs Container */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto pb-4 border-b border-charcoal/5">
        {filterOptions.map((option) => {
          const isActive = activeFilter === option.key;
          return (
            <button
              key={option.key}
              onClick={() => setActiveFilter(option.key)}
              className={`px-5 py-2.5 rounded font-sans text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-terracotta text-cream shadow-md shadow-terracotta/25'
                  : 'bg-cream-dark/40 text-charcoal hover:bg-cream-dark/90 hover:text-terracotta'
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
        <div className="text-center py-12">
          <p className="font-serif italic text-base text-charcoal/50">
            No dishes found in this category.
          </p>
        </div>
      )}

      {/* Bottom informational block */}
      <div className="bg-charcoal text-cream rounded p-8 sm:p-10 border border-white/5 shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-2">
          <h3 className="font-serif text-lg font-bold text-gold uppercase tracking-wider">
            Dietary Concerns & Private Bookings
          </h3>
          <p className="font-sans text-xs text-cream-dark/65 max-w-xl leading-relaxed">
            Consuming raw or undercooked meats, poultry, seafood, or eggs may increase your risk of foodborne illness. Please notify your server of any severe food allergies before ordering.
          </p>
        </div>
        <div className="shrink-0">
          <a
            href="tel:7075550199"
            className="inline-flex px-6 py-3 border border-gold text-gold font-sans text-xs font-semibold uppercase tracking-widest rounded hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            Call Culinary Team
          </a>
        </div>
      </div>

    </div>
  );
}
