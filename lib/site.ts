// Single source of truth for contact details / brand color used across
// the site (nav, top bar, footer, hero, product pages, estimate widget).

export const SITE = {
  phoneDisplay: "+92 342 7043613",
  whatsappNumber: "+92 342 7043613",
  email: "info@woodlanddoors.pk",
  address: "Opposit Gate No.4 DHA Phase 2, GT Road, Islamabad, Pakistan",
  hours: "Mon - Sat: 10:00 AM - 7:00 PM",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("123 Example Road, Lahore, Pakistan"),
  facebookUrl: "https://www.facebook.com/people/Woodland-Doors/61592541773902/",
  instagramUrl: "https://www.instagram.com/wood_land_doors/",
};

/** Builds a wa.me link that opens WhatsApp with a pre-filled message. */
export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}