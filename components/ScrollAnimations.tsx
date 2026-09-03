"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      "[data-reveal], .img-reveal, .stagger-grid"
    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          entry.target.classList.add("revealed");

          observer.unobserve(entry.target);
        });
      },
      // {
      //   threshold: 0.12,
      //   rootMargin: "0px 0px -60px 0px",
      // }
      {
  threshold: 0.05,
  rootMargin: "0px 0px 0px 0px",
}
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}