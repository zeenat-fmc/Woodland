"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";
import "./collections.css";

export default function CollectionsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter(
          (product) =>
            product.category?.toLowerCase() ===
            activeFilter.toLowerCase()
        );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [activeFilter]);

  return (
    <>
      <Loader />

      <Nav active="doors" />

      {/* =====================================================
          PAGE HERO
      ===================================================== */}

      <section className="page-hero" style={{ minHeight: "56vh" }}>
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1800"
            alt="Door catalogue"
          />
        </div>

        <div className="container">
          <span className="eyebrow">2026 Catalogue</span>

          <h1 className="serif">
            Doors, By Material.
          </h1>

          <p className="kicker">
            PET, PPH and CCP panel doors every one 100% water resistant,
            termite proof, and finished to never need paint.
          </p>
        </div>
      </section>

      {/* =====================================================
          CATALOGUE
      ===================================================== */}

      <section
        className="section"
        style={{
          paddingTop: "20px",
        }}
      >
        <div className="container">

          {/* FILTERS */}

          <div
            className="filters"
            data-reveal
            style={{
              marginBottom: "55px",
            }}
          >
            <button
              type="button"
              className={`filter-pill ${
                activeFilter === "all" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("all")}
            >
              All Doors
            </button>

            <button
              type="button"
              className={`filter-pill ${
                activeFilter === "pet" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("pet")}
            >
              PET
            </button>

            <button
              type="button"
              className={`filter-pill ${
                activeFilter === "pph" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("pph")}
            >
              PPH
            </button>

            <button
              type="button"
              className={`filter-pill ${
                activeFilter === "ccp" ? "active" : ""
              }`}
              onClick={() => setActiveFilter("ccp")}
            >
              CCP
            </button>
          </div>

          {/* CURRENT CATEGORY */}

          <div
            className="catalogue-result-head"
            data-reveal
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "30px",
              gap: "20px",
            }}
          >
            <div>
              <span
                className="eyebrow"
                style={{
                  marginBottom: "8px",
                }}
              >
                Showing
              </span>

              <h2
                className="serif"
                style={{
                  margin: 0,
                  fontSize: "34px",
                }}
              >
                {activeFilter === "all"
                  ? "All Doors"
                  : `${activeFilter.toUpperCase()} Doors`}
              </h2>
            </div>

            <span
              style={{
                color: "var(--ivory-dim)",
                fontSize: "13px",
                letterSpacing: "0.08em",
              }}
            >
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1
                ? "door"
                : "doors"}
            </span>
          </div>

          {/* PRODUCT GRID */}

          <div
            className="cat-grid catalogue-filter-grid"
            key={activeFilter}
          >
            {filteredProducts.map((p, index) => (
              <a
                key={p.slug}
                href={`/products/${p.slug}`}
                className="cat-item catalogue-filter-item"
                data-cat={p.category}
                style={{
                  animationDelay: `${index * 70}ms`,
                }}
              >
                <div
                  className="img-reveal"
                  style={{
                    aspectRatio: "4/5",
                  }}
                >
                  <img
                    src={p.image}
                    alt={`${p.code} door`}
                  />
                </div>

                <div className="item-info">
                  <h3 className="serif">
                    {p.code}
                  </h3>

                  <span>
                    {p.materialShort}
                  </span>
                </div>

                <div className="item-size">
                  {p.size} · NW {p.nw}
                </div>

                <div className="item-feats">
                  {p.features
                    .slice(0, 2)
                    .map((f) => (
                      <span key={f}>
                        {f}
                      </span>
                    ))}
                </div>
              </a>
            ))}
          </div>

          {/* NO PRODUCTS */}

          {filteredProducts.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "100px 20px",
                color: "var(--ivory-dim)",
              }}
            >
              <span
                className="eyebrow"
                style={{
                  justifyContent: "center",
                }}
              >
                No doors found
              </span>

              <h2
                className="serif"
                style={{
                  fontSize: "38px",
                  margin: "15px 0 20px",
                }}
              >
                No {activeFilter.toUpperCase()} doors available.
              </h2>

              <button
                type="button"
                className="btn"
                onClick={() => setActiveFilter("all")}
              >
                View all doors
              </button>
            </div>
          )}

          {/* =================================================
              SPECS
          ================================================= */}

          <div
            className="spec-band"
            data-reveal
          >
            <div className="spec">
              <h4>Water Resistant</h4>
              <p>
                100% sealed core, safe for wet areas.
              </p>
            </div>

            <div className="spec">
              <h4>Scratch Resistant</h4>
              <p>
                Durable surface, holds up to daily use.
              </p>
            </div>

            <div className="spec">
              <h4>Termite Proof</h4>
              <p>
                No timber core, nothing for pests to eat.
              </p>
            </div>

            <div className="spec">
              <h4>Zero Maintenance</h4>
              <p>
                No polish or paint required, ever.
              </p>
            </div>

            <div className="spec">
              <h4>Weather Proof</h4>
              <p>
                Won&apos;t warp with heat, cold, or humidity.
              </p>
            </div>
          </div>

          {/* =================================================
              CTA
          ================================================= */}

          <div
            style={{
              textAlign: "center",
              paddingTop: "30px",
            }}
            data-reveal
          >
            <span
              className="eyebrow"
              style={{
                justifyContent: "center",
                marginBottom: "15px",
              }}
            >
              Need a size that&apos;s not listed?
            </span>

            <h2
              className="serif"
              style={{
                fontSize: "clamp(34px, 4vw, 44px)",
                marginBottom: "34px",
                lineHeight: 1.1,
              }}
            >
              We can size and finish to order.
            </h2>

            <a
              href="/contact"
              className="btn"
            >
              Request a quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}