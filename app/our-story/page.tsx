import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import { SITE, waLink } from "@/lib/site";

import "./our-story.css";

export const metadata = {
  title: "About WoodLand | Doors Redefined",
};

const IconQuote = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.5 7C6.5 7 4 9.7 4 13c0 2.8 2 4.5 4 4.5.4 2-1 3.3-3 3.5v2c3.8-.2 6.5-2.5 6.5-6.5V13c0-3.3-.5-6-2-6zm10 0c-3 0-5.5 2.7-5.5 6 0 2.8 2 4.5 4 4.5.4 2-1 3.3-3 3.5v2c3.8-.2 6.5-2.5 6.5-6.5V13c0-3.3-.5-6-2-6z" />
  </svg>
);

const IconWhatsApp = () => (
  <svg viewBox="0 0 32 32" fill="currentColor">
    <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.25.62 4.44 1.8 6.36L3.5 29l7.8-2.24a11.98 11.98 0 0 0 4.72.96h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-4.63 1.33 1.36-4.51-.24-.37a9.86 9.86 0 0 1-1.53-5.24C5.56 9.5 10.28 4.8 16.02 4.8c5.74 0 10.44 4.7 10.44 10.44 0 5.75-4.7 10.44-10.44 10.44v.02z" />
  </svg>
);

const materials = [
  { name: "PET", title: "Sealed for wet areas", text: "Ideal for bathrooms, kitchens and utility spaces." },
  { name: "PPH", title: "Rigid & lightweight", text: "Panels designed to resist warping and swelling." },
  { name: "CCP", title: "Premium natural finish", text: "A refined finish with the depth and texture of wood." },
];

const principles = [
  { number: "01", title: "Durability", text: "No polish, no paint, no annual touch-ups. Every WoodLand door is finished to stay finished — water resistant, scratch resistant and termite proof." },
  { number: "02", title: "Consistency", text: "Engineered panels don't have the natural variance of timber. What you approve in the showroom is what arrives on-site." },
  { number: "03", title: "Completion", text: "From the panel to the lock, we supply and fit the hardware that completes the door — handles, hinges, mortise sets and smart locks." },
];

const companyDetails = [
  ["Ownership / Management", "[Add: owner / management team name(s)]"],
  ["Based In", "Rawalpindi, Punjab, Pakistan"],
  ["Manufacturing Location", "[Add: where doors are manufactured]"],
  ["Years in Business", "[Add: year established]"],
  ["Materials Used", "Engineered PET, PPH & CCP panels"],
  ["Showroom", SITE.address],
  ["Warranty", "[Add: warranty period & terms]"],
  ["Phone / WhatsApp", SITE.phoneDisplay],
  ["Email", SITE.email],
];

export default function OurStoryPage() {
  return (
    <>
      <Loader />
      <Nav active="about" />

      {/* HERO — unchanged */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="5.jpeg" alt="WoodLand doors" />
        </div>

        <div className="container">
          <span className="eyebrow">About WoodLand</span>

          <h1 className="serif">
            A door is the first
            <br />
            impression of a space.
          </h1>

          <p className="kicker">
            Timeless design, reliable quality, and lasting durability
            engineered for modern living.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="story-section">
        <div className="container story-inner" data-reveal>
          <span className="eyebrow">Our Story</span>

          <h2 className="serif">
            Doors that don't just connect spaces they define them.
          </h2>

          <p>
            At WoodLand, we believe a door is more than just an entrance. It
            is the first impression of a space. That is why we create doors
            that combine timeless design, reliable quality and lasting
            durability.
          </p>

          <p>
            Instead of relying on solid timber which can swell, crack and
            require repainting WoodLand doors are built from engineered
            PET, PPH or CCP panels. The result is a door designed for
            Pakistan&apos;s heat, humidity and monsoon seasons, without ever
            losing its refined appearance.
          </p>

          <p>
            From contemporary interiors to elegant commercial spaces, our
            doors are designed to become part of the architecture not
            simply an object placed within it.
          </p>
        </div>
      </section>

      {/* MATERIALS — plain list, no cards */}
      <section className="materials-section">
        <div className="container">
          <div className="materials-heading" data-reveal>
            <span className="eyebrow">Our Materials</span>
          </div>

          <div className="materials-plain" data-reveal>
            {materials.map((material) => (
              <div className="material-row" key={material.name}>
                <span className="material-name">{material.name}</span>
                <div>
                  <h3>{material.title}</h3>
                  <p>{material.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES — plain list, no cards */}
      <section className="principles-section">
        <div className="container">
          <div className="principles-heading" data-reveal>
            <span className="eyebrow">What We Hold To</span>
            <h2 className="serif">Three simple principles.</h2>
          </div>

          <div className="principles-plain">
            {principles.map((item) => (
              <div className="principle-row" key={item.number} data-reveal>
                <span className="principle-number">{item.number}</span>
                <div>
                  <h3 className="serif">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO / FOUNDER */}
      <section className="ceo-section">
        <div className="container ceo-inner" data-reveal>
          <span className="eyebrow">From the Founder</span>

          <div className="ceo-quote">
            <IconQuote />
            <p className="serif" style={{fontSize:"15px"}}>
             As the CEO of Woodland Door, it is my pleasure to welcome you to a world where craftsmanship, design, and timeless elegance come together. At Woodland Door, we believe that a door is more than just an entryway it is the first expression of a space, setting the tone for everything beyond it.

Our journey began with a passion for creating beautifully crafted doors that combine exceptional quality, thoughtful design, and lasting durability. Every door we create reflects our dedication to precision, craftsmanship, and attention to detail, ensuring that each piece adds character and distinction to its surroundings.

At Woodland Door, our mission is to help you transform your spaces with doors that feel as exceptional as the environments they become part of. From refined contemporary styles to timeless designs, we strive to create pieces that complement your vision while standing the test of time.

Join us on our journey as we continue to redefine entrances, elevate interiors, and bring exceptional craftsmanship to every space one door at a time.
            </p>
          </div>

          <div className="ceo-person">
            <span className="placeholder">Mian Laeeq</span>
            <span className="ceo-role">Founder &amp; CEO, WoodLand</span>
          </div>
        </div>
      </section>

      {/* COMPANY DETAILS */}
      <section className="company-section">
        <div className="container">
          <div className="company-heading" data-reveal>
            <span className="eyebrow">The Company</span>
            <h2 className="serif">WoodLand, in detail.</h2>
            <p>The practical details customers want to know before they buy.</p>
          </div>

          <div className="company-list">
            {companyDetails.map(([label, value]) => (
              <div className="company-row" key={label}>
                <span>{label}</span>
                <p className={value.startsWith("[Add") ? "placeholder" : ""}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="company-bottom">
            <p>
              Items marked as placeholders need real information from you.
              Send them over and we&apos;ll add them directly.
            </p>
<a
            
              href={waLink("Hi WoodLand! I had a question about your company.")}
              target="_blank"
              rel="noopener noreferrer"
              className="about-whatsapp"
            >
              <IconWhatsApp />
              Ask Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}