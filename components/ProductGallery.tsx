"use client";

import { useEffect, useState } from "react";

interface ProductGalleryProps {
  images: string[];
  code: string;
}

export default function ProductGallery({
  images,
  code,
}: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const activeImage = images[activeIndex];

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsFullscreen(false);
      }

      if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev + 1) % images.length);
      }

      if (e.key === "ArrowLeft") {
        setActiveIndex(
          (prev) => (prev - 1 + images.length) % images.length
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background page from scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
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
            if (e.key === "Enter" || e.key === " ") {
              setIsFullscreen(true);
            }
          }}
        >
          <img
            src={activeImage}
            alt={`${code} door`}
          />

          <div className="gallery-view-label">
            Click to view full screen
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="product-thumbnails">
            {images.map((image, index) => (
              <button
                key={`${image}-${index}`}
                type="button"
                className={`product-thumbnail ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={image}
                  alt={`${code} view ${index + 1}`}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* FULL SCREEN VIEWER */}
      {isFullscreen && (
        <div
          className="product-lightbox"
          onClick={() => setIsFullscreen(false)}
        >
          {/* Close */}
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setIsFullscreen(false)}
            aria-label="Close"
          >
            ×
          </button>

          {/* Previous */}
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

          {/* Main fullscreen image */}
          <div
            className="lightbox-image-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage}
              alt={`${code} fullscreen`}
            />
          </div>

          {/* Next */}
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

          {/* Bottom thumbnails */}
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

          {/* Image counter */}
          <div className="lightbox-counter">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}