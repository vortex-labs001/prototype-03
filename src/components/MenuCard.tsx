import React from 'react';
import { MenuItem } from '@/data/menuData';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const { name, description, price, isVeg, image } = item;

  return (
    <div className="bg-cream-dark/30 rounded border border-charcoal/5 overflow-hidden flex flex-col group hover:shadow-lg hover:border-terracotta/20 transition-all duration-300">
      {/* Food Image and Hover Zoom effect */}
      <div className="relative h-56 w-full overflow-hidden bg-charcoal/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        
        {/* Price tag badge overlay */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-charcoal/90 text-gold font-sans text-sm font-semibold tracking-wider rounded">
          ${price.toFixed(2)}
        </div>
      </div>

      {/* Card Content details */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Header containing name and dietary dot */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-terracotta transition-colors duration-250">
              {name}
            </h3>
            
            {/* Standard Culinary Veg / Non-Veg Indicator */}
            <div className="shrink-0 mt-1" title={isVeg ? 'Vegetarian' : 'Non-Vegetarian'}>
              {isVeg ? (
                // Veg: green circle inside a green square
                <div className="w-4.5 h-4.5 border border-emerald-600 flex items-center justify-center rounded-[2px]" aria-label="Vegetarian">
                  <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                </div>
              ) : (
                // Non-Veg: red/brown triangle inside a red/brown square
                <div className="w-4.5 h-4.5 border border-red-700 flex items-center justify-center rounded-[2px]" aria-label="Non-Vegetarian">
                  <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[8px] border-b-red-700"></div>
                </div>
              )}
            </div>
          </div>

          <p className="font-sans text-xs text-charcoal/70 leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="pt-2 flex items-center justify-between text-[10px] tracking-wider uppercase font-semibold">
          <span className={isVeg ? 'text-emerald-700' : 'text-amber-800'}>
            {isVeg ? 'Vegetarian' : 'Contains Meat/Fish'}
          </span>
          <span className="text-charcoal/40">Ember & Oak Special</span>
        </div>
      </div>
    </div>
  );
}
