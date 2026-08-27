import { SITE } from "@/lib/site";

const IconFB = () => (
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46H16.5V4.36C16.2 4.32 15.2 4.24 14 4.24c-2.4 0-4 1.46-4 4.16V10.5H7.5v3H10V21h3.5z"/></svg>
);
const IconIG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>
);
const IconYT = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="5.5" width="20" height="13" rx="3"/><path d="M10.5 9.5v5l4.5-2.5z" fill="currentColor" stroke="none"/></svg>
);
const IconWA = () => (
  <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.25.62 4.44 1.8 6.36L3.5 29l7.8-2.24a11.98 11.98 0 0 0 4.72.96h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-4.63 1.33 1.36-4.51-.24-.37a9.86 9.86 0 0 1-1.53-5.24C5.56 9.5 10.28 4.8 16.02 4.8c5.74 0 10.44 4.7 10.44 10.44 0 5.75-4.7 10.44-10.44 10.44v.02z"/></svg>
);
const IconPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7-6.5-7-11.5A7 7 0 0 1 19 9.5C19 14.5 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
);


export default function Footer({
  showShowroomLink = true,
}: {
  showShowroomLink?: boolean;
}) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="/" className="footer-logo">
            <img src="/white.png" alt="WoodLand" />
            <span>
              WOODLAND
              <em>Doors, Redefined.</em>
            </span>
          </a>
          <p>
            Engineered doors made for Pakistan&apos;s climate and
            contemporary lifestyle.
          </p>
          <div className="footer-social">
            <a href={SITE.facebookUrl} aria-label="Facebook"><IconFB /></a>
            <a href={SITE.instagramUrl} aria-label="Instagram"><IconIG /></a>
            <a href="#" aria-label="YouTube"><IconYT /></a>
            <a
              href={`https://wa.me/${SITE.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <IconWA />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Quick Links</h5>
          <a href="/">Home</a>
          <a href="/our-story">About Us</a>
          <a href="/collections">Our Doors</a>
          {/* {showShowroomLink && <a href="/gallery">Gallery</a>} */}
          <a href="/why-woodland">Why Woodland</a>
          <a href="/contact">Contact Us</a>
        </div>

        <div className="footer-col">
          <h5>Our Doors</h5>
          <a href="/collections">PET Doors</a>
          <a href="/collections">PPH Doors</a>
          <a href="/collections">CCP Doors</a>
        </div>

        <div className="footer-col">
          {/* ⚠️ placeholder links — resource pages not built yet */}
          <h5>Resources</h5>
          <a href="#">Door Care Guide</a>
          <a href="#">Installation Guide</a>
          <a href="#">Warranty</a>
          <a href="#">FAQs</a>
        </div>

        <div className="footer-col footer-contact-col">
          <h5>Contact Us</h5>
          <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="footer-contact-line">
            <IconPin /> {SITE.address}
          </a>
          <a href={`tel:${SITE.whatsappNumber}`} className="footer-contact-line">
            <IconPhone /> {SITE.phoneDisplay}
          </a>
          <a href={`mailto:${SITE.email}`} className="footer-contact-line">
            <IconMail /> {SITE.email}
          </a>
          <span className="footer-contact-line">
            <IconClock /> {SITE.hours}
          </span>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© 2026 WoodLand Doors. All Rights Reserved.</span>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}