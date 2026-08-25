import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Loader from "@/components/Loader";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  getProductBySlug,
  getRelatedProducts,
  products,
  categoryInfo,
} from "@/lib/products";
import { waLink } from "@/lib/site";
import "../products.css";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
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

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product, 3);
  const info = categoryInfo[product.category];

  const priceMessage = `Hi WoodLand! I'd like a price for ${product.code} (${product.materialShort}, ${product.size}). Please let me know availability and cost.`;
  const photoMessage = `Hi WoodLand! I'm not sure which door I need. I'm looking at ${product.code} but will send a photo of my existing door/opening for advice.`;

  return (
    <>
      <Loader />
      <Nav />

      <section className="section" style={{ paddingTop: "160px" }}>
        <div className="container">
          <a href="/collections" className="product-back">
            Back to Collections
          </a>

          <div className="product-layout">
            <div className="product-gallery img-reveal">
              <img src={product.image} alt={`${product.code} door`} />
            </div>

            <div className="product-info" data-reveal>
              <span className="tag">{product.materialShort} Door</span>
              <h1 className="serif">{product.code}</h1>
              <p className="material-full">{product.materialLong}</p>

              <div className="product-specs">
                <div className="spec-item">
                  <h5>Size</h5>
                  <p>{product.size}</p>
                </div>
                <div className="spec-item">
                  <h5>Net Weight</h5>
                  <p>{product.nw}</p>
                </div>
                <div className="spec-item">
                  <h5>Material</h5>
                  <p>{product.materialShort}</p>
                </div>
                <div className="spec-item">
                  <h5>Recommended For</h5>
                  <p>{info.recommendedFor}</p>
                </div>
                <div className="spec-item">
                  <h5>Water Resistance</h5>
                  <p>Yes sealed core</p>
                </div>
                <div className="spec-item">
                  <h5>Termite Resistance</h5>
                  <p>Yes no timber core</p>
                </div>
                <div className="spec-item">
                  <h5>Scratch Resistance</h5>
                  <p>{info.scratchResistant ? "Yes" : "Standard"}</p>
                </div>
                <div className="spec-item">
                  <h5>Installation</h5>
                  <p>Available on request</p>
                </div>
              </div>

              <div className="product-features">
                <h5>Key Features</h5>
                <ul>
                  {product.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="product-note" style={{ marginTop: 0, marginBottom: "34px" }}>
                <strong>Available sizes, colours &amp; finishes</strong> — this
                photo shows the standard {product.size} panel. Other sizes,
                colours and finishes may be available ask on WhatsApp for
                the current options and warranty terms.
              </div>

              <div className="product-cta-row">
                <a href={waLink(priceMessage)} target="_blank" rel="noopener noreferrer" className="btn-wa">
                  <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
                    <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.25.62 4.44 1.8 6.36L3.5 29l7.8-2.24a11.98 11.98 0 0 0 4.72.96h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-4.63 1.33 1.36-4.51-.24-.37a9.86 9.86 0 0 1-1.53-5.24C5.56 9.5 10.28 4.8 16.02 4.8c5.74 0 10.44 4.7 10.44 10.44 0 5.75-4.7 10.44-10.44 10.44v.02z" />
                  </svg>
                  Get Price on WhatsApp
                </a>
                <a href="/contact" className="btn">
                  Request a Quote
                </a>
              </div>
              <a
                href={waLink(photoMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-wa-line"
                style={{ opacity: 1, marginTop: "22px" }}
              >
                Not sure this is the right door? <strong>Send us a photo of your existing door/opening →</strong>
              </a>

              <div className="product-note">
                Product photo sourced from the manufacturer&apos;s catalogue.
                Finish and colour may vary slightly from the physical
                sample visit the showroom to confirm before ordering.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {related.length > 0 && (
        <section className="section" style={{ background: "var(--bg-soft)" }}>
          <div className="container">
            <div className="related-heading">
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                More {product.materialShort}
              </span>
              <h2 className="serif" style={{ fontSize: "40px" }}>
                You might also like
              </h2>
            </div>
            <div className="related-grid stagger-grid">
              {related.map((p) => (
                <a
                  key={p.slug}
                  href={`/products/${p.slug}`}
                  className="related-card"
                >
                  <div className="related-img">
                    <img src={p.image} alt={`${p.code} door`} />
                  </div>
                  <h4 className="serif">{p.code}</h4>
                  <span>
                    {p.materialShort} · {p.size}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )} */}

      <Footer />
    </>
  );
}
