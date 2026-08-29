import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import { waLink } from "@/lib/site";

import "./why-woodland.css";

export const metadata = {
  title: "Why WoodLand | Doors Redefined",
};

const IconWhatsApp = () => (
  <svg viewBox="0 0 32 32" fill="currentColor">
    <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.25.62 4.44 1.8 6.36L3.5 29l7.8-2.24a11.98 11.98 0 0 0 4.72.96h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-4.63 1.33 1.36-4.51-.24-.37a9.86 9.86 0 0 1-1.53-5.24C5.56 9.5 10.28 4.8 16.02 4.8c5.74 0 10.44 4.7 10.44 10.44 0 5.75-4.7 10.44-10.44 10.44v.02z" />
  </svg>
);

const comparisons = [
  {
    title: "Timber doors",
    text: "Natural wood swells, cracks and needs repainting within a few seasons especially in humid or monsoon-heavy conditions.",
    us: "Engineered PET, PPH and CCP panels are sealed to stay finished, with no repainting required.",
  },
  {
    title: "Off-the-shelf hardware",
    text: "Buying doors and hardware separately often means mismatched finishes and a second visit to fit them.",
    us: "Locks, handles and hinges are supplied and fitted by the same team, in a finish matched to your door.",
  },
  {
    title: "Factory-only manufacturers",
    text: "Many suppliers manufacture to a catalogue size and expect the site to adapt to the door.",
    us: "We measure your actual opening before manufacturing, so the door adapts to your site.",
  },
];

const reasons = [
  { num: "01", title: "Engineered, not grown", text: "PET, PPH and CCP panels are built to resist Pakistan's heat, humidity and monsoon seasons without the natural variance or maintenance timber demands." },
  { num: "02", title: "Consistent from showroom to site", text: "What you approve in the showroom is exactly what arrives and is installed no surprises in colour, texture or finish." },
  { num: "03", title: "One team, start to finish", text: "The same team that manufactures your door also fits the lock, handles and hinges nothing is outsourced." },
  { num: "04", title: "Built for how you actually live", text: "From wet-area bathrooms to high-traffic interiors, every material is chosen for the room it's going into, not a generic standard." },
];

export default function WhyWoodlandPage() {
  return (
    <>
      <Loader />
       <Nav active="why-woodland" />

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="6.jpeg" alt="WoodLand doors" />
        </div>

        <div className="container">
          <span className="eyebrow">Why WoodLand</span>
          <h1 className="serif">
            Not just a door
            <br />
            a decision that lasts.
          </h1>
          <p className="kicker">
            Here&apos;s what actually sets WoodLand apart, without the sales
            pitch.
          </p>
        </div>
      </section>

      {/* REASONS */}
      <section className="why-section">
        <div className="container">
          <div className="why-heading" data-reveal>
            <span className="eyebrow">The Short Version</span>
            <h2 className="serif">Four reasons customers choose us.</h2>
          </div>

          <div className="why-plain">
            {reasons.map((item) => (
              <div className="why-row" key={item.num} data-reveal>
                <span className="why-num">{item.num}</span>
                <div>
                  <h3 className="serif">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="why-section">
        <div className="container">
          <div className="why-heading" data-reveal>
            <span className="eyebrow">The Comparison</span>
            <h2 className="serif">How this stacks up against the usual choice.</h2>
          </div>

          <div className="compare-plain">
            {comparisons.map((item) => (
              <div className="compare-row" key={item.title} data-reveal>
                <div className="compare-col compare-them">
                  <span className="compare-label">{item.title}</span>
                  <p>{item.text}</p>
                </div>
                <div className="compare-col compare-us">
                  <span className="compare-label">WoodLand</span>
                  <p>{item.us}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="why-cta">
        <div className="container why-cta-inner">
          <div>
            <span className="eyebrow">See It Yourself</span>
            <h2 className="serif">Visit the showroom or ask us directly.</h2>
          </div>
     <a     
  href={waLink("...")}
  target="_blank"
  rel="noopener noreferrer"
  className="about-whatsapp"
>
  <span className="about-whatsapp-icon">
    <IconWhatsApp />
  </span>
  Ask Us on WhatsApp
</a>
        </div>
      </section>

      <Footer />
    </>
  );
}