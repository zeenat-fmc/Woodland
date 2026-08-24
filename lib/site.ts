// Central place for contact details used across the site (nav, hero,
// product pages, footer, WhatsApp links). Change once here, it updates
// everywhere.
//
// ⚠️ IMPORTANT: WHATSAPP_NUMBER below reuses the placeholder landline
// number from the original template ("+92 51 123 45678"), which is a
// Rawalpindi/Islamabad *landline* format — landlines generally can't run
// WhatsApp. Before this goes live, replace it with the real WhatsApp
// Business mobile number (format: 923XXXXXXXXX, no "+", no spaces).

export const SITE = {
  phoneDisplay: "+92 342 7043613",
  // TODO: replace with the real WhatsApp Business number before launch.
  whatsappNumber: "923427043613",
  email: "sales@woodland.pk",
  address: "Plot 14, Industrial Triangle, Rawalpindi, Punjab, Pakistan",
  hours: "Monday - Saturday, 10am - 7pm",
  // TODO: replace with the real Google Maps share link for the showroom.
  mapsUrl: "https://maps.google.com/?q=Industrial+Triangle+Rawalpindi",
};

/**
 * Builds a wa.me deep link that opens WhatsApp with a pre-filled message.
 * Works on both mobile (opens the app) and desktop (opens WhatsApp Web).
 */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
