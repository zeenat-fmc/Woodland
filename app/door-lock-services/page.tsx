import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import { waLink } from "@/lib/site";

import "./door-lock-services.css";

export const metadata = {
  title: "Door Lock Services | WoodLand Doors",
};

const IconWhatsApp = () => (
  <svg viewBox="0 0 32 32" fill="currentColor">
    <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.25.62 4.44 1.8 6.36L3.5 29l7.8-2.24a11.98 11.98 0 0 0 4.72.96h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-4.63 1.33 1.36-4.51-.24-.37a9.86 9.86 0 0 1-1.53-5.24C5.56 9.5 10.28 4.8 16.02 4.8c5.74 0 10.44 4.7 10.44 10.44 0 5.75-4.7 10.44-10.44 10.44v.02z" />
  </svg>
);

const lockTypes = [
  {
    name: "Mortise Locks",
    text: "The standard for interior and main doors — a secure, recessed lock body fitted directly into the door edge.",
  },
  {
    name: "Smart / Digital Locks",
    text: "Keypad, fingerprint and app-controlled locks fitted and configured by our technicians, matched to your door's finish.",
  },
  {
    name: "Handle Sets",
    text: "Lever and knob sets in finishes chosen to complement your door — supplied and fitted as one package with the lock.",
  },
  {
    name: "Hinges & Fittings",
    text: "Heavy-duty hinges and closing hardware sized correctly for the weight of engineered door panels.",
  },
];

const process = [
  { num: "01", title: "Consultation", text: "We discuss how the door is used day to day — main entrance, interior, wet area — to recommend the right lock type." },
  { num: "02", title: "Selection", text: "Choose from mortise, smart, or handle-only options in a finish that matches your door." },
  { num: "03", title: "Fitting", text: "Our own technicians install the lock and hardware on-site, so fit and alignment are guaranteed." },
  { num: "04", title: "Aftercare", text: "Locks are covered under the same warranty terms as the door, with support if anything needs adjustment." },
];

const reasons = [
  "Hardware fitted by the same team that manufactures your door — no third-party mismatch.",
  "Smart lock installation configured and tested before we leave site.",
  "Finishes matched to your door, not sold as a generic add-on.",
  "Warranty covers the lock and fitting, not just the door panel.",
];

export default function DoorLockServicesPage() {
  return (
    <>
      <Loader />
      <Nav  />

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="9.jpeg" alt="Door lock hardware" />
        </div>

        <div className="container">
          <span className="eyebrow">Door Lock Services</span>
          <h1 className="serif">
            Locks and hardware,
            <br />
            fitted right the first time.
          </h1>
          <p className="kicker">
            We don&apos;t just sell doors. We supply and fit the locks,
            handles and hinges that complete them.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="dls-section">
        <div className="container dls-intro" data-reveal>
          <p>
            A door is only as good as the hardware holding it together. That
            is why every WoodLand installation includes the option to fit
            locks, handles and hinges from the same visit, sized and
            finished for the specific door you&apos;ve chosen, not a generic
            fit.
          </p>
        </div>
      </section>

      {/* LOCK TYPES */}
      <section className="dls-section">
        <div className="container">
          <div className="dls-heading" data-reveal>
            <span className="eyebrow">What We Fit</span>
            <h2 className="serif">Hardware for every kind of door.</h2>
          </div>

          <div className="dls-plain">
            {lockTypes.map((lock) => (
              <div className="dls-row" key={lock.name} data-reveal>
                <span className="dls-name">{lock.name}</span>
                <p>{lock.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="dls-section">
        <div className="container">
          <div className="dls-heading" data-reveal>
            <span className="eyebrow">How It Works</span>
            <h2 className="serif">From consultation to installation.</h2>
          </div>

          <div className="dls-process">
            {process.map((step) => (
              <div className="dls-process-row" key={step.num} data-reveal>
                <span className="dls-process-num">{step.num}</span>
                <div>
                  <h3 className="serif">{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="dls-section">
        <div className="container">
          <div className="dls-heading" data-reveal>
            <span className="eyebrow">Why It Matters</span>
            <h2 className="serif">Fit once, fitted properly.</h2>
          </div>

          <div className="dls-reasons">
            {reasons.map((reason) => (
              <div className="dls-reason-row" key={reason} data-reveal>
                <span className="dls-dot" />
                <p>{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="dls-cta">
        <div className="container dls-cta-inner">
          <div>
            <span className="eyebrow">Get Started</span>
            <h2 className="serif">Tell us about your door.</h2>
          </div>
          <a
            href={waLink("Hi WoodLand! I'd like to ask about lock and hardware fitting for a door.")}
            target="_blank"
            rel="noopener noreferrer"
            className="about-whatsapp"
          >
            <IconWhatsApp />
            Ask Us on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}