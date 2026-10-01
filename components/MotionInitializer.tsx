"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function MotionInitializer() {
  const pathname = usePathname();

  useEffect(() => {
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (!revealItems.length) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      document.documentElement.classList.add("motion-reduced");
      revealItems.forEach((item) => {
        item.dataset.revealed = "true";
      });
      return;
    }

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.dataset.revealed = "true";
            observer.unobserve(target);
          }
        });
      },
      {
        rootMargin: "0px 0px -6% 0px",
        threshold: 0.04,
      },
    );

    revealItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
