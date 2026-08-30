"use client";

import { useMemo, useState } from "react";
import { waLink } from "@/lib/site";

/* ================================================================
   TYPES
   ================================================================
   These are the OPTIONAL fields this component looks for on a
   product. None of them are required — if they're missing from
   lib/products.ts, sensible fallbacks are used instead so nothing
   breaks. Add these to your Product type / data when you're ready
   for per-product accuracy:

   sizes?: string[]            // e.g. ["700 x 2100", "750 x 2100", ...]
   thicknesses?: string[]      // e.g. ["35mm", "40mm"]
   colors?: { name: string; hex: string }[]
   badges?: ("water"|"termite"|"scratch"|"warp"|"maintenance")[]
   bestSeller?: boolean
   description?: string
   ================================================================ */

interface ProductOptionsProps {
  product: any;
}

const DEFAULT_COLORS = [
  { name: "Teak", hex: "#6b4226" },
  { name: "Walnut", hex: "#4a2f23" },
  { name: "Oak", hex: "#b98354" },
  { name: "Wenge", hex: "#2a1a12" },
  { name: "Grey", hex: "#6d6d6d" },
];

const DEFAULT_BADGES = ["water", "termite", "scratch", "warp", "maintenance"];

const BADGE_LABEL: Record<string, string> = {
  water: "Water Resistant",
  termite: "Termite Resistant",
  scratch: "Scratch Resistant",
  warp: "Won't Warp with Weather",
  maintenance: "Zero Maintenance",
};

function BadgeIcon({ type }: { type: string }) {
  const p = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (type) {
    case "water":
      return (
        <svg {...p}>
          <path d="M12 2.5c-3.5 4.6-6.5 8.4-6.5 11.8a6.5 6.5 0 0 0 13 0c0-3.4-3-7.2-6.5-11.8Z" />
        </svg>
      );
    case "termite":
      return (
        <svg {...p}>
          <path d="M12 2 4 5.5v6c0 5 3.4 8.9 8 10.5 4.6-1.6 8-5.5 8-10.5v-6L12 2Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "scratch":
      return (
        <svg {...p}>
          <path d="M12 2 4 5.5v6c0 5 3.4 8.9 8 10.5 4.6-1.6 8-5.5 8-10.5v-6L12 2Z" />
        </svg>
      );
    case "warp":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2v2.4M12 19.6V22M4.2 4.2l1.7 1.7M18.1 18.1l1.7 1.7M2 12h2.4M19.6 12H22M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" />
        </svg>
      );
    case "maintenance":
      return (
        <svg {...p}>
          <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-2.6 2.6-2-2 2.6-2.6Z" />
        </svg>
      );
    default:
      return null;
  }
}

function TrustIcon({ type }: { type: string }) {
  const p = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (type) {
    case "factory":
      return (
        <svg {...p}>
          <path d="M3 21V10l5 3.5V10l5 3.5V10l5 3.5V21H3Z" />
          <path d="M7 21v-4M12 21v-4M17 21v-4" />
        </svg>
      );
    case "install":
      return (
        <svg {...p}>
          <path d="m14.7 6.3-1.4-1.4a2 2 0 0 0-2.8 0L4 11.4a2 2 0 0 0 0 2.8l1.4 1.4a2 2 0 0 0 2.8 0L14.7 9.1a2 2 0 0 0 0-2.8Z" />
          <path d="m17 3 4 4-2 2-4-4 2-2Z" />
        </svg>
      );
    case "warranty":
      return (
        <svg {...p}>
          <path d="M12 2 4 5.5v6c0 5 3.4 8.9 8 10.5 4.6-1.6 8-5.5 8-10.5v-6L12 2Z" />
        </svg>
      );
    case "delivery":
      return (
        <svg {...p}>
          <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
          <circle cx="7.5" cy="18" r="1.6" />
          <circle cx="17.5" cy="18" r="1.6" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ProductOptions({ product }: ProductOptionsProps) {
  const sizes: string[] = useMemo(
    () => (product.sizes?.length ? product.sizes : [product.size]),
    [product]
  );
  const thicknesses: string[] = useMemo(
    () =>
      product.thicknesses?.length
        ? product.thicknesses
        : product.thickness
        ? [product.thickness]
        : ["40mm"],
    [product]
  );
  const colors = product.colors?.length ? product.colors : DEFAULT_COLORS;
  const badges: string[] = product.badges?.length
    ? product.badges
    : DEFAULT_BADGES;

  const [selectedSize, setSelectedSize] = useState(
    sizes.includes(product.size) ? product.size : sizes[0]
  );
  const [selectedThickness, setSelectedThickness] = useState(thicknesses[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [quantity, setQuantity] = useState(1);

  const priceMessage = `Hi WoodLand! I'd like a price for ${product.code} (${product.materialShort}, ${selectedSize}, ${selectedThickness}, ${selectedColor} finish, Qty: ${quantity}). Please let me know availability and cost.`;

  const callBackMessage = `Hi WoodLand! Please have a door specialist call me back about ${product.code}.`;

  return (
    <>
      {/* PERFORMANCE BADGES */}
      <div className="product-badges">
        {badges.map((b) => (
          <div className="product-badge" key={b}>
            <BadgeIcon type={b} />
            <span>{BADGE_LABEL[b]}</span>
          </div>
        ))}
      </div>

      {/* SIZE */}
      <div className="option-group">
        <h5>Size (mm)</h5>
        <div className="option-pills">
          {sizes.map((s: string) => (
            <button
              key={s}
              type="button"
              className={`option-pill ${selectedSize === s ? "active" : ""}`}
              onClick={() => setSelectedSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* THICKNESS */}
      <div className="option-group">
        <h5>Thickness</h5>
        <div className="option-pills">
          {thicknesses.map((t: string) => (
            <button
              key={t}
              type="button"
              className={`option-pill ${
                selectedThickness === t ? "active" : ""
              }`}
              onClick={() => setSelectedThickness(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* FINISH / COLOR */}
      <div className="option-group">
        <h5>Finish / Color</h5>
        <div className="color-swatches">
          {colors.map((c: { name: string; hex: string }) => (
            <button
              key={c.name}
              type="button"
              className={`color-swatch ${
                selectedColor === c.name ? "active" : ""
              }`}
              onClick={() => setSelectedColor(c.name)}
              aria-label={c.name}
            >
              <span
                className="color-swatch-fill"
                style={{ background: c.hex }}
              />
              <span className="color-swatch-label">{c.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* QUANTITY */}
      <div className="option-group">
        <h5>Quantity</h5>
        <div className="quantity-control">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span>{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* CTA */}
      <div className="product-cta-row">
        <a
          href={waLink(priceMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-wa"
        >
          <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M16.02 3C9.4 3 4 8.4 4 15.02c0 2.25.62 4.44 1.8 6.36L3.5 29l7.8-2.24a11.98 11.98 0 0 0 4.72.96h.01c6.62 0 12.02-5.4 12.02-12.02C28.05 8.4 22.65 3 16.02 3zm0 21.9h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-4.63 1.33 1.36-4.51-.24-.37a9.86 9.86 0 0 1-1.53-5.24C5.56 9.5 10.28 4.8 16.02 4.8c5.74 0 10.44 4.7 10.44 10.44 0 5.75-4.7 10.44-10.44 10.44v.02z" />
          </svg>
          Get Price on WhatsApp
        </a>

        <a
          href={waLink(callBackMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M4 5c0 8.3 6.7 15 15 15l3-3-5-4-2 2a11.6 11.6 0 0 1-6-6l2-2-4-5-3 3Z" />
          </svg>
          Request a Call Back
        </a>
      </div>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-item">
          <TrustIcon type="factory" />
          <span>
            Factory
            <br />
            Direct Price
          </span>
        </div>
        <div className="trust-item">
          <TrustIcon type="install" />
          <span>
            Professional
            <br />
            Installation
          </span>
        </div>
        <div className="trust-item">
          <TrustIcon type="warranty" />
          <span>
            Warranty
            <br />
            Assured
          </span>
        </div>
        <div className="trust-item">
          <TrustIcon type="delivery" />
          <span>
            Safe &amp; Secure
            <br />
            Delivery
          </span>
        </div>
      </div>
    </>
  );
}