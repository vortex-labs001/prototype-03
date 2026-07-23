import React from 'react';
import { Flame, Leaf } from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  isVeg: boolean;
  image: string;
  isSpicy?: boolean;
}

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="bg-white rounded-xl border border-obsidian/10 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group">
      
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden bg-obsidian">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-100"
          loading="lazy"
        />

        {/* Dietary Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {item.isVeg ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sage/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
              <Leaf className="w-3 h-3" /> Veg
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-obsidian/80 backdrop-blur-md text-cream text-[10px] font-bold uppercase tracking-wider border border-white/20 shadow-sm">
              Non-Veg
            </span>
          )}

          {item.isSpicy && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-ember text-cream text-[10px] font-bold uppercase tracking-wider shadow-sm">
              <Flame className="w-3 h-3" /> Wood-Fired
            </span>
          )}
        </div>
      </div>

      {/* Dish Content Body */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-serif text-xl font-bold text-obsidian tracking-wide group-hover:text-ember transition-colors">
              {item.name}
            </h3>
            <span className="font-serif text-lg font-bold text-ember shrink-0">
              {item.price}
            </span>
          </div>

          <p className="font-sans text-xs leading-relaxed text-obsidian/75">
            {item.description}
          </p>
        </div>

        <div className="pt-3 border-t border-obsidian/10 flex items-center justify-between text-[10px] uppercase tracking-widest text-obsidian/50 font-bold">
          <span>{item.category.replace('-', ' & ')}</span>
          <span className="text-gold font-semibold">Oak Smoked</span>
        </div>
      </div>

    </div>
  );
}
