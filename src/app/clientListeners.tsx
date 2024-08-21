"use client";

import { useEffect } from "react";

// event listeners that need references to the document, which only exists client-side
export default function ClientListeners() {
  useEffect(() => {
    // ensure smooth scrolling between sections on the homepage
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();

        const targetElement = document.querySelector(
          anchor.getAttribute("href")!
        );
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return null;
}
