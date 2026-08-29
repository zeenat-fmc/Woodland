"use client";
import { useEffect, useState } from "react";

export type ActivePage = "home" | "doors" | "about" |"why-woodland" | "resources" |  "door-lock-services";

const IconFB = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46H16.5V4.36C16.2 4.32 15.2 4.24 14 4.24c-2.4 0-4 1.46-4 4.16V10.5H7.5v3H10V21h3.5z"/></svg>
);
const IconIG = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>
);
const IconYT = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><rect x="2" y="5.5" width="20" height="13" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6"/><path d="M10.5 9.5v5l4.5-2.5z"/></svg>
);
const IconTikTok = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M14 3c.4 2.1 1.8 3.6 4 3.9v2.6c-1.5 0-2.8-.4-4-1.2v6.4a5.3 5.3 0 1 1-5.3-5.3c.3 0 .6 0 .9.1v2.7a2.6 2.6 0 1 0 1.8 2.5V3H14z"/></svg>
);
const IconDrop = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2s7 8.5 7 13a7 7 0 1 1-14 0c0-4.5 7-13 7-13z"/></svg>
);
const IconBug = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="13" r="5"/><path d="M12 8V5M7 13H3M21 13h-4"/></svg>
);
const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 4C10 4 4 10 4 20c10 0 16-6 16-16z"/><path d="M9 15l7-7"/></svg>
);
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
);
const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12"><path d="m6 9 6 6 6-6"/></svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

function TopBar({ hidden }: { hidden: boolean }) {
  return (
    <div className={`top-bar${hidden ? " hide" : ""}`}>
      <div className="top-bar-inner">
        <div className="top-bar-left">
          <span><IconLeaf /> Made for Pakistan&apos;s Climate</span>
          <span><IconDrop /> Water Resistant</span>
          <span><IconBug /> Termite Resistant</span>
          <span><IconClock /> Low Maintenance</span>
        </div>
        <div className="top-bar-right">
          <span>Follow Us:</span>
          <a href="#" aria-label="Facebook"><IconFB /></a>
          <a href="#" aria-label="Instagram"><IconIG /></a>
          <a href="#" aria-label="YouTube"><IconYT /></a>
          <a href="#" aria-label="TikTok"><IconTikTok /></a>
        </div>
      </div>
    </div>
  );
}

export default function Nav({ active }: { active?: ActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const cls = (page: ActivePage) => (active === page ? "active" : undefined);

  return (
    <>
      <TopBar hidden={scrolled} />

      <nav className={`site-nav${scrolled ? " scrolled" : ""}`} id="siteNav">
        <div className="nav-inner">
          <a href="/" className="logo">
            <img src="/green.png" alt="WoodLand" />
            <span className="logo-text">
              WOODLAND
              <em>Doors, Redefined.</em>
            </span>
          </a>

          <div className="nav-links">
            <a href="/" className={cls("home")}>Home</a>
            <a href="/our-story" className={cls("about")}>About Us</a>

            <div className="nav-dropdown">
              <a href="/collections" className={cls("doors")}>
                Our Doors <IconChevron />
              </a>
              <div className="nav-dropdown-menu">
                <a href="/collections">All Doors</a>
                <a href="/collections">PET Doors</a>
                <a href="/collections">PPH Doors</a>
                <a href="/collections">CCP Doors</a>
              </div>
            </div>

            <a href="/door-lock-services" className={cls("door-lock-services")}>Lock Services</a>
            <a href="/why-woodland">Why Woodland</a>
             <a href="/resources" className={cls("resources")}>Resources</a>
{/* 
            <div className="nav-dropdown">
              <a href="/resources">Resources <IconChevron /></a>
              <div className="nav-dropdown-menu">
                <a href="#">Door Care Guide</a>
                <a href="#">Installation Guide</a>
                <a href="#">Warranty</a>
                <a href="#">FAQs</a>
              </div>
            </div> */}

            <a href="/contact" className="nav-cta">
              Get a Quote <IconPhone />
            </a>
          </div>

          <button
            className={`nav-toggle${menuOpen ? " open" : ""}`}
            id="navToggle"
            aria-label="Menu"
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`} id="mobileMenu">
        <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="/our-story" onClick={() => setMenuOpen(false)}>About Us</a>
        <a href="/collections" onClick={() => setMenuOpen(false)}>Our Doors</a>
        <a href="/door-lock-services" onClick={() => setMenuOpen(false)}>Lock Services</a>
        <a href="/why-woodland" onClick={() => setMenuOpen(false)}>Why Woodland</a>
      </div>
    </>
  );
}