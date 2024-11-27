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
      className="rounded border border-gray-200 p-2 shadow hover:bg-gray-100 dark:border-slate-600 dark:bg-black dark:hover:bg-slate-800"
      onClick={onClick}
      aria-label="theme toggle"
    >
      {enabled ? (
        <SunSVG width={24} height={24} />
      ) : (
        <MoonSVG width={24} height={24} />
      )}
    </button>
  );
}
