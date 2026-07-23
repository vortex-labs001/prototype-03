'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '18:00',
    guests: '2',
    requests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-2xl border border-obsidian/10 text-center space-y-6 shadow-xl">
        <div className="w-16 h-16 bg-ember/10 text-ember rounded-full flex items-center justify-center mx-auto border border-ember/20">
          <CheckCircle2 className="w-10 h-10 text-ember" />
        </div>
        <h3 className="font-serif text-3xl font-bold text-obsidian">Reservation Requested</h3>
        <p className="font-sans text-xs sm:text-sm text-obsidian/75 leading-relaxed max-w-md mx-auto">
          Thank you, <strong className="text-obsidian font-semibold">{formData.name}</strong>. We have received your booking request for <strong className="text-obsidian font-semibold">{formData.guests} guests</strong> on <strong className="text-obsidian font-semibold">{formData.date || 'your selected date'}</strong>.
        </p>
        <p className="text-xs text-obsidian/50 italic">
          A confirmation email will be sent to {formData.email}.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 bg-obsidian text-cream text-xs font-bold uppercase tracking-widest rounded hover:bg-ember transition-colors duration-300"
        >
          Book Another Table
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-1">
        <h2 className="font-serif text-2xl font-bold text-obsidian">Book Your Table</h2>
        <p className="font-sans text-xs text-obsidian/65">
          Select your party size, date, and preferred dining time.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-obsidian">
            Full Name <span className="text-ember">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-obsidian/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border border-obsidian/20 rounded text-obsidian font-sans text-xs focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-all"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-obsidian">
            Email Address <span className="text-ember">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-obsidian/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border border-obsidian/20 rounded text-obsidian font-sans text-xs focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-all"
            />
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-obsidian">
            Phone Number <span className="text-ember">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-obsidian/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              required
              placeholder="(707) 555-0199"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border border-obsidian/20 rounded text-obsidian font-sans text-xs focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-all"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-obsidian">
            Guests <span className="text-ember">*</span>
          </label>
          <div className="relative">
            <Users className="w-4 h-4 text-obsidian/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border border-obsidian/20 rounded text-obsidian font-sans text-xs focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-all cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num} className="bg-white text-obsidian">
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
              <option value="9+" className="bg-white text-obsidian">Large Party (9+ Guests)</option>
            </select>
          </div>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-obsidian">
            Date <span className="text-ember">*</span>
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-obsidian/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border border-obsidian/20 rounded text-obsidian font-sans text-xs focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-all"
            />
          </div>
        </div>

        {/* Time */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-obsidian">
            Preferred Time <span className="text-ember">*</span>
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-obsidian/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <select
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border border-obsidian/20 rounded text-obsidian font-sans text-xs focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-all cursor-pointer"
            >
              <option value="17:00" className="bg-white text-obsidian">5:00 PM</option>
              <option value="17:30" className="bg-white text-obsidian">5:30 PM</option>
              <option value="18:00" className="bg-white text-obsidian">6:00 PM</option>
              <option value="18:30" className="bg-white text-obsidian">6:30 PM</option>
              <option value="19:00" className="bg-white text-obsidian">7:00 PM</option>
              <option value="19:30" className="bg-white text-obsidian">7:30 PM</option>
              <option value="20:00" className="bg-white text-obsidian">8:00 PM</option>
              <option value="20:30" className="bg-white text-obsidian">8:30 PM</option>
              <option value="21:00" className="bg-white text-obsidian">9:00 PM</option>
            </select>
          </div>
        </div>
      </div>

      {/* Special Requests */}
      <div className="space-y-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-obsidian">
          Special Requests / Dietary Notes
        </label>
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-obsidian/40 absolute left-3.5 top-3.5" />
          <textarea
            rows={3}
            placeholder="Anniversary celebration, window table preference, food allergies..."
            value={formData.requests}
            onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
            className="w-full pl-10 pr-4 py-3 bg-white border border-obsidian/20 rounded text-obsidian font-sans text-xs focus:outline-none focus:border-ember focus:ring-1 focus:ring-ember transition-all"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-4 bg-ember text-cream font-bold text-xs uppercase tracking-[0.2em] rounded-lg hover:bg-ember-dark transition-all duration-300 shadow-md ember-glow cursor-pointer"
      >
        Confirm Reservation
      </button>
    </form>
  );
}
