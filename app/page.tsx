"use client";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import EstimateWidget from "@/components/EstimateWidget";
import ScrollAnimations from "@/components/ScrollAnimations";
import { getProductBySlug } from "@/lib/products";
import { waLink } from "@/lib/site";
import "./home.css";
import { useEffect, useState } from "react";

const sectionHeadingStyle = {
  textAlign: "center" as const,
  maxWidth: "900px",
  margin: "0 auto 55px",
};

const eyebrowStyle = {
  justifyContent: "center",
  marginBottom: "16px",
};

const headingStyle = {
  fontSize: "clamp(34px, 4vw, 52px)",
  lineHeight: 1.08,
  margin: 0,
};

const sectionSubStyle = {
  color: "var(--ivory-dim)",
  maxWidth: "650px",
  margin: "18px auto 0",
  lineHeight: 1.8,
  fontSize: "16px",
};

export default function HomePage() {
  const featured = ["zf-6813", "lb2601-15-122", "26p1-10-lb205"]
    .map((slug) => getProductBySlug(slug))
    .filter(Boolean) as NonNullable<
    ReturnType<typeof getProductBySlug>
  >[];
  const heroImages = [
  "/hero.png",
  "/1.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
];

const [heroIndex, setHeroIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setHeroIndex((prev) => (prev + 1) % heroImages.length);
  }, 3500);

  return () => clearInterval(interval);
}, []);

  return (
    <>
      <ScrollAnimations />

      <Loader />

      <Nav active="home" />

      <section className="hero" id="home">
        <div className="hero-left">
          <span className="hero-eyebrow" id="heroEyebrow">
            PET · PPH · CCP
          </span>
          <p className="hero-title serif"  style={{ fontSize: "36px", lineHeight: 1.8, color: "var(--brown-900)" }} id="heroTitle">
           <em>Doors, Redefined</em>
          </p>
          <h1 className="hero-title serif" id="heroTitle">
            Engineered Doors, Made for Pakistan.
          </h1>

          <p className="hero-sub" id="heroSub">
            Water-resistant, Termite-resistant, Low maintenance. Built so
            you never have to think about your door again.
          </p>

          <div className="hero-row" id="heroRow">
            <div className="hero-cta">
              <a href="/collections">Explore Doors →</a>
            </div>

            <div className="hero-cta hero-cta-outline">
              <a href="/contact">Get a Free Quote</a>
            </div>
          </div>

          <a
            href={waLink(
              "Hi WoodLand! Here is my door size. Please send me a quotation."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-wa-line"
            id="heroWaLine"
          >
            <svg
              viewBox="0 0 32 32"
              width="18"
              height="18"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.25.62 4.44 1.8 6.36L3.5 29l7.8-2.24a11.98 11.98 0 0 0 4.72.96h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-4.63 1.33 1.36-4.51-.24-.37a9.86 9.86 0 0 1-1.53-5.24C5.56 9.5 10.28 4.8 16.02 4.8c5.74 0 10.44 4.7 10.44 10.44 0 5.75-4.7 10.44-10.44 10.44v.02z" />
            </svg>

            WhatsApp us your door size{" "}
            <strong>→ Get a quotation</strong>
          </a>

          <div className="hero-num" id="heroNum">
            <span className="big serif">03</span>
            <span className="lbl">Engineered Panel Systems</span>
          </div>
        </div>

        <div
  className="hero-right"
  style={{
    position: "relative",
    overflow: "hidden",
  }}
>
  <div
    className="door-backdrop"
    style={{
      position: "relative",
      width: "100%",
      height: "100%",
      minHeight: "560px",
      overflow: "hidden",
      borderRadius: "2px",
    }}
  >
    {heroImages.map((image, index) => (
      <img
        key={image}
        src={image}
        alt={`WoodLand engineered door ${index + 1}`}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          opacity: heroIndex === index ? 1 : 0,
          transform:
            heroIndex === index
              ? "scale(1)"
              : "scale(1.04)",
          transition:
            "opacity 1.2s ease-in-out, transform 3.5s ease-in-out",
          zIndex: heroIndex === index ? 2 : 1,
        }}
      />
    ))}

    {/* Carousel indicators */}
    <div
      style={{
        position: "absolute",
        bottom: "22px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        gap: "7px",
        zIndex: 10,
        padding: "8px 12px",
        borderRadius: "30px",
        background: "rgba(20, 20, 15, 0.45)",
        backdropFilter: "blur(8px)",
      }}
    >
      {heroImages.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => setHeroIndex(index)}
          aria-label={`Show door image ${index + 1}`}
          style={{
            width: heroIndex === index ? "24px" : "7px",
            height: "7px",
            padding: 0,
            border: "none",
            borderRadius: "20px",
            background:
              heroIndex === index
                ? "var(--ivory-light)"
                : "rgba(255,255,255,0.45)",
            cursor: "pointer",
            transition: "all 0.35s ease",
          }}
        />
      ))}
    </div>
  </div>

  {/* <div className="hero-right-tag" id="heroTag">
    <div className="code">LB2601-15-122</div>

    <div className="name serif">
      Polypropylene Homopolymer
    </div>
  </div> */}
</div>
      </section>

      {/* =====================================================
          TRUST STRIP
      ===================================================== */}

      <div className="trust-strip" data-reveal>
        <div className="trust-item">
          <div
            className="num serif"
            data-count-to="100"
            data-count-suffix="%"
          >
            0%
          </div>
          <div className="lbl">Water Resistant</div>
        </div>

        <div className="trust-item">
          <div className="num serif" data-count-to="0">
            0
          </div>
          <div className="lbl">Polish or Paint Needed</div>
        </div>

        <div className="trust-item">
          <div className="num serif">900×2100</div>
          <div className="lbl">Standard Panel Size</div>
        </div>

        <div className="trust-item">
          <div className="num serif" data-count-to="3">
            0
          </div>
          <div className="lbl">Engineered Materials</div>
        </div>
      </div>

      {/* =====================================================
          STORY
      ===================================================== */}

      <section className="section" id="story">
        <div className="container">
          <div className="story-layout">
            <div className="story-img img-reveal">
              <img src="/1.jpeg" alt="WoodLand door detail" style={{ aspectRatio: "4/5" }} />
            </div>

            <div className="story-text" data-reveal>
              <span className="eyebrow">Who We Are</span>

              <h2 className="serif">
                More than
                <br />
                an entrance.
              </h2>

              <p>
                At WoodLand, we believe a door is more than just an entrance
                it&apos;s the first impression of a space. That&apos;s why we
                create doors that combine timeless design, reliable quality,
                and lasting durability.
              </p>

              <p>
                Every WoodLand door is thoughtfully crafted to complement
                modern living, offering the perfect balance of style,
                strength, and functionality from contemporary interiors to
                elegant commercial spaces.
              </p>
              

              <a href="/our-story" className="btn">
                More about WoodLand
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY WOODLAND
      ===================================================== */}

     <section className="why-woodland-section" id="why-woodland">
  <div className="why-woodland-container">

    {/* Header */}
    <div className="why-woodland-heading" data-reveal>
      <div>
        <span className="eyebrow">Why WoodLand</span>

        <h2 className="serif">
          Engineered for the way
          <br />
          <em>Pakistan lives.</em>
        </h2>
      </div>

      <p>
        Beautiful doors are easy to make. Doors that stay beautiful through
        heat, humidity, water, termites and everyday life require engineering.
      </p>
    </div>

    {/* Main showcase */}
    <div className="why-woodland-showcase">

      {/* Left — benefits */}
      <div className="why-benefits">

        <div className="why-benefit" data-reveal>
          <span className="why-benefit-number">01</span>
          <div>
            <span className="why-benefit-label">WATER</span>
            <h3 className="serif">Water resistant.</h3>
            <p>
              Designed for bathrooms, kitchens, balconies and other spaces
              where moisture is part of everyday life.
            </p>
          </div>
        </div>

        <div className="why-benefit" data-reveal>
          <span className="why-benefit-number">02</span>
          <div>
            <span className="why-benefit-label">PROTECTION</span>
            <h3 className="serif">Termite resistant.</h3>
            <p>
              No timber core means there is nothing for termites and wood
              pests to feed on.
            </p>
          </div>
        </div>

        <div className="why-benefit" data-reveal>
          <span className="why-benefit-number">03</span>
          <div>
            <span className="why-benefit-label">CLIMATE</span>
            <h3 className="serif">Made for the weather.</h3>
            <p>
              Stable through Pakistan&apos;s heat, humidity and seasonal
              changes.
            </p>
          </div>
        </div>

      </div>

      {/* Center — door image */}
      <div className="why-door-visual img-reveal">
        <img
          src="/4.jpeg"
          alt="WoodLand engineered door"
          style={{ width: "100%", aspectRatio: "4/5" }}
        />

        <div className="why-door-badge">
          <span>WOODLAND</span>
          <strong
            className="serif"
            style={{ color: "var(--ivory-light)", fontSize: "clamp(22px, 2.2vw, 32px)" }}
          >
            Built to last.
          </strong>
        </div>

        <div className="why-door-vertical">
          ENGINEERED PANEL SYSTEMS
        </div>
      </div>

      {/* Right — benefits */}
      <div className="why-benefits why-benefits-right">

        <div className="why-benefit" data-reveal>
          <span className="why-benefit-number">04</span>
          <div>
            <span className="why-benefit-label">DURABILITY</span>
            <h3 className="serif">Scratch resistant.</h3>
            <p>
              Built for keys, knocks, movement and the realities of everyday
              family life.
            </p>
          </div>
        </div>

        <div className="why-benefit" data-reveal>
          <span className="why-benefit-number">05</span>
          <div>
            <span className="why-benefit-label">MAINTENANCE</span>
            <h3 className="serif">No polish. No paint.</h3>
            <p>
              The finish is built into the panel, giving you a beautiful
              surface without recurring maintenance.
            </p>
          </div>
        </div>

        <div className="why-engineered-note" data-reveal>
          <span className="why-engineered-line"></span>

          <p>
            <strong></strong> engineered panel systems
            <br />
            <span>PET · PPH · CCP</span>
          </p>
        </div>

      </div>

    </div>

    {/* Bottom statement */}
    <div className="why-bottom" data-reveal>
      <span>01</span>
      <p className="serif">
        A door should look good today
        <em> and still look good years from now.</em>
      </p>
      <a href="/collections">
        Explore engineered doors <span>→</span>
      </a>
    </div>

  </div>
</section>

      {/* =====================================================
          MATERIALS
      ===================================================== */}

      <section className="section">
        <div className="container" >
          <div
            data-reveal
            style={sectionHeadingStyle}
          >
            <span className="eyebrow" style={eyebrowStyle}>
              Engineered Materials
            </span>

            <h2 className="serif" style={headingStyle}>
              Three panel systems. One standard.
            </h2>

            <p style={sectionSubStyle}>
              Choose the engineered material according to where the door is
              being used and the finish you want.
            </p>
          </div>

          <div className="mat-grid">
            <div className="mat-card" data-reveal data-tilt>
              <span className="tag">PET</span>

              <h3 className="serif">
                Polyethylene Terephthalate
              </h3>

              <p>
                A dense, fully sealed panel core built for wet areas
                bathrooms, kitchens and utility spaces where timber simply
                can&apos;t compete.
              </p>
            </div>

            <div className="mat-card" data-reveal data-tilt>
              <span className="tag">PPH</span>

              <h3 className="serif">
                Polypropylene Homopolymer
              </h3>

              <p>
                Lightweight yet rigid, PPH doors resist warping through
                humidity and temperature swings, holding their line for
                years.
              </p>
            </div>

            <div className="mat-card" data-reveal data-tilt>
              <span className="tag">CCP</span>

              <h3 className="serif">
                Crystal Carbon Panel
              </h3>

              <p>
                Our premium finish line a refined surface texture and depth
                of colour that reads closest to natural wood grain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHICH DOOR
      ===================================================== */}

      <section
        className="section"
        style={{
          paddingTop: "30px",
          paddingBottom: "100px",
        }}
      >
        <div className="container">
          <div
            data-reveal
            style={sectionHeadingStyle}
          >
            <span className="eyebrow" style={eyebrowStyle}>
              Not Sure Which One?
            </span>

            <h2 className="serif" style={headingStyle}>
              Which WoodLand Door Is Right for You?
            </h2>

            <p style={sectionSubStyle}>
              A simple guide to help you choose the right engineered panel
              system for your space.
            </p>
          </div>

          <div className="which-door-grid stagger-grid">
            <div className="which-door-card">
              <div className="code serif">PET</div>

              <h4>Best For</h4>

              <p>
                Bathrooms &amp; wet areas
              </p>
            </div>

            <div className="which-door-card">
              <div className="code serif">PPH</div>

              <h4>Best For</h4>

              <p>
                Everyday residential use
              </p>
            </div>

            <div className="which-door-card">
              <div className="code serif">CCP</div>

              <h4>Best For</h4>

              <p>
                Premium interiors &amp; appearance
              </p>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "42px",
            }}
            data-reveal
          >
            <a
              href={waLink(
                "Hi WoodLand! I'm not sure which door (PET/PPH/CCP) is right for me — can your specialist help?"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-link"
            >
              Not sure? → Ask our door specialist
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          REAL SPACES
      ===================================================== */}

      <section
        className="section"
        style={{
          background: "var(--bg-soft)",
          paddingTop: "100px",
          paddingBottom: "110px",
        }}
      >
        <div className="container">
          <div
            data-reveal
            style={sectionHeadingStyle}
          >
            <span className="eyebrow" style={eyebrowStyle}>
              See Them Fitted
            </span>

            <h2 className="serif" style={headingStyle}>
              WoodLand Doors in Real Spaces
            </h2>

            <p style={sectionSubStyle}>
              From bedrooms and villas to offices and hotels, see how
              WoodLand doors fit into everyday architecture.
            </p>
          </div>

          <div className="space-grid stagger-grid">
            <div className="space-card img-reveal">
              <img
                src="1.jpeg"
                alt="Bedroom door installation"
              />

              <div className="label">
                <span>PET · PPH</span>
                <strong>Bedroom Door</strong>
              </div>
            </div>

            <div className="space-card img-reveal">
              <img
                src="2.jpeg"
                alt="Villa door installation"
              />

              <div className="label">
                <span>CCP</span>
                <strong>Villa Door</strong>
              </div>
            </div>

            <div className="space-card img-reveal">
              <img
                src="3.jpeg"
                alt="Office door installation"
              />

              <div className="label">
                <span>PPH</span>
                <strong>Office Door</strong>
              </div>
            </div>

            <div className="space-card img-reveal">
              <img
                src="4.jpeg"
                alt="Hotel corridor door installation"
              />

              <div className="label">
                <span>CCP · PPH</span>
                <strong>Hotel</strong>
              </div>
            </div>

            <div className="space-card img-reveal">
              <img
                src="5.jpeg"
                alt="Apartment door installation"
              />

              <div className="label">
                <span>PET</span>
                <strong>Apartment</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED DOORS
      ===================================================== */}

      <section
        className="section"
        style={{
          paddingTop: "100px",
          paddingBottom: "110px",
        }}
      >
        <div className="container">
          <div
            className="feat-head"
            data-reveal
            style={{
              marginBottom: "60px",
            }}
          >
            <div>
              <span className="eyebrow">
                2026 Catalogue
              </span>

              <h2
                className="serif"
                style={{
                  fontSize: "clamp(38px, 4vw, 52px)",
                  lineHeight: 1.08,
                  marginTop: "12px",
                }}
              >
                Best-Selling Doors
              </h2>
            </div>

            <a href="/collections" className="btn">
              View full collection
            </a>
          </div>

          <div className="cat-grid stagger-grid">
            <a
              href={`/products/${featured[0].slug}`}
              className="feat-card c1"
              data-tilt
            >
              <div
                className="feat-img img-reveal"
                style={{ aspectRatio: "4/5" }}
              >
                <img
                  src={featured[0].image}
                  alt={`${featured[0].code} ${featured[0].materialLong} door`}
                />
              </div>

              <div className="feat-info">
                <h3 className="serif">
                  {featured[0].code}
                </h3>

                <span>
                  {featured[0].materialShort} ·{" "}
                  {featured[0].size}
                </span>
              </div>
            </a>

            <a
              href={`/products/${featured[1].slug}`}
              className="feat-card c2"
              data-tilt
            >
              <div
                className="feat-img img-reveal"
                style={{ aspectRatio: "4/5.5" }}
              >
                <img
                  src={featured[1].image}
                  alt={`${featured[1].code} ${featured[1].materialLong} door`}
                />
              </div>

              <div className="feat-info">
                <h3 className="serif">
                  {featured[1].code}
                </h3>

                <span>
                  {featured[1].materialShort} ·{" "}
                  {featured[1].size}
                </span>
              </div>
            </a>


            <a
              href={`/products/${featured[2].slug}`}
              className="feat-card c3"
              data-tilt
            >
              <div
                className="feat-img img-reveal"
                style={{ aspectRatio: "4/8" }}
              >
                <img
                  src={featured[2].image}
                  alt={`${featured[2].code} ${featured[2].materialLong} door`}
                 
                />
              </div>

              <div className="feat-info">
                <h3 className="serif">
                  {featured[2].code}
                </h3>

                <span>
                  {featured[2].materialShort} ·{" "}
                  {featured[2].size}
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================
          LOCK SOLUTIONS
      ===================================================== */}

      {/* <section
        className="section"
        style={{
          paddingTop: "20px",
          paddingBottom: "110px",
        }}
      >
        <div className="container">
          <div className="lock-banner">
            <div className="lock-img img-reveal">
              <img
                src="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1200"
                alt="Door lock hardware"
              />
            </div>

            <div className="lock-text" data-reveal>
              <span className="eyebrow">
                Complete the Door
              </span>

              <h2
                className="serif"
                style={{
                  fontSize: "clamp(34px, 4vw, 44px)",
                  lineHeight: 1.1,
                  marginTop: "14px",
                }}
              >
                Door lock supply &amp; installation.
              </h2>

              <p
                style={{
                  color: "var(--ivory-dim)",
                  fontSize: "17px",
                  lineHeight: 1.8,
                  marginTop: "20px",
                }}
              >
                A door is only as secure as what closes it. Alongside our
                door range, WoodLand supplies and fits a full range of
                locking hardware matched to your door, sized to your
                opening.
              </p>

              <ul>
                <li>Mortise &amp; cylindrical locksets</li>
                <li>Smart digital &amp; keypad locks</li>
                <li>Handles, hinges &amp; door closers</li>
                <li>On-site fitting and after-sales support</li>
              </ul>

              <a href="/door-locks" className="btn">
                Explore lock solutions
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* =====================================================
          TRUST CHECKLIST
      ===================================================== */}

      <section
        className="section"
        style={{
          background: "var(--bg-soft)",
          paddingTop: "100px",
          paddingBottom: "110px",
        }}
      >
        <div className="container">
          <div
            data-reveal
            style={sectionHeadingStyle}
          >
            <span className="eyebrow" style={eyebrowStyle}>
              Why Choose Us
            </span>

            <h2 className="serif" style={headingStyle}>
              Why WoodLand?
            </h2>

            <p style={sectionSubStyle}>
              Practical engineering, modern design and dependable service
              from choosing your door to getting it fitted.
            </p>
          </div>

          <ul className="trust-checklist stagger-grid">
            <li>Made for Pakistan&apos;s climate</li>
            <li>Water-resistant options</li>
            <li>Termite-resistant</li>
            <li>Low maintenance</li>
            <li>Modern designs</li>
            <li>Consistent finishes</li>
            <li>Professional installation</li>
            <li>Warranty on every door</li>
            <li>After-sales support</li>
          </ul>
        </div>
      </section>

      {/* =====================================================
          SPECIFICATIONS
      ===================================================== */}

      <section
        className="section"
        style={{
          paddingTop: "90px",
          paddingBottom: "100px",
        }}
      >
        <div className="container">
          <div
            data-reveal
            style={sectionHeadingStyle}
          >
            <span className="eyebrow" style={eyebrowStyle}>
              Specifications
            </span>

            <h2 className="serif" style={headingStyle}>
              Performance, by Material
            </h2>

            <p style={sectionSubStyle}>
              Compare the three engineered panel systems at a glance.
            </p>
          </div>

          <div className="spec-table-wrap" data-reveal>
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="center">PET</th>
                  <th className="center">PPH</th>
                  <th className="center">CCP</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Water resistance</td>
                  <td className="center yes">✓</td>
                  <td className="center yes">✓</td>
                  <td className="center yes">✓</td>
                </tr>

                <tr>
                  <td>Termite resistance</td>
                  <td className="center yes">✓</td>
                  <td className="center yes">✓</td>
                  <td className="center yes">✓</td>
                </tr>

                <tr>
                  <td>Scratch resistance</td>
                  <td className="center no">—</td>
                  <td className="center yes">✓</td>
                  <td className="center yes">✓</td>
                </tr>

                <tr>
                  <td>Recommended areas</td>
                  <td className="center">
                    Bathroom / Kitchen
                  </td>
                  <td className="center">
                    Interior
                  </td>
                  <td className="center">
                    Premium interiors
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p
            data-reveal
            style={{
              fontSize: "13px",
              color: "var(--ivory-dim)",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            Ask our showroom team for full test reports and warranty terms
            for any of these claims.
          </p>
        </div>
      </section>

      {/* =====================================================
          CRAFT BANNER
      ===================================================== */}

      <section className="craft-banner">
        <img
          src="/5.jpeg"
          alt="Door surface finish"
          id="craftImg"
        />

        <div
          className="craft-content"
          data-reveal
          style={{
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <span
            className="eyebrow"
            style={{
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            Zero Maintenance
          </span>

          <h2
            className="serif"
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: 1.05,
            }}
          >
            No polish. No paint. No worry.
          </h2>
        </div>
      </section>

      {/* =====================================================
          ESTIMATE
      ===================================================== */}

      <section
        className="section"
        id="estimate"
        style={{
          paddingTop: "100px",
          paddingBottom: "110px",
        }}
      >
        <div className="container">
          <div
            data-reveal
            style={sectionHeadingStyle}
          >
            <span className="eyebrow" style={eyebrowStyle}>
              Get a Ballpark Number
            </span>

            <h2 className="serif" style={headingStyle}>
              Get Your Door Estimate
            </h2>

            <p style={sectionSubStyle}>
              Answer 4 quick questions. We&apos;ll WhatsApp you back with
              pricing.
            </p>
          </div>

          <div data-reveal>
            <EstimateWidget />
          </div>
        </div>
      </section>

      {/* =====================================================
          DUAL CTA
      ===================================================== */}

      <section
        className="dual-cta"
        data-reveal
      >
        <div className="cta-panel">
          <span
            className="eyebrow"
            style={{ justifyContent: "center" }}
          >
            Ready to Choose?
          </span>

          <h3 className="serif">
            Browse the full catalogue
          </h3>

          <p>
            PET, PPH and CCP doors across every size and finish we stock.
          </p>

          <a href="/collections" className="btn">
            View Doors
          </a>
        </div>

        <div className="cta-panel">
          <span
            className="eyebrow"
            style={{ justifyContent: "center" }}
          >
            Need It Fitted?
          </span>

          <h3 className="serif">
            Get a free quote
          </h3>

          <p>
            Send us your opening size and we&apos;ll reply within one
            business day.
          </p>

          <a href="/contact" className="btn">
            Get a Quote
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

