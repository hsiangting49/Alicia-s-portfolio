"use client";

import { type MouseEventHandler, useEffect, useRef, useState } from "react";

type PortfolioNavProps = {
  homeHref?: string;
  workHref?: string;
  aboutHref?: string;
  contactHref?: string;
  onWorkClick?: MouseEventHandler<HTMLAnchorElement>;
};

export default function PortfolioNav({
  homeHref = "/#top",
  workHref = "/#work",
  aboutHref = "/#about",
  contactHref = "/#contact-footer",
  onWorkClick,
}: PortfolioNavProps) {
  const [visible, setVisible] = useState(true);
  const [floating, setFloating] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const currentY = window.scrollY;
      const movement = currentY - lastScrollY.current;

      setFloating(currentY > 48);
      if (currentY < 96) setVisible(true);
      else if (movement > 8) setVisible(false);
      else if (movement < -5) setVisible(true);
      lastScrollY.current = currentY;
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    lastScrollY.current = window.scrollY;
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      className={`portfolio-nav ${visible ? "is-visible" : "is-hidden"} ${floating ? "is-floating" : ""}`}
      aria-label="Portfolio navigation"
    >
      <a className="portfolio-nav-brand" href={homeHref}>H.T. LIN</a>
      <div>
        <a href={workHref} onClick={onWorkClick}>Work</a>
        <a href={aboutHref}>About</a>
        <a href={contactHref}>Contact</a>
      </div>
    </nav>
  );
}
