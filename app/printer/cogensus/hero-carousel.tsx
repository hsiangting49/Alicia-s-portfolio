"use client";

import { useEffect, useState } from "react";

const screens = [
  { label: "Login", src: "/assets/cogensus/member-login.png", alt: "Member mobile login interface" },
  { label: "Dashboard", src: "/assets/cogensus/member-dashboard-clean.png", alt: "Member mobile dashboard interface" },
];

export default function CogensusHeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setActive((index) => (index + 1) % screens.length), 3800);
    return () => window.clearTimeout(timer);
  }, [active, paused]);

  return (
    <div className="cg-hero-carousel" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <div className="cg-hero-phone device-phone-shell">
        <img src={screens[active].src} alt={screens[active].alt} />
      </div>
      <div className="cg-hero-carousel-controls" aria-label="Member mobile screens">
        {screens.map((screen, index) => (
          <button key={screen.label} type="button" className={active === index ? "is-active" : ""} aria-pressed={active === index} onClick={() => setActive(index)}>
            {screen.label}
          </button>
        ))}
      </div>
    </div>
  );
}
