'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, CheckCircle2, ExternalLink } from 'lucide-react';

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '18:30', // Default 6:30 PM
    guests: '2',
    requests: '',
  });

  // Popular time quick-select options
  const quickTimeSlots = ['17:00', '18:30', '19:30', '20:30'];

  // Helper to format 24h string (e.g. "18:30") to readable 12h AM/PM
  const formatTimeLabel = (timeStr: string) => {
    if (!timeStr) return '';
    const [hours, minutes] = timeStr.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;
  };

  // Generate plain text email body
  const getEmailBody = () => {
    return `Hello Ember & Oak Team,

I would like to request a table reservation. Here are my details:

• Full Name: ${formData.name}
• Email Address: ${formData.email}
• Phone Number: ${formData.phone}
• Number of Guests: ${formData.guests}
• Date: ${formData.date}
• Preferred Time: ${formatTimeLabel(formData.time)} (${formData.time})
• Special Requests: ${formData.requests || 'None'}

Looking forward to hearing from you.

Best regards,
${formData.name}`;
  };

  // Mailto URL scheme (Triggers native Gmail / Mail App on Mobile)
  const getMailtoUrl = () => {
    const recipient = 'events@emberandoak.com';
    const subject = `Table Reservation Request - ${formData.name}`;
    const body = getEmailBody();
    return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  // Web Gmail Compose URL (For Desktop Browser)
  const getGmailWebUrl = () => {
    const recipient = 'events@emberandoak.com';
    const subject = `Table Reservation Request - ${formData.name}`;
    const body = getEmailBody();
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if user is on mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      // Direct mobile deep-link to launch native Gmail app
      window.location.href = getMailtoUrl();
    } else {
      // Desktop browser window opening Gmail web app
      window.open(getGmailWebUrl(), '_blank');
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 sm:p-10 rounded-2xl border-2 border-[#121212]/20 text-center space-y-6 shadow-xl">
        <div className="w-16 h-16 bg-[#c85a32]/10 text-[#c85a32] rounded-full flex items-center justify-center mx-auto border border-[#c85a32]/30">
          <CheckCircle2 className="w-10 h-10 text-[#c85a32]" />
        </div>

        <h3 className="font-serif text-3xl font-bold text-[#121212]">Opening Email App...</h3>

        <p className="font-sans text-xs sm:text-sm text-[#121212] leading-relaxed max-w-md mx-auto font-medium">
          Thank you, <strong className="text-[#121212] font-bold">{formData.name}</strong>. Your pre-filled reservation email to <strong className="text-[#c85a32] font-bold">events@emberandoak.com</strong> is ready to send.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getMailtoUrl()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#c85a32] text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#b04924] transition-colors duration-300"
          >
            Open Mail App <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={() => setSubmitted(false)}
            className="w-full sm:w-auto px-6 py-3 bg-[#121212] text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-black transition-colors duration-300"
          >
            Edit Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-[#121212]">
      <div className="space-y-1 text-center sm:text-left">
        <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-wider uppercase">
          Book Your Table
        </h2>
        <p className="font-sans text-xs font-semibold text-[#121212]/70">
          Please complete the details below. Submitting will launch your Gmail app with pre-filled details for direct confirmation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div className="space-y-2">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#121212]">
            Full Name <span className="text-[#c85a32]">*</span>
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#121212]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#121212]/20 rounded text-[#121212] font-sans text-xs font-medium placeholder-[#121212]/50 focus:outline-none focus:border-[#c85a32] transition-all"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#121212]">
            Email Address <span className="text-[#c85a32]">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-[#121212]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#121212]/20 rounded text-[#121212] font-sans text-xs font-medium placeholder-[#121212]/50 focus:outline-none focus:border-[#c85a32] transition-all"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#121212]">
            Phone Number <span className="text-[#c85a32]">*</span>
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-[#121212]/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              required
              placeholder="(707) 555-0199"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#121212]/20 rounded text-[#121212] font-sans text-xs font-medium placeholder-[#121212]/50 focus:outline-none focus:border-[#c85a32] transition-all"
            />
          </div>
        </div>

        {/* Guests */}
        <div className="space-y-2">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#121212]">
            Guests <span className="text-[#c85a32]">*</span>
          </label>
          <div className="relative">
            <Users className="w-4 h-4 text-[#121212]/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#121212]/20 rounded text-[#121212] font-sans text-xs font-bold focus:outline-none focus:border-[#c85a32] transition-all cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num} className="bg-white text-[#121212] font-bold">
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date */}
        <div className="space-y-2">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#121212]">
            Date <span className="text-[#c85a32]">*</span>
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-[#121212]/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#121212]/20 rounded text-[#121212] font-sans text-xs font-medium focus:outline-none focus:border-[#c85a32] transition-all cursor-pointer"
            />
          </div>
        </div>

        {/* Clock Time Picker */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-extrabold uppercase tracking-wider text-[#121212]">
              Select Time <span className="text-[#c85a32]">*</span>
            </label>
            <span className="text-[10px] font-bold text-[#c85a32] uppercase tracking-wider">
              {formatTimeLabel(formData.time)}
            </span>
          </div>

          <div className="relative">
            <Clock className="w-4 h-4 text-[#121212]/60 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="time"
              required
              min="10:30"
              max="22:30"
              step="900"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#121212]/20 rounded text-[#121212] font-sans text-xs font-bold focus:outline-none focus:border-[#c85a32] transition-all cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Quick Time Slots */}
      <div className="space-y-2">
        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#121212]/70">
          Popular Dinner Slots
        </label>
        <div className="flex flex-wrap gap-2">
          {quickTimeSlots.map((slot) => {
            const isSelected = formData.time === slot;
            return (
              <button
                key={slot}
                type="button"
                onClick={() => setFormData({ ...formData, time: slot })}
                className={`px-3 py-1.5 rounded text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-[#c85a32] text-white shadow-sm'
                    : 'bg-[#121212]/5 text-[#121212] hover:bg-[#121212]/10'
                }`}
              >
                {formatTimeLabel(slot)}
              </button>
            );
          })}
        </div>
      </div>

      {/* Special Requests */}
      <div className="space-y-2">
        <label className="block text-xs font-extrabold uppercase tracking-wider text-[#121212]">
          Special Requests (Optional)
        </label>
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-[#121212]/60 absolute left-3.5 top-3.5" />
          <textarea
            rows={3}
            placeholder="Allergies, high chair requirements, window table preferences..."
            value={formData.requests}
            onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
            className="w-full pl-10 pr-4 py-3 bg-white border-2 border-[#121212]/20 rounded text-[#121212] font-sans text-xs font-medium placeholder-[#121212]/50 focus:outline-none focus:border-[#c85a32] transition-all"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-4 bg-[#121212] text-white font-extrabold text-xs uppercase tracking-[0.2em] rounded-lg hover:bg-[#c85a32] transition-all duration-300 shadow-lg cursor-pointer flex items-center justify-center gap-2"
      >
        Confirm & Send Reservation <ExternalLink className="w-4 h-4" />
      </button>
    </form>
  );
}
