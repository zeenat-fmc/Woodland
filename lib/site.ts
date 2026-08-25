// Single source of truth for contact details / brand color used across
// the site (nav, top bar, footer, hero, product pages, estimate widget).

export const SITE = {
  phoneDisplay: "+92 300 1234567",
  // ⚠️ PLACEHOLDER — replace with the real WhatsApp Business number:
  // country code + number, no +, no spaces, no dashes (e.g. "923001234567").
  whatsappNumber: "923001234567",
  email: "info@woodlanddoors.pk",
  address: "123 Example Road, Lahore, Pakistan",
  hours: "Mon - Sat: 10:00 AM - 7:00 PM",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("123 Example Road, Lahore, Pakistan"),
  facebookUrl: "https://www.facebook.com/",
  instagramUrl: "https://www.instagram.com/",
};

/** Builds a wa.me link that opens WhatsApp with a pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}