import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";
import "./our-story.css";

export const metadata = {
  title: "About WoodLand | Doors Redefined",
};

export default function OurStoryPage() {
  return (
    <>
      <Loader />

      <Nav active="about" />

      <section className="page-hero">
        <div className="page-hero-bg">
          <img
            src="5.jpeg"
            alt="WoodLand doors"
          />
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

      <section className="section">
        <div className="container">
          <div className="story-layout">
            <div data-reveal>
              <span className="eyebrow">Our Belief</span>
              <h2 className="serif" style={{ fontSize: "44px", marginBottom: "26px" }}>
                Doors that don&apos;t just connect spaces they define them.
              </h2>
              <p
                style={{
                  color: "var(--ivory-dim)",
                  fontSize: "17px",
                  lineHeight: 1.85,
                  marginBottom: "18px",
                }}
              >
                At WoodLand, we believe a door is more than just an entrance.
                It&apos;s the first impression of a space. That&apos;s why we
                create doors that combine timeless design, reliable quality,
                and lasting durability.
              </p>
              <p
                style={{
                  color: "var(--ivory-dim)",
                  fontSize: "17px",
                  lineHeight: 1.85,
                  marginBottom: "18px",
                }}
              >
                Every WoodLand door is thoughtfully crafted to complement
                modern living, offering the perfect balance of style,
                strength, and functionality. From contemporary interiors to
                elegant commercial spaces, our designs are made to enhance
                every environment with confidence and sophistication.
              </p>
              <p
                style={{
                  color: "var(--ivory-dim)",
                  fontSize: "17px",
                  lineHeight: 1.85,
                }}
              >
                With a commitment to quality craftsmanship and attention to
                detail, WoodLand is dedicated to creating doors that
                don&apos;t just connect spaces they define them.
              </p>
            </div>
            <div
              className="story-img img-reveal"
              style={{
                aspectRatio: "4/5",
                overflow: "hidden",
                clipPath: "inset(100% 0 0 0)",
                boxShadow: "var(--shadow)",
              }}
            >
              <img
                src="6.jpeg"
                alt="WoodLand door"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "scale(1.25)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="split">
        <div className="split-img img-reveal">
          <img
            src="9.jpeg"
            alt="Door panel material"
          />
        </div>
        <div className="split-text" data-reveal>
          <span className="eyebrow">Engineered, Not Grown</span>
          <h2 className="serif" style={{ fontSize: "44px", marginBottom: "24px" }}>
            Built to outlast the elements.
          </h2>
          <p>
            Instead of relying on solid timber which swells, cracks, and
            needs repainting — every WoodLand door is built from engineered
            PET, PPH, or CCP panels, sealed against moisture from the core
            out.
          </p>
          <p>
            The result is a door that looks refined on day one and still
            closes true after years of Pakistan&apos;s heat, humidity, and
            monsoon seasons.
          </p>
          <div className="mat-row">
            <div className="mat-box">
              <h4>PET</h4>
              <p>
                Sealed core for wet areas bathrooms, kitchens, utility
                doors.
              </p>
            </div>
            <div className="mat-box">
              <h4>PPH</h4>
              <p>Rigid, lightweight panels that resist warping and swelling.</p>
            </div>
            <div className="mat-box">
              <h4>CCP</h4>
              <p>
                Our premium finish line, closest in depth and texture to
                natural wood.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "90px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              What We Hold To
            </span>
            <h2 className="serif" style={{ fontSize: "54px" }}>
              Three working principles
            </h2>
          </div>
          <div className="values">
            <div className="value-card" data-reveal data-tilt>
              <div className="idx">Durability</div>
              <h3 className="serif">Zero maintenance, by design</h3>
              <p>
                No polish, no paint, no annual touch-ups. Every WoodLand door
                is finished to stay finished water resistant, scratch
                resistant, termite proof, from the day it&apos;s fitted.
              </p>
            </div>
            <div className="value-card" data-reveal data-tilt>
              <div className="idx">Consistency</div>
              <h3 className="serif">The same door, every time</h3>
              <p>
                Engineered panels don&apos;t have the natural variance of
                timber what you approve in the showroom is exactly what
                arrives on-site, every single time.
              </p>
            </div>
            <div className="value-card" data-reveal data-tilt>
              <div className="idx">Completion</div>
              <h3 className="serif">Beyond the door itself</h3>
              <p>
                From the panel to the lock, we supply and fit the hardware
                that finishes the job mortise sets, smart locks, handles,
                and hinges, matched and installed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "70px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              The Company
            </span>
            <h2 className="serif" style={{ fontSize: "48px" }}>
              WoodLand, in Detail
            </h2>
            <p style={{ color: "var(--ivory-dim)", maxWidth: "560px", margin: "20px auto 0" }}>
              The specifics customers ask before they buy.
            </p>
          </div>
          <dl className="company-details" data-reveal>
            <div>
              <dt>Ownership / Management</dt>
              <dd className="todo">[Add: owner / management team name(s)]</dd>
            </div>
            <div>
              <dt>Based In</dt>
              <dd>Rawalpindi, Punjab, Pakistan</dd>
            </div>
            <div>
              <dt>Manufacturing Location</dt>
              <dd className="todo">[Add: where doors are manufactured]</dd>
            </div>
            <div>
              <dt>Years in Business</dt>
              <dd className="todo">[Add: year established]</dd>
            </div>
            <div>
              <dt>Production Capability</dt>
              <dd className="todo">[Add: e.g. units/month, lead times]</dd>
            </div>
            <div>
              <dt>Materials Used</dt>
              <dd>Engineered PET, PPH &amp; CCP panels</dd>
            </div>
            <div>
              <dt>Quality Control</dt>
              <dd className="todo">[Add: QC process / standards followed]</dd>
            </div>
            <div>
              <dt>Showroom</dt>
              <dd>{SITE.address}</dd>
            </div>
            <div>
              <dt>Installation Team</dt>
              <dd className="todo">[Add: in-house or partnered installers?]</dd>
            </div>
            <div>
              <dt>Warranty</dt>
              <dd className="todo">[Add: warranty period &amp; terms]</dd>
            </div>
            <div>
              <dt>Phone / WhatsApp</dt>
              <dd>{SITE.phoneDisplay}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>{SITE.email}</dd>
            </div>
          </dl>
          <p style={{ fontSize: "13px", color: "var(--ivory-dim)", marginTop: "10px" }}>
            Items in italics are placeholders send us the real details and
            we&apos;ll drop them straight in.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
