"use client";

import MoonSVG from "public/moon.svg";
import SunSVG from "public/sun.svg";
import { useState } from "react";

export default function ThemeToggle() {
  const [enabled, setEnabled] = useState(false);

  const onClick = () => {
    const rootElement = document.querySelector("html");
    enabled
      ? rootElement?.classList.remove("dark")
      : rootElement?.classList.add("dark");
    setEnabled((s) => !s);
  };

  return (
    <button
      className="transition hover:scale-110 active:scale-90"
      onClick={onClick}
    >
      {enabled ? (
        <SunSVG width={32} height={32} />
      ) : (
        <MoonSVG width={32} height={32} />
      )}
    </button>
  );
}
