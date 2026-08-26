"use client";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import { products } from "@/lib/products";
import { waLink } from "@/lib/site";
import "./home.css";
import { useEffect, useState, FormEvent, useRef } from "react";

/* Small inline icons (kept lightweight- no icon package) */
const IconDrop = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2s7 8.5 7 13a7 7 0 1 1-14 0c0-4.5 7-13 7-13z"/></svg>
);
const IconBug = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="13" r="5"/><path d="M12 8V5M9 5l-2-2M15 5l2-2M7 13H3M21 13h-4M8 17l-2 2M16 17l2 2M9 8l-1.5-1.5M15 8l1.5-1.5"/></svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
);
const IconSparkle = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/></svg>
);
const IconBadge = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="9" r="6"/><path d="M9 14.5 7 22l5-3 5 3-2-7.5"/></svg>
);
const IconTag = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M20.6 12.3 12.3 20.6a1.5 1.5 0 0 1-2.1 0l-7-7a1.5 1.5 0 0 1 0-2.1L11.5 3.2A2 2 0 0 1 13 2.6l6 .4a1.5 1.5 0 0 1 1.4 1.4l.4 6a2 2 0 0 1-.2 1.9z"/><circle cx="15.5" cy="8.5" r="1.2"/></svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>
);
const IconWarp = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 6c4 0 4 4 8 4s4-4 8-4M4 12c4 0 4 4 8 4s4-4 8-4M4 18c4 0 4 4 8 4s4-4 8-4"/></svg>
);
const IconTool = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4L21 6l-3-3-3.3 3.3z"/></svg>
);
const IconPalette = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3a9 9 0 1 0 0 18c1 0 2-.8 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-1 .8-1.5 1.8-1.5H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="10.5" r="1"/><circle cx="10.5" cy="7.5" r="1"/><circle cx="15" cy="8" r="1"/></svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M20 6 9 17l-5-5"/></svg>
);
const IconRuler = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><rect x="3" y="8" width="18" height="8" rx="1.5"/><path d="M7 8v3M11 8v4M15 8v3M19 8v4"/></svg>
);
const IconLayout = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M4 8V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3M4 8h16M4 8v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V8"/></svg>
);
const IconTruck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><rect x="1" y="7" width="13" height="10" rx="1"/><path d="M14 10h4l3 3v4h-7z"/><circle cx="6" cy="19" r="1.6"/><circle cx="17" cy="19" r="1.6"/></svg>
);
const IconInstall = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M4 4h11v16H4zM15 8h5l0 12h-5"/><circle cx="9.5" cy="12" r="1"/></svg>
);
const IconSupport = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M4 13a8 8 0 0 1 16 0"/><rect x="2.5" y="13" width="4" height="6" rx="1.2"/><rect x="17.5" y="13" width="4" height="6" rx="1.2"/><path d="M20 19a4 4 0 0 1-4 4h-2"/></svg>
);
const IconWallet = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><rect x="2.5" y="6" width="19" height="13" rx="2"/><path d="M2.5 10h19"/><circle cx="17.5" cy="14.5" r="1.2"/></svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);
const IconWhatsApp = () => (
  <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
    <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.25.62 4.44 1.8 6.36L3.5 29l7.8-2.24a11.98 11.98 0 0 0 4.72.96h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-4.63 1.33 1.36-4.51-.24-.37a9.86 9.86 0 0 1-1.53-5.24C5.56 9.5 10.28 4.8 16.02 4.8c5.74 0 10.44 4.7 10.44 10.44 0 5.75-4.7 10.44-10.44 10.44v.02z" />
  </svg>
);


const featureBadges = [
  { icon: <IconDrop />, label: "Water Resistant" },
  { icon: <IconBug />, label: "Termite Resistant" },
  { icon: <IconClock />, label: "Low Maintenance" },
  { icon: <IconSparkle />, label: "Stylish Designs" },
];

const whyStrip = [
  { icon: <IconDrop />, title: "Water Resistant", sub: "100% engineered for wet conditions" },
  { icon: <IconBug />, title: "Termite Resistant", sub: "Built to protect against termites" },
  { icon: <IconShield />, title: "Scratch Resistant", sub: "Durable surface for everyday use" },
  { icon: <IconWarp />, title: "Won't Warp", sub: "Stable in all weather conditions" },
  { icon: <IconTool />, title: "Low Maintenance", sub: "Easy to clean & long lasting" },
  { icon: <IconPalette />, title: "Modern Designs", sub: "Stylish finishes for every interior" },
];

const trustIcons = [
  { icon: <IconLayout />, title: "Free Consultation", sub: "Get expert advice" },
  { icon: <IconTruck />, title: "On-time Delivery", sub: "Reliable & secure" },
  { icon: <IconInstall />, title: "Professional Installation", sub: "Trained installation team" },
  { icon: <IconSupport />, title: "After Sales Support", sub: "We are here to help" },
  { icon: <IconWallet />, title: "Secure Payments", sub: "Multiple payment options" },
];

const realSpaces = [
  { image: "/1.jpeg", room: "Bathroom", material: "PET Door" },
  { image: "/2.jpeg", room: "Bedroom", material: "PPH Door" },
  { image: "/3.jpeg", room: "Living Room", material: "CCP Door" },
  { image: "/4.jpeg", room: "Office", material: "PPH Door" },
  { image: "/6.jpeg", room: "Villa Project", material: "CCP Door" },
  { image: "/9.jpeg", room: "Apartment", material: "PET Door" },
];
export default function HomePage() {
  const realSpacesRef = useRef<HTMLDivElement>(null);
  const realSpacesTrackRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  const section = realSpacesRef.current;
  const track = realSpacesTrackRef.current;
  if (!section || !track) return;

  let ticking = false;

  const update = () => {
    const rect = section.getBoundingClientRect();
    const scrollableDistance = section.offsetHeight - window.innerHeight;
    if (scrollableDistance <= 0) { ticking = false; return; }

    let progressPx = -rect.top;
    progressPx = Math.max(0, Math.min(scrollableDistance, progressPx));
    const progress = progressPx / scrollableDistance;

    const maxTrackScroll = track.scrollWidth - (track.parentElement?.offsetWidth ?? window.innerWidth);
    track.style.transform = `translateX(${-progress * maxTrackScroll}px)`;

    const indicator = section.querySelector<HTMLElement>(".real-spaces-scroll-indicator span");
    if (indicator) {
      const trackWidth = 300; // matches .real-spaces-scroll-indicator width in CSS
      const thumbWidth = 55;
      indicator.style.transform = `translateX(${progress * (trackWidth - thumbWidth)}px)`;
    }

    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
  };
}, []);
  const doorTypes = [
    {
      key: "pet",
      tag: "PET Doors",
      title: "Best for Wet Areas",
      desc: "100% water resistant. Perfect for bathrooms, kitchens & moist areas.100% water resistant. Perfect for bathrooms, kitchens & moist areas.",
      sample: products.find((p) => p.category === "pet"),
    },
    {
      key: "pph",
      tag: "PPH Doors",
      title: "Best for Everyday Use",
      desc: "Durable, scratch resistant and ideal for all interior applications.Durable, scratch resistant and ideal for all interior applications.",
      sample: products.find((p) => p.category === "pph"),
    },
    {
      key: "ccp",
      tag: "CCP Doors",
      title: "Best for Premium Spaces",
      desc: "Luxury finish with excellent strength and long lasting performance.Luxury finish with excellent strength and long lasting performance.",
      sample: products.find((p) => p.category === "ccp"),
    },
  ];

  const heroImages = ["/home1.png", "/home2.png", "/home3.png", "/home4.png","heropage.png",  "/5.jpeg"];
  const [heroIndex, setHeroIndex] = useState(0);

// speed: 3500 → 2200 (zyada tez switch)
useEffect(() => {
  const interval = setInterval(() => {
    setHeroIndex((prev) => (prev + 1) % heroImages.length);
  }, 2200);
  return () => clearInterval(interval);
}, []);

  // ---- "Get Your Door Quote" mini form (bottom 3-column section) ----
  const [qName, setQName] = useState("");
  const [qPhone, setQPhone] = useState("");
  const [qCity, setQCity] = useState("");
  const [qSize, setQSize] = useState("Standard (900×2100mm)");
  const [qType, setQType] = useState("PET Door");

  function handleQuoteSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = [
      "Hi WoodLand! I'd like a door quote.",
      "",
      `Name: ${qName || "-"}`,
      `Phone: ${qPhone || "-"}`,
      `City: ${qCity || "-"}`,
      `Door Size: ${qSize}`,
      `Preferred Door Type: ${qType}`,
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <ScrollAnimations />
      <Loader />
      <Nav active="home" />

      {/*  HERO*/}
      <section className="hero" id="home">
        <div className="hero-left" style={{marginTop:"190px"}}>
          {/* <span className="hero-eyebrow" id="heroEyebrow" style={{fontWeight:400, fontSize:"16px"}}>
            PET, PPH, CCP
          </span> */}
          <span className="hero-eyebrow" id="heroEyebrow" style={{fontSize:"22px"}}>
           <em> Doors, Redefined</em>
          </span>

          <h1 className="hero-title serif" id="heroTitle">
            Engineered Doors
            <br />
            Made for <span className="accent-green">Pakistan</span>
          </h1>

          <div className="hero-badges" data-reveal>
            {featureBadges.map((b) => (
              <span className="hero-badge" key={b.label}>
                {b.icon}
                {b.label}
              </span>
            ))}
          </div>

          <p className="hero-sub" id="heroSub">
            WoodLand doors are engineered with advanced materials to deliver
            beauty, durability and peace of mind.
          </p>

          <div className="hero-row" id="heroRow">
            <div className="hero-cta">
              <a href="/collections">Explore Our Doors →</a>
            </div>
            <div className="hero-cta hero-cta-outline">
              <a
                href={waLink("Hi WoodLand! I'd like a quote for a door.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp /> Get a Quote on WhatsApp
              </a>
            </div>
          </div>

          <div className="hero-trust-lines" id="heroNum">
            <div className="hero-trust-line">
              <IconBadge />
              <span>New Brand. Trusted Quality.</span>
            </div>
            <div className="hero-trust-line">
              <IconTag />
              <span>Introductory Prices for Our First Customers!</span>
            </div>
          </div>
        </div>

        <div className="hero-right" style={{ position: "relative", overflow: "hidden" }}>
        <div
  className="door-backdrop"
  style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden", borderRadius: "2px" }}
  // ⬆ minHeight:"560px" hata diya — yehi extra height ki wajah thi
>
  {heroImages.map((image, index) => (
    <img
      key={image}
      src={image}
      alt={`WoodLand engineered door ${index + 1}`}
      style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", objectPosition: "center",
        opacity: heroIndex === index ? 1 : 0,
        transform: heroIndex === index ? "scale(1)" : "scale(1.04)",
        transition: "opacity .8s ease-in-out, transform 2.2s ease-in-out", // tez transition
        zIndex: heroIndex === index ? 2 : 1,
      }}
    />
  ))}


            <div className="hero-carousel-dots">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setHeroIndex(index)}
                  aria-label={`Show door image ${index + 1}`}
                  className={heroIndex === index ? "active" : ""}
                />
              ))}
            </div>
          </div>

          {/* Floating quick-action sidebar */}
          {/* <div className="hero-quick-actions">
            <a
              href={waLink("Hi WoodLand! I'd like to ask about your doors.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-quick-action wa"
            >
              <IconWhatsApp />
              <span>WhatsApp</span>
            </a>
            <a href="tel:+923001234567" className="hero-quick-action">
              <IconPhone />
              <span>Call Us</span>
            </a>
            <a href="#estimate" className="hero-quick-action">
              <IconRuler />
              <span>Get a Quote</span>
            </a>
          </div> */}
        </div>
      </section>

{/* Floating Contact Actions */}
<div className="hero-quick-actions">
  <a
    href={waLink("Hi WoodLand! I'd like to ask about your doors.")}
    target="_blank"
    rel="noopener noreferrer"
    className="hero-quick-action wa"
  >
    <IconWhatsApp />
    <span>WhatsApp</span>
  </a>

  <a
    href="tel:+923001234567"
    className="hero-quick-action"
  >
    <IconPhone />
    <span>Call Us</span>
  </a>

  <a
    href="#estimate"
    className="hero-quick-action"
  >
    <IconRuler />
    <span>Get a Quote</span>
  </a>
</div>

{/* CHOOSE THE PERFECT DOOR */}
  <section className="section door-collection-section">
        <div className="container">
          <div className="door-collection-head" data-reveal>
            <div>
              <span className="eyebrow">Our Door Collection</span>
              <h2 className="serif">Choose the Perfect Door for Your Space</h2>
            </div>
            <div className="door-collection-head-right">
              <p>Different materials. Designed for different needs. Find the door that suits your lifestyle.</p>
              <a href="/collections" className="btn-outline">
                View All Doors →
              </a>
            </div>
          </div>

          <div className="door-type-grid stagger-grid">
            {doorTypes.map((d) => (
              <div className="door-type-card" key={d.key}>
                <div className="door-type-card-body">
                  <span className={`door-type-tag tag-${d.key}`}>{d.tag.toUpperCase()}</span>
                  <h3 className="serif">{d.title}</h3>
                  <p>{d.desc}</p>
                  <a href="/collections" className="door-type-link">
                    View Collection <span>→</span>
                  </a>
                </div>
                <div className="door-type-card-image img-reveal">
                  <img src={d.sample?.image ?? "/hero.png"} alt={d.tag} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE WOODLAND — icon strip*/}
      <section className="why-strip-section">
        <div className="container">
          <h2 className="why-strip-heading">Why Choose WoodLand?</h2>
          <div className="why-strip-grid stagger-grid">
            {whyStrip.map((w) => (
              <div className="why-strip-item" key={w.title}>
                <div className="why-strip-icon">{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REAL SPACES */}
      {/* <section className="section real-spaces-section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "44px" }} data-reveal>
            <h2 className="serif" style={{ fontSize: "clamp(28px,3.4vw,40px)" }}>
              See WoodLand Doors in Real Spaces
            </h2>
          </div>
          <div className="real-spaces-grid stagger-grid">
            {realSpaces.map((s) => (
              <div className="real-space-card img-reveal" key={s.room}>
                <img src={s.image} alt={`${s.room} — ${s.material}`} />
                <div className="real-space-caption">
                  <strong>{s.room}</strong>
                  <span>{s.material}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
{/* REAL SPACES — SCROLL CONTROLLED CAROUSEL */}

{/* <section className="real-spaces-section" id="real-spaces">

  <div className="real-spaces-sticky">

    <div className="real-spaces-heading">
      <span className="eyebrow">WoodLand in Real Spaces</span>

      <h2 className="serif">
        See WoodLand Doors in Real Spaces
      </h2>
    </div>

    <div className="real-spaces-track-wrapper">
<div className="real-spaces-carousel">
  <div className="real-spaces-grid">
    {realSpaces.map((s) => (
      <div className="real-space-card" key={s.room}>
        <img src={s.image} alt={`${s.room} — ${s.material}`} />

        <div className="real-space-caption">
          <strong>{s.room}</strong>
          <span>{s.material}</span>
        </div>
      </div>
    ))}
  </div>
</div>
      
    </div>

    <div className="real-spaces-progress">
      <div
        className="real-spaces-progress-bar"
        id="realSpacesProgress"
      />
    </div>

  </div>

</section> */}
<section
  className="real-spaces-section"
  ref={realSpacesRef}
>
  <div className="real-spaces-sticky">

    <div className="container">

      <div
        className="real-spaces-heading"
        data-reveal
      >
        <h2 className="serif">
          See WoodLand Doors in Real Spaces
        </h2>

        <p>
          Explore how WoodLand doors look across different
          rooms, interiors and spaces.
        </p>
      </div>

    </div>

    <div
      className="real-spaces-track"
      ref={realSpacesTrackRef}
    >
      {realSpaces.map((s) => (
        <div
          className="real-space-card"
          key={s.room}
        >
          <div className="real-space-image">
            <img
              src={s.image}
              alt={`${s.room} — ${s.material}`}
            />
          </div>

          <div className="real-space-caption">
            <strong>{s.room}</strong>
            <span>{s.material}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="real-spaces-scroll-indicator">
      <span></span>
    </div>

  </div>
</section>
      {/* GREEN PROMO BANNER */}
      <section className="promo-banner" data-reveal>
        <div className="container promo-banner-inner">
          <div className="promo-banner-text">
            <h3 className="serif">Be Among Our First WoodLand Customers!</h3>
            <p>Explore our new collection and get introductory pricing. Send us your door size and get your quote today.</p>
          </div>

          <div className="promo-steps">
            <div className="promo-step">
              <span className="promo-step-icon"><IconRuler /></span>
              <span className="promo-step-num">1</span>
              <p>Send Door Size (Height × Width)</p>
            </div>
            <div className="promo-step">
              <span className="promo-step-icon"><IconPalette /></span>
              <span className="promo-step-num">2</span>
              <p>Choose Design &amp; Material</p>
            </div>
            <div className="promo-step">
              <span className="promo-step-icon"><IconWhatsApp /></span>
              <span className="promo-step-num">3</span>
              <p>Get Your Quote on WhatsApp</p>
            </div>
          </div>

          <a
            href={waLink("Hi WoodLand! I'd like to get a free introductory quote.")}
            target="_blank"
            rel="noopener noreferrer"
            className="promo-banner-cta"
          >
            <IconWhatsApp /> Get a Free Quote on WhatsApp
          </a>
        </div>
      </section>

      {/* ABOUT / COMMITMENT / QUOTE — 3 columns*/}
      <section className="section info-columns-section" id="estimate">
        <div className="container info-columns">
          {/* About */}
          <div className="info-col about-col" data-reveal>
            <div className="about-col-text">
              <span className="eyebrow">About WoodLand</span>
              <p>
                WoodLand is a new generation door brand bringing modern design,
                advanced materials and reliable quality to homes and commercial
                spaces across Pakistan.
              </p>
              <ul className="check-list">
                <li><IconCheck /> Designed for Pakistan&apos;s climate</li>
                <li><IconCheck /> Quality materials &amp; consistent finish</li>
                <li><IconCheck /> Professional installation support</li>
                <li><IconCheck /> Warranty-backed doors</li>
              </ul>
              <a href="/our-story" className="hero-link">
                Learn More About Us <span>→</span>
              </a>
            </div>
            <div className="about-col-image img-reveal">
              <img src="/2.jpeg" alt="WoodLand door in a home" />
            </div>
          </div>

          {/* Commitment */}
          <div className="info-col commitment-col" data-reveal>
            <span className="eyebrow">Our Commitment</span>
            <div className="commitment-row">
              <ul className="check-list">
                <li><IconCheck /> Quality-focused materials</li>
                <li><IconCheck /> Clear &amp; transparent quotations</li>
                <li><IconCheck /> Professional installation</li>
                <li><IconCheck /> Responsive customer support</li>
                <li><IconCheck /> Warranty-backed products</li>
                <li><IconCheck /> Customer satisfaction first</li>
              </ul>
              <div className="warranty-badge">
                <IconShield />
                <span>Warranty<br />Assured</span>
              </div>
            </div>
          </div>

          {/* Quote form */}
          <div className="info-col quote-col" data-reveal>
            <span className="eyebrow">Get Your Door Quote</span>
            <p className="quote-col-sub">
              Send us a few details and we&apos;ll get back with the best estimate.
            </p>
            <form className="mini-quote-form" onSubmit={handleQuoteSubmit}>
              <div className="mini-quote-row">
                <input
                  type="text" placeholder="Your Name" value={qName}
                  onChange={(e) => setQName(e.target.value)} required
                />
                <input
                  type="text" placeholder="Phone / WhatsApp" value={qPhone}
                  onChange={(e) => setQPhone(e.target.value)} required
                />
              </div>
              <div className="mini-quote-row">
                <input
                  type="text" placeholder="City" value={qCity}
                  onChange={(e) => setQCity(e.target.value)}
                />
                <select value={qSize} onChange={(e) => setQSize(e.target.value)}>
                  <option>Standard (900×2100mm)</option>
                  <option>800×2000mm</option>
                  <option>Custom Size</option>
                </select>
              </div>
              <select value={qType} onChange={(e) => setQType(e.target.value)}>
                <option>PET Door</option>
                <option>PPH Door</option>
                <option>CCP Door</option>
                <option>Not sure yet</option>
              </select>
              <button type="submit" className="mini-quote-submit">
                <IconWhatsApp /> Send on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/*  TRUST ICONS STRIP*/}
      <section className="trust-icons-strip">
        <div className="container trust-icons-grid">
          {trustIcons.map((t) => (
            <div className="trust-icon-item" key={t.title}>
              <div className="trust-icon-glyph">{t.icon}</div>
              <div>
                <strong>{t.title}</strong>
                <span>{t.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}