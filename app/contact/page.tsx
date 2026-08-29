import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { SITE, waLink } from "@/lib/site";
import "./contact.css";

export const metadata = {
  title: "Contact | WoodLand",
};

export default function ContactPage() {
  return (
    <>
      <Loader />

      <Nav active={"contact" as any} />

      <section className="page-hero" style={{ minHeight: "50vh" }}>
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1800"
            alt="WoodLand showroom"
          />
        </div>
        <div className="container">
          <span className="eyebrow">Let&apos;s Talk</span>
          <h1 className="serif">Get a Quote.</h1>
          <p className="kicker">
            Tell us the opening size, material preference, and whether you
            need locks fitted too we&apos;ll follow up within one business
            day.
          </p>
          <a
            href={waLink(
              "Hi WoodLand! I'd like a quote.\n\n1. Door size:\n2. Quantity:\n3. Preferred design:\n4. City:"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
            style={{ marginTop: "30px" }}
          >
            <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
              <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.25.62 4.44 1.8 6.36L3.5 29l7.8-2.24a11.98 11.98 0 0 0 4.72.96h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-4.63 1.33 1.36-4.51-.24-.37a9.86 9.86 0 0 1-1.53-5.24C5.56 9.5 10.28 4.8 16.02 4.8c5.74 0 10.44 4.7 10.44 10.44 0 5.75-4.7 10.44-10.44 10.44v.02z" />
            </svg>
            Get a Quote on WhatsApp
          </a>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "40px" }}>
        <div className="container">
          <div className="contact-layout">
            <div data-reveal>
              <div className="info-block">
                <h5>Showroom</h5>
                <p>{SITE.address}</p>
              </div>
              <div className="info-block">
                <h5>Reach Us</h5>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                <a href={`tel:${SITE.whatsappNumber}`}>{SITE.phoneDisplay}</a>
                <a href={waLink("Hi WoodLand! I'd like to ask about your doors.")} target="_blank" rel="noopener noreferrer">
                  WhatsApp us
                </a>
              </div>
              <div className="info-block">
                <h5>Hours</h5>
                <p>
                  {SITE.hours}
                  <br />
                  Site visits available on request
                </p>
              </div>
              <div className="info-block">
                <h5>Follow</h5>
                <a href="https://www.instagram.com/wood_land_doors/">Instagram</a>
                <a href="#">LinkedIn</a>
                    <a href="https://www.facebook.com/profile.php?id=61592541773902">Facebook</a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="showroom-strip">
        <img
          src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=1800"
          alt="Showroom interior"
        />
        <div className="showroom-caption" data-reveal>
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Visit
          </span>
          <h2 className="serif" style={{ fontSize: "44px" }}>
            See the finish in person.
          </h2>
        </div>
      </section>

      <Footer />
    </>
  );
}
