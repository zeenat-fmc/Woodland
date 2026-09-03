import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductGallery from "@/components/ProductGallery";
import ProductOptions from "@/components/ProductOptions";

import {
  getProductBySlug,
  getRelatedProducts,
  products,
  categoryInfo,
} from "@/lib/products";

import { waLink } from "@/lib/site";

import "../products.css";

export function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProductBySlug(params.slug);

  if (!product) return {};

  return {
    title: `${product.code} — ${product.materialShort} Door | WoodLand`,
    description: `${product.code}: a ${product.materialLong} (${product.materialShort}) door, ${product.size}, ${product.nw}. Water resistant, termite proof, and finished to never need paint.`,
  };
}

/* ================================================================
   Small inline icon set for the sections below (recommended-for,
   care instructions). Kept local to this file to avoid adding a
   new icon-library dependency.
   ================================================================ */

function Icon({ name }: { name: string }) {
  const p = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "home":
      return (
        <svg {...p}>
          <path d="M4 11 12 4l8 7" />
          <path d="M6 10v10h12V10" />
        </svg>
      );
    case "office":
      return (
        <svg {...p}>
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
        </svg>
      );
    case "hotel":
      return (
        <svg {...p}>
          <path d="M3 21V9l9-6 9 6v12" />
          <path d="M9 21v-6h6v6" />
        </svg>
      );
    case "apartment":
      return (
        <svg {...p}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
        </svg>
      );
    case "commercial":
      return (
        <svg {...p}>
          <path d="M3 21h18" />
          <path d="M5 21V10l4-3 4 3v11" />
          <path d="M13 21V6l4-2 4 2v15" />
        </svg>
      );
    case "check":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12.5 2.5 2.5L16 9" />
        </svg>
      );
    default:
      return null;
  }
}

const RECOMMENDED_ICONS = [
  { key: "home", label: "Premium Homes" },
  { key: "office", label: "Offices" },
  { key: "hotel", label: "Hotels" },
  { key: "apartment", label: "Apartments" },
  { key: "commercial", label: "Commercial Spaces" },
];

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);

  if (!product) notFound();

  const related = getRelatedProducts(product, 5);
  const info = categoryInfo[product.category];

  const photoMessage = `Hi WoodLand! I'm not sure which door I need. I'm looking at ${product.code} but will send a photo of my existing door/opening for advice.`;
  const callMessage = `Hi WoodLand! I'd like to speak to a door specialist about ${product.code}.`;

  const productImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  // Optional fields — see ProductOptions.tsx header comment for the
  // full list of optional fields this page can use once added to
  // lib/products.ts. Falls back gracefully when absent.
  const description =
    product.description ||
    `${product.materialLong} engineered door with an elegant finish, designed for modern interiors and long-lasting performance.`;

  const specRows: { label: string; value: string }[] =
    product.specRows || [
      { label: "Material", value: product.materialLong },
      { label: "Door Type", value: "Flush Door" },
      { label: "Construction", value: "Solid Core" },
      { label: "Thickness", value: product.thickness || "35mm / 40mm" },
      { label: "Standard Size", value: product.size },
      { label: "Net Weight", value: product.nw },
      { label: "Water Resistance", value: "100% Water Resistant" },
      { label: "Termite Resistance", value: "100% Termite Proof" },
      { label: "Application", value: info.recommendedFor },
      { label: "Warranty", value: product.warranty || "5 Years" },
      { label: "Installation", value: "Available Across Pakistan" },
    ];

  const whyPoints: string[] =
    product.whyPoints || [
      "High Durability",
      "Luxury Look & Feel",
      `Best for ${info.recommendedFor}`,
      "Consistent Quality",
      "Environment Friendly",
    ];

  const applications: { label: string; image: string }[] =
    product.applications || [
      { label: "Bedroom", image: product.image },
      { label: "Living Room", image: product.image },
    ];

  const careInstructions: string[] =
    product.careInstructions || [
      "Clean with a soft damp cloth.",
      "Avoid using harsh chemicals.",
      "Wipe spills immediately.",
      "No polishing required.",
    ];

  return (
    <>
      <Loader />

      <Nav />

      {/* ==================================================
          BREADCRUMB + HERO
      ================================================== */}
      <section
        className="section product-detail-section"
        style={{ paddingTop: "160px" }}
      >
        <div className="container">

          <div className="product-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <a href="/products">Products</a>
            <span>/</span>
            <a href={`/collections/${product.category}`}>
              {product.materialShort} Doors
            </a>
            <span>/</span>
            <strong>{product.code}</strong>
          </div>

          <div className="product-layout">

            <ProductGallery
              images={productImages}
              code={product.code}
              bestSeller={product.bestSeller}
            />

            <div className="product-info" data-reveal>

              <div className="product-tags">
                <span className="tag">{product.materialShort}</span>
                <span className="tag tag-collection">
                  Premium Collection
                </span>
              </div>

              <h1 className="serif">{product.code}</h1>

              <p className="material-full">{description}</p>

              <ProductOptions product={product} />

              {/* PHOTO HELP */}
              <a
                href={waLink(photoMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-wa-line"
                style={{ marginTop: "22px" }}
              >
                Not sure this is the right door?{" "}
                <strong>Send us a photo of your existing door/opening →</strong>
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          PRODUCT SPECIFICATIONS + WHY THIS MATERIAL
      ================================================== */}
      <section className="section product-specs-section">
        <div className="container">
          <div className="specs-why-grid">

            <div className="specs-panel">
              <h3 className="serif">Product Specifications</h3>
              <dl className="specs-table">
                {specRows.map((row) => (
                  <div className="specs-row" key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="why-panel">
              <h3 className="serif">
                Why {product.materialShort} Doors?
              </h3>
              <p>
                {product.materialShort} doors offer a perfect blend of
                strength, style and stability. They are moisture proof,
                termite proof and highly durable making them ideal for
                premium spaces.
              </p>
              <ul className="why-list">
                {whyPoints.map((point) => (
                  <li key={point}>
                    <Icon name="check" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="why-image">
                <img src={product.image} alt={`${product.code} cross-section`} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          RECOMMENDED FOR
      ================================================== */}
      <section className="section recommended-section">
        <div className="container">
          <h3 className="serif" style={{ marginBottom: "30px" }}>
            Recommended For
          </h3>
          <div className="recommended-grid">
            {RECOMMENDED_ICONS.map((r) => (
              <div className="recommended-item" key={r.key}>
                <Icon name={r.key} />
                <span>{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          AVAILABLE APPLICATIONS + CARE INSTRUCTIONS
      ================================================== */}
      <section className="section applications-care-section">
        <div className="container">
          <div className="applications-care-grid">

            <div className="applications-panel">
              <h4>Available Applications</h4>
              <div className="applications-images">
                {applications.map((a) => (
                  <div className="application-item" key={a.label}>
                    <img src={a.image} alt={a.label} />
                    <span>{a.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="care-panel">
              <h4>Care Instructions</h4>
              <ul className="care-list">
                {careInstructions.map((c) => (
                  <li key={c}>
                    <Icon name="check" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          RELATED PRODUCTS
      ================================================== */}
      {related.length > 0 && (
        <section className="section" style={{ background: "var(--bg-soft)" }}>
          <div className="container">

            <div className="related-heading">
              <h2 className="serif" style={{ fontSize: "32px" }}>
                You May Also Like
              </h2>
            </div>

            <div className="related-carousel">
              {related.map((p) => (
                <div key={p.slug} className="related-card">
                  <a href={`/products/${p.slug}`} className="related-img">
                    <img src={p.image} alt={`${p.code} door`} />
                  </a>

                  <h4 className="serif">{p.code}</h4>
                  <span>{p.materialShort} Door</span>

                  <a href={`/products/${p.slug}`} className="btn btn-outline btn-sm">
                    View Details
                  </a>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* ==================================================
          BOTTOM CTA BANNER
      ================================================== */}
      <section className="section bottom-cta-section">
        <div className="container">
          <div className="bottom-cta-grid">

            <a
              href={waLink(photoMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bottom-cta-item"
            >
              <span className="bottom-cta-icon bottom-cta-icon-wa">
                <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                  <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.25.62 4.44 1.8 6.36L3.5 29l7.8-2.24a11.98 11.98 0 0 0 4.72.96h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-4.63 1.33 1.36-4.51-.24-.37a9.86 9.86 0 0 1-1.53-5.24C5.56 9.5 10.28 4.8 16.02 4.8c5.74 0 10.44 4.7 10.44 10.44 0 5.75-4.7 10.44-10.44 10.44v.02z" />
                </svg>
              </span>
              <span>
                <strong>Not sure which door you need?</strong>
                <p>
                  Send us a photo of your door/opening and our door expert
                  will help you.
                </p>
                <span className="btn-wa btn-sm">Chat on WhatsApp</span>
              </span>
            </a>

            <a
              href={waLink(callMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="bottom-cta-item"
            >
              <span className="bottom-cta-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M4 5c0 8.3 6.7 15 15 15l3-3-5-4-2 2a11.6 11.6 0 0 1-6-6l2-2-4-5-3 3Z" />
                </svg>
              </span>
              <span>
                <strong>Call Our Door Specialist</strong>
                <p>We're here to help you choose the perfect door.</p>
                <span className="btn btn-outline btn-sm">0300 1234567</span>
              </span>
            </a>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}