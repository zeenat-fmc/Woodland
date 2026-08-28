"use client";
/* eslint-disable @next/next/no-img-element */

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";
import { products } from "@/lib/products";
import { waLink } from "@/lib/site";
import "./home.css";

const PHONE_DISPLAY = "+92 300 123 4567";
const PHONE_TEL = "+923001234567";

type SvgProps = { className?: string };

const S = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconDrop = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><path d="M12 2.5s6.5 8 6.5 12.2a6.5 6.5 0 1 1-13 0C5.5 10.5 12 2.5 12 2.5z" /></svg>
);
const IconBug = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><ellipse cx="12" cy="13.5" rx="4.5" ry="5.5" /><path d="M12 8V5.5M9.5 5 8 3.2M14.5 5 16 3.2M7.5 11.5H3.8M20.2 11.5H16.5M7.6 15.5 4.2 17M19.8 17l-3.4-1.5M12 8.2v10.6" /></svg>
);
const IconClock = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><circle cx="12" cy="12" r="8.6" /><path d="M12 7.2V12l3.4 2" /></svg>
);
const IconSparkle = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><path d="M12 3.2l1.75 5.05L18.8 10l-5.05 1.75L12 16.8l-1.75-5.05L5.2 10l5.05-1.75L12 3.2z" /><path d="M18.8 16.4l.6 1.7 1.7.6-1.7.6-.6 1.7-.6-1.7-1.7-.6 1.7-.6.6-1.7z" /></svg>
);
const IconBadge = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><circle cx="12" cy="9" r="5.6" /><path d="M8.9 13.9 7.2 21.2 12 18.5l4.8 2.7-1.7-7.3" /></svg>
);
const IconTag = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><path d="M20.5 12.2 12.2 20.5a1.5 1.5 0 0 1-2.1 0l-6.6-6.6a1.5 1.5 0 0 1 0-2.1L11.8 3.5a2 2 0 0 1 1.5-.6l5.5.4a1.5 1.5 0 0 1 1.4 1.4l.4 5.5a2 2 0 0 1-.6 1.5z" /><circle cx="15.4" cy="8.6" r="1.15" /></svg>
);
const IconShield = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><path d="M12 3.2l7 2.9v5.6c0 4.4-2.9 7.4-7 9-4.1-1.6-7-4.6-7-9V6.1l7-2.9z" /><path d="M9.2 12.1l2 2 3.7-3.9" /></svg>
);
const IconWarp = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><path d="M3.5 7c3.6 0 3.6 3.4 7.2 3.4S14.3 7 17.9 7M3.5 12.6c3.6 0 3.6 3.4 7.2 3.4s3.6-3.4 7.2-3.4M20.5 7v11" /></svg>
);
const IconTool = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><path d="M14.4 6.6a3.9 3.9 0 0 1-5.2 5.2L4.2 16.8 7.2 19.8l5-5a3.9 3.9 0 0 1 5.2-5.2l3.1-3.1-3-3-3.1 3.1z" /></svg>
);
const IconPalette = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><path d="M12 3.3a8.7 8.7 0 1 0 0 17.4c1 0 1.9-.8 1.9-1.9 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-1 .8-1.5 1.8-1.5h1.9a3.9 3.9 0 0 0 3.9-3.9c0-4.3-3.9-7.6-8.5-7.6z" /><circle cx="7.9" cy="10.7" r="1" /><circle cx="10.7" cy="7.9" r="1" /><circle cx="14.8" cy="8.3" r="1" /></svg>
);
const IconCheck = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><path d="M19.5 6.5 9.2 16.8 4.5 12.1" /></svg>
);
const IconRuler = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><rect x="3" y="8.4" width="18" height="7.2" rx="1.3" /><path d="M7.2 8.4v2.6M11 8.4v3.6M14.8 8.4v2.6M18.6 8.4v3.6" /></svg>
);
const IconLayout = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><rect x="3.6" y="4.2" width="16.8" height="15.6" rx="1.4" /><path d="M3.6 8.6h16.8M9 8.6v11.2" /></svg>
);
const IconTruck = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><path d="M1.8 6.8h11.6v9.4H1.8z" /><path d="M13.4 10.2h3.9l2.9 2.9v3.1h-6.8" /><circle cx="6.2" cy="18.4" r="1.7" /><circle cx="16.6" cy="18.4" r="1.7" /></svg>
);
const IconInstall = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><path d="M4.2 3.8h10.4v16.4H4.2z" /><path d="M14.6 8.2h5.2v12h-5.2" /><circle cx="11.2" cy="12" r="0.9" /></svg>
);
const IconSupport = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><path d="M4.4 13.4a7.6 7.6 0 0 1 15.2 0" /><rect x="2.6" y="13.2" width="3.6" height="5.8" rx="1.2" /><rect x="17.8" y="13.2" width="3.6" height="5.8" rx="1.2" /><path d="M19.6 19a3.4 3.4 0 0 1-3.4 3.4h-1.8" /></svg>
);
const IconWallet = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><rect x="2.8" y="6.2" width="18.4" height="12.4" rx="2" /><path d="M2.8 10.2h18.4" /><circle cx="17.4" cy="14.6" r="1.1" /></svg>
);
const IconPhone = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><path d="M21.4 16.9v2.8a1.9 1.9 0 0 1-2.1 1.9 18.9 18.9 0 0 1-8.2-2.9 18.6 18.6 0 0 1-5.7-5.7A18.9 18.9 0 0 1 2.5 4.7 1.9 1.9 0 0 1 4.4 2.6h2.8a1.9 1.9 0 0 1 1.9 1.6c.12.92.34 1.82.67 2.68a1.9 1.9 0 0 1-.43 2L8.2 10a15.3 15.3 0 0 0 5.7 5.7l1.16-1.13a1.9 1.9 0 0 1 2-.43c.86.33 1.76.55 2.68.67a1.9 1.9 0 0 1 1.66 1.99z" /></svg>
);
const IconArrow = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><path d="M4.5 12h15M13.2 5.8 19.5 12l-6.3 6.2" /></svg>
);
const IconChevron = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" {...S} {...p}><path d="M6.5 9.5 12 15l5.5-5.5" /></svg>
);
const IconWhatsApp = (p: SvgProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.347-.347.52-.52.174-.174.232-.297.347-.495.116-.198.058-.372-.03-.52-.087-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

/* ============================================================
   DATA  —  hoisted out of the component so it isn't rebuilt on
   every render and doesn't trip react-hooks/exhaustive-deps
   ============================================================ */

const HERO_IMAGES = ["/home1.png", "/home2.png", "/home3.png", "/home4.png", "/4.jpeg", "/5.jpeg"];
const HERO_INTERVAL = 4200; // was 2200ms — too fast to actually look at a door

const HERO_BADGES = [
  { icon: <IconDrop />, label: "Water Resistant" },
  { icon: <IconBug />, label: "Termite Resistant" },
  { icon: <IconClock />, label: "Low Maintenance" },
  { icon: <IconSparkle />, label: "Stylish Designs" },
];

/* Honest credibility facts only — no invented install counts or
   review numbers, because WoodLand is positioned as a new brand. */
const CRED_ITEMS = [
  { value: "3", unit: "", label: "Engineered materials", sub: "PET · PPH · CCP" },
  { value: "100", unit: "%", label: "Water-resistant PET core", sub: "Built for wet areas" },
  { value: "0", unit: "", label: "Termite risk", sub: "Non-organic construction" },
  { value: "Pakistan", unit: "", label: "Wide delivery", sub: "Supply & installation" },
];

const DOOR_TYPES = [
  {
    key: "pet",
    tag: "PET",
    index: "01",
    title: "Best for Wet Areas",
    desc: "A fully sealed, 100% water-resistant build. Made for bathrooms, kitchens and any room that never quite dries out.",
    points: ["Zero swelling in humidity", "Wipe-clean surface", "Sealed edge protection"],
    fallback: "/26p1-10-lb205.jpg",
  },
  {
    key: "pph",
    tag: "PPH",
    index: "02",
    title: "Best for Everyday Use",
    desc: "The workhorse. Scratch resistant, dimensionally stable and finished to sit comfortably in any interior scheme.",
    points: ["High-impact surface", "Won't warp or bow", "Widest design range"],
    fallback: "/2.jpeg",
  },
  {
    key: "ccp",
    tag: "CCP",
    index: "03",
    title: "Best for Premium Spaces",
    desc: "Our flagship. A deeper, richer finish with the structural strength that main entries and feature walls deserve.",
    points: ["Luxury grain finish", "Heaviest core build", "Signature statement look"],
    fallback: "/3.jpeg",
  },
];

const COMPARE_ROWS: { label: string; values: (string | boolean)[] }[] = [
  { label: "Best suited for", values: ["Bathrooms, kitchens", "Bedrooms, everyday rooms", "Entries, feature spaces"] },
  { label: "Water resistance", values: ["Excellent", "High", "High"] },
  { label: "Scratch resistance", values: ["High", "Excellent", "Excellent"] },
  { label: "Finish character", values: ["Smooth & clean", "Matte contemporary", "Deep luxury grain"] },
  { label: "Termite resistant", values: [true, true, true] },
  { label: "Warp resistant", values: [true, true, true] },
  { label: "Custom sizes", values: [true, true, true] },
  { label: "Price band", values: ["Entry", "Mid", "Premium"] },
];

const WHY_ITEMS = [
  { icon: <IconDrop />, title: "Water Resistant", sub: "Engineered for wet conditions" },
  { icon: <IconBug />, title: "Termite Resistant", sub: "Nothing for termites to feed on" },
  { icon: <IconShield />, title: "Scratch Resistant", sub: "Holds up to daily traffic" },
  { icon: <IconWarp />, title: "Won't Warp", sub: "Stable through heat and damp" },
  { icon: <IconTool />, title: "Low Maintenance", sub: "A cloth is the whole routine" },
  { icon: <IconPalette />, title: "Modern Designs", sub: "Finishes for every interior" },
];

const REAL_SPACES = [
  { image: "/washroom.png", room: "Bathroom", material: "PET Door" },
  { image: "/bedroom.png", room: "Bedroom", material: "PPH Door" },
  { image: "/living room.png", room: "Living Room", material: "CCP Door" },
  { image: "/office.png", room: "Office", material: "PPH Door" },
  { image: "/villa.png", room: "Villa Project", material: "CCP Door" },
  { image: "/apartment.png", room: "Apartment", material: "PET Door" },
];

const PROCESS_STEPS = [
  { icon: <IconRuler />, num: "1", title: "Send your size", copy: "Height × width, per opening." },
  { icon: <IconPalette />, num: "2", title: "Pick design & material", copy: "We'll recommend the right one." },
  { icon: <IconWhatsApp />, num: "3", title: "Get your quote", copy: "Itemised, on WhatsApp." },
];

const TRUST_ITEMS = [
  { icon: <IconLayout />, title: "Free Consultation", sub: "Expert advice, no obligation" },
  { icon: <IconTruck />, title: "On-time Delivery", sub: "Tracked and protected" },
  { icon: <IconInstall />, title: "Pro Installation", sub: "Trained fitting team" },
  { icon: <IconSupport />, title: "After Sales Support", sub: "We stay reachable" },
  { icon: <IconWallet />, title: "Secure Payments", sub: "Multiple safe options" },
];

const FAQS = [
  {
    q: "How do I measure my door correctly?",
    a: "Measure the finished opening, not the old door: height and width at three points each, then give us the smallest reading of the two. Also tell us the wall thickness and which side the hinges sit on. If you'd rather not guess, our team can measure on site.",
  },
  {
    q: "Which material should I choose for a bathroom?",
    a: "PET, every time. It's 100% water resistant, so constant steam and splashing won't cause it to swell, delaminate or warp the way an ordinary wooden or hollow-core door will.",
  },
  {
    q: "Can I get a custom size or finish?",
    a: "Yes. Standard sizes are quickest, but we manufacture to your opening. Share your measurements and the finish you have in mind and we'll confirm whether it's a standard run or a custom order before you commit.",
  },
  {
    q: "Do you handle installation?",
    a: "We do. Our trained fitting team handles frames, hinges and hardware so the door is hung, aligned and closing properly before we leave. You can also take supply-only if you already have a carpenter.",
  },
  {
    q: "What does the warranty cover?",
    a: "Every WoodLand door carries a written warranty against manufacturing defects, warping and delamination. The exact term is stated on your quotation, so you have it in writing before you order.",
  },
  {
    q: "How long will my order take?",
    a: "It depends on quantity, size and finish. Standard sizes move fastest; custom orders take longer. We commit to a dated timeline in writing with your quote rather than giving you a vague estimate up front.",
  },
];

const SIZE_OPTIONS = ["Standard (900 × 2100 mm)", "800 × 2000 mm", "750 × 1950 mm", "Custom size"];
const TYPE_OPTIONS = ["PET Door", "PPH Door", "CCP Door", "Not sure yet — please advise"];

/* ============================================================
   PAGE
   ============================================================ */

export default function HomePage() {
  /* ---------- Hero slideshow ---------- */
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);

  useEffect(() => {
    if (heroPaused) return;
    const id = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, HERO_INTERVAL);
    return () => window.clearInterval(id);
  }, [heroPaused]);

  /* ---------- Safety net for the reveal system ----------
     If ScrollAnimations ever fails to mount, sections would sit at
     opacity:0 forever. This force-reveals everything if nothing has
     been marked visible shortly after load. */
  useEffect(() => {
    const id = window.setTimeout(() => {
      if (!document.querySelector(".is-visible, .revealed")) {
        document.documentElement.classList.add("wl-reveal-all");
      }
    }, 1500);
    return () => window.clearTimeout(id);
  }, []);

  /* ---------- Scroll-driven horizontal gallery ---------- */
  const galleryRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const thumbRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const section = galleryRef.current;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!section || !track) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let distance = 0;
    let frame = 0;

    /* Measure: derive the section's scroll height from how far the
       track actually needs to travel, so the pace always feels 1:1
       instead of being locked to a hardcoded 260vh. */
    const measure = () => {
      const isDesktop = window.innerWidth >= 1024 && !reduced.matches;
      if (!isDesktop) {
        section.style.height = "";
        track.style.transform = "";
        distance = 0;
        return;
      }
      distance = Math.max(0, track.scrollWidth - window.innerWidth);
      section.style.height = `${window.innerHeight + distance}px`;
      apply();
    };

    const apply = () => {
      frame = 0;
      if (distance <= 0) return;
      const travelled = Math.min(Math.max(-section.getBoundingClientRect().top, 0), distance);
      const progress = travelled / distance;
      track.style.transform = `translate3d(${-travelled}px,0,0)`;
      if (thumb) thumb.style.transform = `scaleX(${Math.max(progress, 0.02)})`;
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(apply);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    reduced.addEventListener("change", measure);

    /* Images change scrollWidth as they decode — remeasure once settled. */
    const imgs = Array.from(track.querySelectorAll("img"));
    imgs.forEach((img) => img.addEventListener("load", measure, { once: true }));

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      reduced.removeEventListener("change", measure);
      section.style.height = "";
    };
  }, []);

  /* ---------- FAQ ---------- */
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  /* ---------- Quote form ---------- */
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    qty: "1",
    size: SIZE_OPTIONS[0],
    type: TYPE_OPTIONS[0],
  });

  const setField = (key: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  function handleQuoteSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = [
      "Hi WoodLand — I'd like a door quote.",
      "",
      `Name: ${form.name || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `City: ${form.city || "—"}`,
      `Quantity: ${form.qty || "—"}`,
      `Door size: ${form.size}`,
      `Preferred type: ${form.type}`,
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <>
      <ScrollAnimations />
      <Loader />
      <Nav active="home" />

      <main className="wl">
        {/* ==================================================
            HERO
            ================================================== */}
        <section className="wl-hero" id="home">
          <div className="wl-hero__aura" aria-hidden="true" />

          <div className="wl-hero__grid">
            <div className="wl-hero__copy">
              <span className="wl-eyebrow">Doors, Redefined</span>

              <h1 className="wl-hero__title serif">
                Engineered Doors
                <br />
                Made for <em className="wl-accent">Pakistan</em>
              </h1>

              <p className="wl-hero__sub">
                Advanced materials, honest engineering and finishes worth looking at
                built for the heat, the damp and the decades ahead.
              </p>

              <ul className="wl-hero__badges" data-reveal>
                {HERO_BADGES.map((b) => (
                  <li className="wl-chip" key={b.label}>
                    <span className="wl-chip__icon">{b.icon}</span>
                    {b.label}
                  </li>
                ))}
              </ul>

              <div className="wl-hero__actions">
                <a className="wl-btn wl-btn--gold" href="/collections">
                  <span>Explore Our Doors</span>
                  <IconArrow className="wl-btn__arrow" />
                </a>
                <a
                  className="wl-btn wl-btn--line"
                  href={waLink("Hi WoodLand! I'd like a quote for a door.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWhatsApp className="wl-btn__wa" />
                  <span>Get a Quote on WhatsApp</span>
                </a>
              </div>

              <div className="wl-hero__notes">
                <p><IconBadge /> <span>New brand. Uncompromising quality.</span></p>
                <p><IconTag /> <span>Introductory pricing for our first customers.</span></p>
              </div>
            </div>

            <div className="wl-hero__media">
              <div
                className="wl-hero__frame"
                onMouseEnter={() => setHeroPaused(true)}
                onMouseLeave={() => setHeroPaused(false)}
              >
                {HERO_IMAGES.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={i === 0 ? "WoodLand engineered interior door" : ""}
                    aria-hidden={i !== 0}
                    className={`wl-hero__slide${heroIndex === i ? " is-active" : ""}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    draggable={false}
                  />
                ))}

                <span className="wl-hero__scrim" aria-hidden="true" />
                <span className="wl-hero__rule" aria-hidden="true" />

                <div className="wl-hero__hud">
                  <span className="wl-hero__count">
                    {String(heroIndex + 1).padStart(2, "0")}
                    <i>/</i>
                    {String(HERO_IMAGES.length).padStart(2, "0")}
                  </span>
                  <div className="wl-hero__ticks" role="tablist" aria-label="Door gallery">
                    {HERO_IMAGES.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        role="tab"
                        aria-selected={heroIndex === i}
                        aria-label={`Show door image ${i + 1}`}
                        className={`wl-hero__tick${heroIndex === i ? " is-active" : ""}`}
                        onClick={() => setHeroIndex(i)}
                      >
                        <span style={{ animationDuration: `${HERO_INTERVAL}ms` }} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a className="wl-hero__cue" href="#collection" aria-label="Scroll to our collection">
            <span>Scroll</span>
            <i />
          </a>
        </section>

        {/* ==================================================
            FLOATING CONTACT RAIL
            ================================================== */}
        <div className="wl-rail">
          <a
            className="wl-rail__btn wl-rail__btn--wa"
            href={waLink("Hi WoodLand! I'd like to ask about your doors.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWhatsApp />
            <span>WhatsApp</span>
          </a>
          <a className="wl-rail__btn" href={`tel:${PHONE_TEL}`}>
            <IconPhone />
            <span>Call</span>
          </a>
          <a className="wl-rail__btn" href="#estimate">
            <IconRuler />
            <span>Quote</span>
          </a>
        </div>

        {/* ==================================================
            CREDIBILITY BAR
            ================================================== */}
        <section className="wl-cred">
          <div className="wl-container">
            <ul className="wl-cred__grid stagger-grid">
              {CRED_ITEMS.map((c) => (
                <li className="wl-cred__item" key={c.label}>
                  <strong className="serif">
                    {c.value}
                    {c.unit && <i>{c.unit}</i>}
                  </strong>
                  <b>{c.label}</b>
                  <span>{c.sub}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ==================================================
            COLLECTION
            ================================================== */}
        <section className="wl-section wl-collection" id="collection">
          <div className="wl-container">
            <header className="wl-head" data-reveal>
              <div className="wl-head__left">
                <span className="wl-eyebrow">Our Door Collection</span>
                <h2 className="wl-h2 serif">
                  Choose the perfect door
                  <br />
                  for your space
                </h2>
              </div>
              <div className="wl-head__right">
                <p>
                  Three materials, each engineered for a different job. Find the one that
                  matches how the room is actually used.
                </p>
                <a href="/collections" className="wl-btn wl-btn--line wl-btn--sm">
                  <span>View All Doors</span>
                  <IconArrow className="wl-btn__arrow" />
                </a>
              </div>
            </header>
          </div>

          {/* Full-bleed triptych — three tall category panels side by side */}
          <div className="wl-cats stagger-grid">
            {DOOR_TYPES.map((d) => {
              const image = products.find((p) => p.category === d.key)?.image ?? d.fallback;
              return (
                <a
                  href="/collections"
                  className={`wl-cat wl-cat--${d.key} img-reveal`}
                  key={d.key}
                  aria-label={`${d.tag} doors — ${d.title}`}
                >
                  <div className="wl-cat__media">
                    <img src={image} alt={`WoodLand ${d.tag} door`} loading="lazy" decoding="async" />
                  </div>

                  <div className="wl-cat__overlay">
                    <div className="wl-cat__top">
                      <span className={`wl-cat__tag wl-cat__tag--${d.key}`}>{d.tag} Doors</span>
                      <span className="wl-cat__index serif">{d.index}</span>
                    </div>

                    <div className="wl-cat__content">
                      <h3 className="wl-cat__title serif">{d.title}</h3>

                      <div className="wl-cat__reveal">
                        <div>
                          <p className="wl-cat__desc">{d.desc}</p>
                          <ul className="wl-cat__points">
                            {d.points.map((pt) => (
                              <li key={pt}>
                                <IconCheck />
                                {pt}
                              </li>
                            ))}
                          </ul>
                          <span className="wl-cat__link">
                            View collection
                            <IconArrow />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="wl-container">
            <div className="wl-cats-cta" data-reveal>
              <a href="/collections" className="wl-btn wl-btn--gold">
                <span>View the Full Collection</span>
                <IconArrow className="wl-btn__arrow" />
              </a>
            </div>
          </div>
        </section>

        {/* ==================================================
            COMPARISON
            ================================================== */}
        {/* <section className="wl-section wl-compare" id="compare">
          <div className="wl-container">
            <header className="wl-head wl-head--center" data-reveal>
              <span className="wl-eyebrow wl-eyebrow--center">Side by Side</span>
              <h2 className="wl-h2 serif">Which material is right for you?</h2>
              <p className="wl-head__lede">
                The short version, without the sales pitch. Still unsure? Send us the room
                and we&apos;ll tell you honestly.
              </p>
            </header>

            <div className="wl-compare__scroll" data-reveal>
              <table className="wl-table">
                <caption className="wl-sr">
                  Comparison of WoodLand PET, PPH and CCP engineered doors
                </caption>
                <thead>
                  <tr>
                    <th scope="col" className="wl-table__corner">
                      <span className="wl-sr">Attribute</span>
                    </th>
                    {DOOR_TYPES.map((d) => (
                      <th scope="col" key={d.key}>
                        <span className={`wl-table__pill wl-table__pill--${d.key}`}>{d.tag}</span>
                        <em>{d.title.replace("Best for ", "")}</em>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {COMPARE_ROWS.map((row) => (
                    <tr key={row.label}>
                      <th scope="row">{row.label}</th>
                      {row.values.map((v, i) => (
                        <td key={`${row.label}-${i}`}>
                          {typeof v === "boolean" ? (
                            <span className="wl-table__yes">
                              <IconCheck />
                              <span className="wl-sr">Yes</span>
                            </span>
                          ) : (
                            v
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="wl-table__cta">
                    <th scope="row"><span className="wl-sr">Enquire</span></th>
                    {DOOR_TYPES.map((d) => (
                      <td key={d.key}>
                        <a
                          className="wl-btn wl-btn--line wl-btn--xs"
                          href={waLink(`Hi WoodLand! I'd like details and pricing on ${d.tag} doors.`)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ask about {d.tag}
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section> */}

        {/* ==================================================
            WHY WOODLAND
            ================================================== */}
        <section className="wl-section wl-why">
          <div className="wl-container">
            <header className="wl-head wl-head--center" data-reveal>
              <span className="wl-eyebrow wl-eyebrow--center">Why WoodLand</span>
              <h2 className="wl-h2 serif">Six reasons these doors outlast the old ones</h2>
            </header>

            <div className="wl-why__grid stagger-grid">
              {WHY_ITEMS.map((w) => (
                <div className="wl-why__item" key={w.title}>
                  <span className="wl-why__ring">{w.icon}</span>
                  <h4>{w.title}</h4>
                  <p>{w.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================
            REAL SPACES — scroll-driven gallery
            ================================================== */}
        <section className="wl-gallery" ref={galleryRef} id="spaces">
          <div className="wl-gallery__sticky">
            <div className="wl-container">
              <header className="wl-head wl-head--center wl-gallery__head" data-reveal>
                <span className="wl-eyebrow wl-eyebrow--center">In Real Spaces</span>
                <h2 className="wl-h2 serif">See WoodLand doors installed</h2>
              </header>
            </div>

            <div className="wl-gallery__viewport">
              <div className="wl-gallery__track" ref={trackRef}>
                {REAL_SPACES.map((s) => (
                  <figure className="wl-shot" key={s.room}>
                    <div className="wl-shot__media">
                      <img
                        src={s.image}
                        alt={`${s.material} installed in a ${s.room.toLowerCase()}`}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                    </div>
                    <figcaption>
                      <strong>{s.room}</strong>
                      <span>{s.material}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="wl-gallery__bar" aria-hidden="true">
              <span ref={thumbRef} />
            </div>
          </div>
        </section>

        {/* ==================================================
            PROCESS / PROMO
            ================================================== */}
        <section className="wl-promo" data-reveal>
          <div className="wl-container wl-promo__inner">
            <div className="wl-promo__copy">
              <span className="wl-eyebrow wl-eyebrow--dark">Three Steps</span>
              <h3 className="wl-h2 serif">Be among our first customers</h3>
              <p>
                Introductory pricing is open while we build our first set of homes.
                Send a size, get a real number back.
              </p>
            </div>

            <ol className="wl-promo__steps">
              {PROCESS_STEPS.map((s) => (
                <li key={s.num}>
                  <span className="wl-promo__icon">
                    {s.icon}
                    <b>{s.num}</b>
                  </span>
                  <strong>{s.title}</strong>
                  <span className="wl-promo__copytext">{s.copy}</span>
                </li>
              ))}
            </ol>

            <a
              className="wl-btn wl-btn--white"
              href={waLink("Hi WoodLand! I'd like a free introductory quote.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconWhatsApp className="wl-btn__wa" />
              <span>Get a Free Quote</span>
            </a>
          </div>
        </section>

        {/* ==================================================
            FAQ
            ================================================== */}
        <section className="wl-section wl-faq" id="faq">
          <div className="wl-container wl-faq__inner">
            <header className="wl-faq__head" data-reveal>
              <span className="wl-eyebrow">Before You Order</span>
              <h2 className="wl-h2 serif">Questions worth asking</h2>
              <p>
                Straight answers. If yours isn&apos;t here, message us — we&apos;d rather
                talk it through than have you order the wrong door.
              </p>
              <a
                className="wl-btn wl-btn--line wl-btn--sm"
                href={waLink("Hi WoodLand! I have a question about your doors.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp className="wl-btn__wa" />
                <span>Ask us directly</span>
              </a>
            </header>

            <ul className="wl-faq__list" data-reveal>
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <li className={`wl-faq__item${open ? " is-open" : ""}`} key={f.q}>
                    <button
                      type="button"
                      className="wl-faq__q"
                      aria-expanded={open}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-btn-${i}`}
                      onClick={() => setOpenFaq(open ? null : i)}
                    >
                      <span>{f.q}</span>
                      <IconChevron className="wl-faq__chev" />
                    </button>
                    {/* No `hidden` attribute here on purpose: display:none would kill
                        the height transition. CSS uses visibility:hidden when closed,
                        which still removes it from the a11y tree and tab order. */}
                    <div
                      className="wl-faq__panel"
                      id={`faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`faq-btn-${i}`}
                    >
                      <p>{f.a}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ==================================================
            ABOUT / COMMITMENT / QUOTE
            ================================================== */}
        <section className="wl-section wl-info" id="estimate">
          <div className="wl-container wl-info__grid">
            {/* About */}
            <article className="wl-panel wl-about" data-reveal>
              <div className="wl-about__text">
                <span className="wl-eyebrow">About WoodLand</span>
                <p>
                  WoodLand is a new-generation door brand bringing modern design, advanced
                  materials and dependable quality to homes and commercial spaces across
                  Pakistan.
                </p>
                <ul className="wl-checks">
                  <li><IconCheck /> Designed for Pakistan&apos;s climate</li>
                  <li><IconCheck /> Consistent materials and finish</li>
                  <li><IconCheck /> Professional installation support</li>
                  <li><IconCheck /> Warranty-backed doors</li>
                </ul>
                <a href="/our-story" className="wl-textlink">
                  <span>Learn more about us</span>
                  <IconArrow />
                </a>
              </div>
              <div className="wl-about__media img-reveal">
                <img src="/3.jpeg" alt="A WoodLand door fitted in a home" loading="lazy" decoding="async" />
              </div>
            </article>

            {/* Commitment */}
            <article className="wl-panel wl-commit" data-reveal>
              <span className="wl-eyebrow">Our Commitment</span>
              <div className="wl-commit__row">
                <ul className="wl-checks">
                  <li><IconCheck /> Quality-focused materials</li>
                  <li><IconCheck /> Transparent, itemised quotes</li>
                  <li><IconCheck /> Professional installation</li>
                  <li><IconCheck /> Responsive support</li>
                  <li><IconCheck /> Warranty-backed products</li>
                  <li><IconCheck /> Satisfaction, first and last</li>
                </ul>
                <div className="wl-seal">
                  <IconShield />
                  <span>
                    Warranty
                    <br />
                    Assured
                  </span>
                </div>
              </div>
            </article>

            {/* Quote form */}
            <article className="wl-panel wl-quote" data-reveal>
              <span className="wl-eyebrow">Get Your Door Quote</span>
              <p className="wl-quote__lede">
                A few details is all we need. We&apos;ll reply on WhatsApp with a real
                estimate not a callback request.
              </p>

              <form className="wl-form" onSubmit={handleQuoteSubmit}>
                <div className="wl-form__row">
                  <label className="wl-field">
                    <span className="wl-sr">Your name</span>
                    <input 
                      type="text" name="name" placeholder="Your name" autoComplete="name"
                      value={form.name} onChange={setField("name")} required
                    />
                  </label>
                  <label className="wl-field">
                    <span className="wl-sr">Phone or WhatsApp number</span>
                    <input
                      type="tel" name="phone" placeholder="Phone / WhatsApp" inputMode="tel"
                      autoComplete="tel" value={form.phone} onChange={setField("phone")} required
                    />
                  </label>
                </div>

                <div className="wl-form__row">
                  <label className="wl-field">
                    <span className="wl-sr">City</span>
                    <input
                      type="text" name="city" placeholder="City" autoComplete="address-level2"
                      value={form.city} onChange={setField("city")}
                    />
                  </label>
                  <label className="wl-field">
                    <span className="wl-sr">Number of doors</span>
                    <input
                      type="number" name="qty" min="1" max="999" placeholder="No. of doors"
                      value={form.qty} onChange={setField("qty")}
                    />
                  </label>
                </div>

                <label className="wl-field wl-field--select">
                  <span className="wl-sr">Door size</span>
                  <select name="size" value={form.size} onChange={setField("size")}>
                    {SIZE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <IconChevron />
                </label>

                <label className="wl-field wl-field--select">
                  <span className="wl-sr">Preferred door type</span>
                  <select name="type" value={form.type} onChange={setField("type")}>
                    {TYPE_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                  </select>
                  <IconChevron />
                </label>

                <button type="submit" className="wl-btn wl-btn--gold wl-btn--block">
                  <IconWhatsApp className="wl-btn__wa wl-btn__wa--light" />
                  <span>Send on WhatsApp</span>
                </button>

                <p className="wl-form__note">
                  Prefer to talk? Call <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                </p>
              </form>
            </article>
          </div>
        </section>

        {/* ==================================================
            TRUST STRIP
            ================================================== */}
        <section className="wl-trust">
          <div className="wl-container wl-trust__grid">
            {TRUST_ITEMS.map((t) => (
              <div className="wl-trust__item" key={t.title}>
                <span className="wl-trust__icon">{t.icon}</span>
                <div>
                  <strong>{t.title}</strong>
                  <span style={{color:"black"}}>{t.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}