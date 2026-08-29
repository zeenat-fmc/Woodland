import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import { waLink } from "@/lib/site";

import "./resources.css";

export const metadata = {
  title: "Resources | WoodLand Doors",
};

const IconWhatsApp = () => (
  <svg viewBox="0 0 32 32" fill="currentColor">
    <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.25.62 4.44 1.8 6.36L3.5 29l7.8-2.24a11.98 11.98 0 0 0 4.72.96h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-4.63 1.33 1.36-4.51-.24-.37a9.86 9.86 0 0 1-1.53-5.24C5.56 9.5 10.28 4.8 16.02 4.8c5.74 0 10.44 4.7 10.44 10.44 0 5.75-4.7 10.44-10.44 10.44v.02z" />
  </svg>
);

const IconDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 3v12" />
    <path d="M7 10l5 5 5-5" />
    <path d="M4 20h16" />
  </svg>
);

const buyingGuide = [
  {
    title: "Match the material to the room",
    text: "PET panels for bathrooms and kitchens, PPH for interior rooms that need a lighter, rigid door, CCP where you want the depth and texture of natural wood.",
  },
  {
    title: "Decide on finish before hardware",
    text: "Finish and colour set the tone of the space handles, hinges and locks should be chosen to match once the panel is confirmed.",
  },
  {
    title: "Measure the opening, not the old door",
    text: "Frame dimensions can shift over time. We take final site measurements before manufacturing to guarantee a precise fit.",
  },
  {
    title: "Plan hardware at the same time",
    text: "Ordering the door and its lock, handle and hinges together avoids delays and mismatched finishes later.",
  },
];

const care = [
  { do: true, text: "Wipe with a soft, dry or slightly damp cloth." },
  { do: true, text: "Close doors gently engineered panels don't need force." },
  { do: true, text: "Keep hinges lightly lubricated once every 6 months." },
  { do: false, text: "Don't use abrasive cleaners or scouring pads on the panel." },
  { do: false, text: "Don't expose doors to standing water for long periods." },
  { do: false, text: "Don't repaint — WoodLand finishes are sealed, not painted." },
];

const faqs = [
  {
    q: "How long does manufacturing and installation take?",
    a: "[Add: typical lead time from order to installation]",
  },
  {
    q: "Do your doors come with a warranty?",
    a: "[Add: warranty period and what it covers]",
  },
  {
    q: "Can I get a custom size or design?",
    a: "[Add: details on custom sizing / design options]",
  },
  {
    q: "Do you install locks and hardware as well?",
    a: "Yes — our team supplies and fits handles, hinges, mortise sets and smart locks as part of every installation. See our Door Lock Services for details.",
  },
];

const downloads = [
  { label: "Product Brochure (PDF)", href: "#" },
  { label: "Care & Maintenance Guide (PDF)", href: "#" },
  { label: "Warranty Terms (PDF)", href: "#" },
];

export default function ResourcesPage() {
  return (
    <>
      <Loader />
       <Nav active="resources" />

      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="5.jpeg" alt="WoodLand doors" />
        </div>

        <div className="container">
          <span className="eyebrow">Resources</span>
          <h1 className="serif">
            Everything you need
            <br />
            before you choose a door.
          </h1>
          <p className="kicker">
            Guides, care instructions and answers to the questions we hear
            most often.
          </p>
        </div>
      </section>

      {/* BUYING GUIDE */}
      <section className="resources-section">
        <div className="container">
          <div className="resources-heading" data-reveal>
            <span className="eyebrow">Before You Buy</span>
            <h2 className="serif">A short guide to choosing right.</h2>
          </div>

          <div className="resources-plain">
            {buyingGuide.map((item, i) => (
              <div className="resource-row" key={item.title} data-reveal>
                <span className="resource-index">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARE & MAINTENANCE */}
      <section className="resources-section">
        <div className="container">
          <div className="resources-heading" data-reveal>
            <span className="eyebrow">Care &amp; Maintenance</span>
            <h2 className="serif">Keeping your doors at their best.</h2>
          </div>

          <div className="care-grid" data-reveal>
            <div className="care-col">
              <span className="care-label do">Do</span>
              {care
                .filter((c) => c.do)
                .map((c) => (
                  <p key={c.text}>{c.text}</p>
                ))}
            </div>
            <div className="care-col">
              <span className="care-label dont">Don&apos;t</span>
              {care
                .filter((c) => !c.do)
                .map((c) => (
                  <p key={c.text}>{c.text}</p>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="resources-section">
        <div className="container">
          <div className="resources-heading" data-reveal>
            <span className="eyebrow">FAQs</span>
            <h2 className="serif">Questions we hear often.</h2>
          </div>

          <div className="faq-plain">
            {faqs.map((item) => (
              <div className="faq-row" key={item.q} data-reveal>
                <h3>{item.q}</h3>
                <p className={item.a.startsWith("[Add") ? "placeholder" : ""}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOADS */}
      <section className="resources-section">
        <div className="container">
          <div className="resources-heading" data-reveal>
            <span className="eyebrow">Downloads</span>
            <h2 className="serif">Take it with you.</h2>
          </div>

          <div className="downloads-plain">
            {downloads.map((d) => (
              <a href={d.href} className="download-row" key={d.label}>
                <span>{d.label}</span>
                <IconDownload />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="resources-cta">
        <div className="container resources-cta-inner">
          <p>Still have a question we haven&apos;t answered?</p>
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