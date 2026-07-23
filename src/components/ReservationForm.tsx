'use client';

import React, { useState, useEffect } from 'react';
import { sendReservationEmail, ReservationPayload } from '@/lib/emailjs';
import { Calendar, Clock, Users, FileText, Phone, Mail, User, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ReservationForm() {
  const [formData, setFormData] = useState<ReservationPayload>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    requests: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [minDate, setMinDate] = useState('');

  // Restrict date selection to today and future dates
  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    setMinDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) || 2 : value,
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = (): boolean => {
    const tempErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    
    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    // Phone regex (allowing standard US numbers: 10 digits, optional hyphens/parentheses)
    const phoneRegex = /^\+?1?[-. ]?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!formData.phone) {
      tempErrors.phone = 'Phone number is required';
    } else {
      // Basic cleaning check for digits
      const digits = formData.phone.replace(/\D/g, '');
      if (digits.length < 10 || digits.length > 11) {
        tempErrors.phone = 'Please enter a valid 10-digit phone number';
      }
    }

    if (!formData.date) {
      tempErrors.date = 'Reservation date is required';
    } else {
      const selectedDate = new Date(formData.date + 'T00:00:00');
      const todayDate = new Date();
      todayDate.setHours(0, 0, 0, 0);
      if (selectedDate < todayDate) {
        tempErrors.date = 'Reservation date cannot be in the past';
      }
    }

    if (!formData.time) {
      tempErrors.time = 'Preferred time slot is required';
    } else {
      // Basic operating hours check (e.g. 10:30 AM to 11:00 PM)
      const hour = parseInt(formData.time.split(':')[0]);
      if (hour < 10 || hour >= 23) {
        tempErrors.time = 'Reservations are open between 10:30 AM and 10:30 PM';
      }
    }

    if (!formData.guests || formData.guests < 1) {
      tempErrors.guests = 'Must have at least 1 guest';
    } else if (formData.guests > 14) {
      tempErrors.guests = 'For parties larger than 14, please contact the restaurant directly at (707) 555-0199.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await sendReservationEmail(formData);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        requests: '',
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-charcoal text-cream p-6 sm:p-10 rounded border border-white/5 shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide uppercase">
          Book Your Table
        </h2>
        <div className="w-16 h-[2px] bg-terracotta mx-auto my-3"></div>
        <p className="font-sans text-xs text-cream-dark/65 max-w-md mx-auto">
          Please complete the form below. For parties larger than 14, or private event inquiries, please call our reservations desk directly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Guest Name */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="block font-sans text-xs font-semibold tracking-wider text-cream-dark/80 uppercase">
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-cream-dark/35">
                <User className="w-4 h-4" />
              </span>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`w-full pl-10 pr-3 py-2.5 bg-white/5 border rounded font-sans text-sm focus:outline-none transition-colors ${
                  errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-terracotta'
                }`}
              />
            </div>
            {errors.name && (
              <p className="text-[10px] text-red-400 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="block font-sans text-xs font-semibold tracking-wider text-cream-dark/80 uppercase">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-cream-dark/35">
                <Mail className="w-4 h-4" />
              </span>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full pl-10 pr-3 py-2.5 bg-white/5 border rounded font-sans text-sm focus:outline-none transition-colors ${
                  errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-terracotta'
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-[10px] text-red-400 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="block font-sans text-xs font-semibold tracking-wider text-cream-dark/80 uppercase">
              Phone Number
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-cream-dark/35">
                <Phone className="w-4 h-4" />
              </span>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="(707) 555-0199"
                className={`w-full pl-10 pr-3 py-2.5 bg-white/5 border rounded font-sans text-sm focus:outline-none transition-colors ${
                  errors.phone ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-terracotta'
                }`}
              />
            </div>
            {errors.phone && (
              <p className="text-[10px] text-red-400 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
              </p>
            )}
          </div>

          {/* Number of Guests */}
          <div className="space-y-1.5">
            <label htmlFor="guests" className="block font-sans text-xs font-semibold tracking-wider text-cream-dark/80 uppercase">
              Guests
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-cream-dark/35">
                <Users className="w-4 h-4" />
              </span>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2.5 bg-white/5 border rounded font-sans text-sm text-cream focus:outline-none transition-colors appearance-none ${
                  errors.guests ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-terracotta'
                }`}
                style={{ colorScheme: 'dark' }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((num) => (
                  <option key={num} value={num} className="bg-charcoal text-cream">
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
            {errors.guests && (
              <p className="text-[10px] text-red-400 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.guests}
              </p>
            )}
          </div>

          {/* Date Picker */}
          <div className="space-y-1.5">
            <label htmlFor="date" className="block font-sans text-xs font-semibold tracking-wider text-cream-dark/80 uppercase">
              Date
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-cream-dark/35">
                <Calendar className="w-4 h-4" />
              </span>
              <input
                id="date"
                name="date"
                type="date"
                required
                min={minDate}
                value={formData.date}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2.5 bg-white/5 border rounded font-sans text-sm text-cream focus:outline-none transition-colors ${
                  errors.date ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-terracotta'
                }`}
                style={{ colorScheme: 'dark' }}
              />
            </div>
            {errors.date && (
              <p className="text-[10px] text-red-400 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.date}
              </p>
            )}
          </div>

          {/* Time Picker */}
          <div className="space-y-1.5">
            <label htmlFor="time" className="block font-sans text-xs font-semibold tracking-wider text-cream-dark/80 uppercase">
              Time
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-cream-dark/35">
                <Clock className="w-4 h-4" />
              </span>
              <input
                id="time"
                name="time"
                type="time"
                required
                value={formData.time}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-2.5 bg-white/5 border rounded font-sans text-sm text-cream focus:outline-none transition-colors ${
                  errors.time ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-terracotta'
                }`}
                style={{ colorScheme: 'dark' }}
              />
            </div>
            {errors.time && (
              <p className="text-[10px] text-red-400 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.time}
              </p>
            )}
          </div>
        </div>

        {/* Special Requests */}
        <div className="space-y-1.5">
          <label htmlFor="requests" className="block font-sans text-xs font-semibold tracking-wider text-cream-dark/80 uppercase">
            Special Requests <span className="text-cream-dark/45 font-normal">(Optional)</span>
          </label>
          <div className="relative">
            <span className="absolute top-3 left-3 text-cream-dark/35">
              <FileText className="w-4 h-4" />
            </span>
            <textarea
              id="requests"
              name="requests"
              rows={4}
              value={formData.requests}
              onChange={handleChange}
              placeholder="Allergies, high chair requirements, window table preferences, or birthday celebrations..."
              className="w-full pl-10 pr-3 py-2.5 bg-white/5 border border-white/10 rounded font-sans text-sm placeholder-cream-dark/30 focus:outline-none focus:border-terracotta transition-colors resize-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 mt-2 bg-terracotta text-cream font-sans text-xs font-bold uppercase tracking-widest rounded hover:bg-terracotta-dark disabled:bg-terracotta/55 cursor-pointer shadow-lg active:scale-[0.99] transition-all duration-150"
        >
          {isSubmitting ? 'Securing Table...' : 'Confirm Reservation'}
        </button>

        {/* Submit Feedback Toast Messages */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-emerald-950/45 border border-emerald-500/30 rounded text-emerald-400 text-xs flex items-start gap-3 animate-fade-in">
            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold uppercase tracking-wider mb-1">Reservation Submitted!</p>
              <p className="font-sans leading-relaxed text-cream-dark/75">
                Thank you. Your request was successfully processed. If running in production, check your Gmail inbox. If running in development, we simulated a successful send and logged the details to the console. We look forward to hosting you!
              </p>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-950/45 border border-red-500/30 rounded text-red-400 text-xs flex items-start gap-3 animate-fade-in">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold uppercase tracking-wider mb-1">Submission Failed</p>
              <p className="font-sans leading-relaxed text-cream-dark/75">
                We encountered an issue submitting your request. Please double check your internet connection or contact us by phone at (707) 555-0199.
              </p>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
