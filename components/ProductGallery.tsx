"use client";

import { useEffect, useRef, useState } from "react";

interface ProductGalleryProps {
  images: string[];
  code: string;
  bestSeller?: boolean;
}

export default function ProductGallery({
  images,
  code,
  bestSeller,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const stripRef = useRef<HTMLDivElement>(null);

  const activeImage = images[activeIndex];

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollThumbs = (dir: 1 | -1) => {
    const el = stripRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 120, behavior: "smooth" });
  };

  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsFullscreen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFullscreen, images.length]);

  return (
    <>
      {/* Main Gallery */}
      <div className="product-gallery-wrapper">
        <div
          className="product-gallery img-reveal"
          onClick={() => setIsFullscreen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") setIsFullscreen(true);
          }}
        >
          {bestSeller && (
            <span className="gallery-badge">Best Seller</span>
          )}

          <img src={activeImage} alt={`${code} door`} />

          <div className="gallery-view-label">Click to view full screen</div>
        </div>

        {/* Thumbnails with nav arrows */}
        {images.length > 1 && (
          <div className="product-thumbnails-row">
            <button
              type="button"
              className="thumb-nav-btn"
              onClick={() => scrollThumbs(-1)}
              aria-label="Scroll thumbnails left"
            >
              ‹
            </button>

            <div className="product-thumbnails" ref={stripRef}>
              {images.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  type="button"
                  className={`product-thumbnail ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img src={image} alt={`${code} view ${index + 1}`} />
                </button>
              ))}
            </div>

            <button
              type="button"
              className="thumb-nav-btn"
              onClick={() => scrollThumbs(1)}
              aria-label="Scroll thumbnails right"
            >
              ›
            </button>
          </div>
        )}
      </div>

      {/* FULL SCREEN VIEWER */}
      {isFullscreen && (
        <div
          className="product-lightbox"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setIsFullscreen(false)}
            aria-label="Close"
          >
            ×
          </button>

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-arrow lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              aria-label="Previous image"
            >
              ←
            </button>
          )}

          <div
            className="lightbox-image-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activeImage} alt={`${code} fullscreen`} />
          </div>

          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-arrow lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              aria-label="Next image"
            >
              →
            </button>
          )}

          {images.length > 1 && (
            <div
              className="lightbox-thumbnails"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((image, index) => (
                <button
                  key={`${image}-lightbox-${index}`}
                  type="button"
                  className={`lightbox-thumbnail ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <img
                    src={image}
                    alt={`${code} thumbnail ${index + 1}`}
                  />
                </button>
              ))}
            </div>
          )}

          <div className="lightbox-counter">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}