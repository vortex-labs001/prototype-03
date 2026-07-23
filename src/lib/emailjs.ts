/**
 * Ember & Oak Restaurant - EmailJS Reservation Integration Helper
 * 
 * =========================================================================
 * HOW TO SET UP EMAILJS IN YOUR GMAIL INBOX:
 * =========================================================================
 * 1. Sign up for a free account at https://www.emailjs.com/
 * 2. In the EmailJS Dashboard:
 *    - Go to "Email Services" -> Click "Add New Service" -> Select "Gmail".
 *    - Connect your Gmail account, grant permissions, and click "Create Service".
 *    - Copy the "Service ID" (e.g. `service_xxxxxx`).
 * 
 * 3. Go to "Email Templates" -> Click "Create New Template":
 *    - Design your email body. You can paste the template format provided below.
 *    - Save the template and copy the "Template ID" (e.g. `template_xxxxxx`).
 * 
 * 4. Go to "Account" or "API Keys":
 *    - Copy your "Public Key" (formerly User ID) (e.g. `user_xxxxxx` or a random string).
 * 
 * 5. Create a `.env.local` file in the root of your project:
 *    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
 *    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
 *    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
 * 
 * =========================================================================
 * SAMPLE EMAILJS TEMPLATE FORMAT (Paste this in your EmailJS Template editor):
 * =========================================================================
 * Subject: New Reservation Request: {{name}}
 * 
 * Body:
 * <h2>New Table Reservation Request</h2>
 * <p><strong>Guest Name:</strong> {{name}}</p>
 * <p><strong>Email Address:</strong> {{email}}</p>
 * <p><strong>Phone Number:</strong> {{phone}}</p>
 * <p><strong>Date:</strong> {{date}}</p>
 * <p><strong>Time:</strong> {{time}}</p>
 * <p><strong>Number of Guests:</strong> {{guests}}</p>
 * <p><strong>Special Requests:</strong></p>
 * <p style="padding: 10px; background-color: #f5f5f5; border-left: 4px solid #c85a32;">
 *   {{requests}}
 * </p>
 * <br/>
 * <p>Submitted from Ember & Oak Website Reservation Portal.</p>
 */

import emailjs from '@emailjs/browser';

// These credentials will check environment variables first.
// If they are not found, they fall back to these placeholders.
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID_PLACEHOLDER',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID_PLACEHOLDER',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_PLACEHOLDER',
};

export interface ReservationPayload {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  requests: string;
}

/**
 * Sends reservation details directly using the EmailJS SDK.
 * @param payload The customer details from the reservation form.
 */
export const sendReservationEmail = async (payload: ReservationPayload): Promise<void> => {
  // If the user has not replaced placeholders, simulate sending and print a console guide.
  if (
    EMAILJS_CONFIG.SERVICE_ID.includes('PLACEHOLDER') ||
    EMAILJS_CONFIG.TEMPLATE_ID.includes('PLACEHOLDER') ||
    EMAILJS_CONFIG.PUBLIC_KEY.includes('PLACEHOLDER')
  ) {
    console.warn(
      '⚠️ EmailJS is running in DEMO mode. To receive real emails, set up your credentials in .env.local'
    );
    
    // Simulate API delay
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('✅ [DEMO] Reservation details sent successfully to console:', payload);
        resolve();
      }, 1000);
    });
  }

  // Convert payload to key-value record for EmailJS template variables
  const templateParams: Record<string, unknown> = {
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    date: payload.date,
    time: payload.time,
    guests: payload.guests.toString(),
    requests: payload.requests || 'No special requests',
  };

  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    
    if (response.status !== 200) {
      throw new Error(`EmailJS responded with status: ${response.status} - ${response.text}`);
    }
  } catch (error) {
    console.error('❌ EmailJS error:', error);
    throw error;
  }
};
