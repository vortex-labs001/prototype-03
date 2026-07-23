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
      <div className="bg-white p-8 sm:p-10 rounded-2xl border-2 border-[#0f0e0d]/20 text-center space-y-6 shadow-xl">
        <div className="w-16 h-16 bg-[#d9531e]/10 text-[#d9531e] rounded-full flex items-center justify-center mx-auto border border-[#d9531e]/30">
          <CheckCircle2 className="w-10 h-10 text-[#d9531e]" />
        </div>
        <h3 className="font-serif text-3xl font-bold text-[#0f0e0d]">Reservation Requested</h3>
        <p className="font-sans text-xs sm:text-sm text-[#0f0e0d] leading-relaxed max-w-md mx-auto font-medium">
          Thank you, <strong className="text-[#0f0e0d] font-bold">{formData.name}</strong>. We have received your booking request for <strong className="text-[#0f0e0d] font-bold">{formData.guests} guests</strong> on <strong className="text-[#0f0e0d] font-bold">{formData.date || 'your selected date'}</strong>.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-3 bg-[#0f0e0d] text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-[#d9531e] transition-colors duration-300"
        >
          Book Another Table
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-[#0f0e0d]">
      <div className="space-y-1 text-center sm:text-left">
        <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0f0e0d] tracking-wider uppercase">
          Book Your Table
        </h2>
        <p className="font-sans text-xs font-semibold text-[#0f0e0d]/70">
          Please complete the form below. For parties larger than 8, please contact us directly.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0f0e0d]">
            Full Name <span className="text-[#d9531e]">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#0f0e0d]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#0f0e0d]/20 rounded text-[#0f0e0d] font-sans text-xs font-medium placeholder-[#0f0e0d]/50 focus:outline-none focus:border-[#d9531e] transition-all"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0f0e0d]">
            Email Address <span className="text-[#d9531e]">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-[#0f0e0d]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#0f0e0d]/20 rounded text-[#0f0e0d] font-sans text-xs font-medium placeholder-[#0f0e0d]/50 focus:outline-none focus:border-[#d9531e] transition-all"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0f0e0d]">
            Phone Number <span className="text-[#d9531e]">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-[#0f0e0d]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              required
              placeholder="(707) 555-0199"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#0f0e0d]/20 rounded text-[#0f0e0d] font-sans text-xs font-medium placeholder-[#0f0e0d]/50 focus:outline-none focus:border-[#d9531e] transition-all"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0f0e0d]">
            Guests <span className="text-[#d9531e]">*</span>
          </label>
          <div className="relative">
            <Users className="w-4 h-4 text-[#0f0e0d]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#0f0e0d]/20 rounded text-[#0f0e0d] font-sans text-xs font-bold focus:outline-none focus:border-[#d9531e] transition-all cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num} className="bg-white text-[#0f0e0d] font-bold">
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0f0e0d]">
            Date <span className="text-[#d9531e]">*</span>
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-[#0f0e0d]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#0f0e0d]/20 rounded text-[#0f0e0d] font-sans text-xs font-medium focus:outline-none focus:border-[#d9531e] transition-all"
            />
          </div>
        </div>

        {/* Preferred Time */}
        <div className="space-y-2">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0f0e0d]">
            Preferred Time <span className="text-[#d9531e]">*</span>
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-[#0f0e0d]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <select
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#0f0e0d]/20 rounded text-[#0f0e0d] font-sans text-xs font-bold focus:outline-none focus:border-[#d9531e] transition-all cursor-pointer"
            >
              <option value="17:00" className="bg-white text-[#0f0e0d] font-bold">5:00 PM</option>
              <option value="17:30" className="bg-white text-[#0f0e0d] font-bold">5:30 PM</option>
              <option value="18:00" className="bg-white text-[#0f0e0d] font-bold">6:00 PM</option>
              <option value="18:30" className="bg-white text-[#0f0e0d] font-bold">6:30 PM</option>
              <option value="19:00" className="bg-white text-[#0f0e0d] font-bold">7:00 PM</option>
              <option value="19:30" className="bg-white text-[#0f0e0d] font-bold">7:30 PM</option>
              <option value="20:00" className="bg-white text-[#0f0e0d] font-bold">8:00 PM</option>
            </select>
          </div>
        </div>
      </div>

      {/* Special Requests */}
      <div className="space-y-2">
        <label className="block text-xs font-extrabold uppercase tracking-wider text-[#0f0e0d]">
          Special Requests (Optional)
        </label>
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-[#0f0e0d]/60 absolute left-3.5 top-3.5" />
          <textarea
            rows={3}
            placeholder="Allergies, high chair requirements, window table preferences..."
            value={formData.requests}
            onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
            className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#0f0e0d]/20 rounded text-[#0f0e0d] font-sans text-xs font-medium placeholder-[#0f0e0d]/50 focus:outline-none focus:border-[#d9531e] transition-all"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-4 bg-[#0f0e0d] text-white font-extrabold text-xs uppercase tracking-[0.2em] rounded-lg hover:bg-[#d9531e] transition-all duration-300 shadow-lg cursor-pointer"
      >
        Confirm Reservation
      </button>
    </form>
  );
}
