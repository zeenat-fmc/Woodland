import { SITE, waLink } from "@/lib/site";

export default function Footer({
  showShowroomLink = true,
}: {
  showShowroomLink?: boolean;
}) {
  return (
    <footer>
      <div className="container">
        <div className="footer-contact-block" data-reveal>
          <div className="footer-contact-item">
            <span className="ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>
            </span>
            <div>
              <h6>Showroom</h6>
              <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer">
                {SITE.address}
              </a>
            </div>
          </div>
          <div className="footer-contact-item">
            <span className="ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z"/></svg>
            </span>
            <div>
              <h6>Phone</h6>
              <a href={`tel:${SITE.whatsappNumber}`}>{SITE.phoneDisplay}</a>
            </div>
          </div>
          <div className="footer-contact-item">
            <span className="ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.77.46 3.45 1.35 4.95L2 22l5.29-1.39a9.86 9.86 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2z"/></svg>
            </span>
            <div>
              <h6>WhatsApp</h6>
              <a
                href={waLink("Hi WoodLand! I'd like to ask about your doors.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat with us
              </a>
            </div>
          </div>
          <div className="footer-contact-item">
            <span className="ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            </span>
            <div>
              <h6>Email</h6>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </div>
          <div className="footer-contact-item">
            <span className="ico">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
            </span>
            <div>
              <h6>Hours</h6>
              <span>{SITE.hours}</span>
            </div>
          </div>
        </div>

        <div className="footer-inner">
          <div>
            <div className="footer-logo">
              Wood<em>Land</em>
            </div>
            <p
              style={{
                color: "var(--ivory-dim)",
                maxWidth: "300px",
                lineHeight: 1.8,
              }}
            >
              Water-resistant, termite-proof PET, PPH &amp; CCP doors plus
              complete lock solutions for modern Pakistani homes and
              businesses.
            </p>
          </div>
          <div className="footer-col">
            <h5>Catalogue</h5>
            <a href="/collections">PET Doors</a>
            <a href="/collections">PPH Doors</a>
            <a href="/collections">CCP Doors</a>
            <a href="/door-locks">Door Locks</a>
          </div>
          <div className="footer-col">
            <h5>Information</h5>
            <a href="/our-story">About WoodLand</a>
            <a href="/gallery">Gallery</a>
            {showShowroomLink && <a href="/contact">Showroom</a>}
            <a href="/contact">Contact</a>
          </div>
          <div className="footer-col">
            <h5>Connect</h5>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="/contact">Email Us</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 WOODLAND DOORS</span>
          <span>MADE FOR PAKISTAN</span>
        </div>
      </div>
    </footer>
  );
}
