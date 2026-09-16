"use client";

import { type MouseEvent, useEffect, useRef, useState } from "react";
import PortfolioNav from "./portfolio-nav";
import PortfolioReturnLink from "./portfolio-return-link";

const projects = [
  {
    number: "03",
    title: "Cogensus",
    eyebrow: "UX/UI design · Mental wellness",
    description:
      "Creating a clearer, more consistent care experience across patient and clinical workflows.",
    visual: "cogensus",
    href: "/printer/cogensus",
    tone: "blue",
  },
  {
    number: "02",
    title: "EldersConnect",
    eyebrow: "UX research · Product design",
    description:
      "Designing a trustworthy AI assistant that supports independence and human connection.",
    visual: "elders",
    href: "/printer/eldersconnect",
    tone: "coral",
  },
  {
    number: "01",
    title: "AI HR Timecard Assistant",
    eyebrow: "AI workflow · Internal tool",
    description:
      "Turning a fragmented weekly review into a focused, auditable first pass.",
    visual: "hr",
    href: "/printer/hr-timecard",
    tone: "lime",
  },
];

const experiences = [
  {
    dates: "Jul 2026 – Present",
    role: "Training & Employee Communications Coordinator",
    place: "Awesung Tech Inc. · Internal tools & operations",
    summary:
      "Framed a high-effort payroll workflow across ~360 weekly records and built a Python/Streamlit prototype that reduced active first-pass review from ~3 hours to 15 – 30 minutes.",
  },
  {
    dates: "Oct 2025 – Apr 2026",
    role: "UX/UI Designer",
    place: "Cogensus · Contractor · Mental wellness platform",
    summary:
      "Led end-to-end product design across 18+ user flows and 50+ responsive screens, while building a 30+ component design system and clearer engineering handoffs.",
  },
  {
    dates: "Sep 2024 – Mar 2025",
    role: "UX/UI Designer",
    place: "AaronBux · Contract · SaaS fintech",
    summary:
      "Led 0-to-1 design for 5 portfolio and savings workflows across 4 asset categories, from information architecture and MVP decisions to AI feature scoping with engineering.",
  },
  {
    dates: "Jan 2025 – May 2025",
    role: "UX Researcher & Product Designer",
    place: "EldersConnect · Selected project",
    summary:
      "Interviewed 5 adults ages 62 – 88 and translated findings about AI comprehension, privacy, dependency, and trust into product positioning and interaction decisions.",
  },
];

const lifeItems = [
  "Loving winter",
  "Photography",
  "Design",
  "Baking",
];

const lifeImages: Record<string, string[]> = {
  "Loving winter": [
    "/assets/printer/life/winter-snowboard.jpg",
    "/assets/printer/life/winter-aurora.jpg",
  ],
  Photography: [
    "/assets/printer/life/photography-norway.jpg?v=2",
    "/assets/printer/life/photography-maple.jpg?v=2",
  ],
  Design: [
    "/assets/printer/life/design-tree.jpg",
    "/assets/printer/life/design-sunset.jpg",
  ],
  Baking: [
    "/assets/printer/life/baking-cookies.jpg?v=2",
    "/assets/printer/life/baking-bread.jpg?v=2",
  ],
};

export default function PrinterPrototype() {
  const [activeProject, setActiveProject] = useState("READY");
  const [lifeFront, setLifeFront] = useState<Record<string, number>>(() =>
    Object.fromEntries(lifeItems.map((item) => [item, 1])),
  );
  const stageRef = useRef<HTMLElement>(null);
  const paperRef = useRef<HTMLDivElement>(null);

  const scrollToFirstProject = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const stage = stageRef.current;
    const paper = paperRef.current;
    const project = paper?.querySelector<HTMLElement>('[data-printer-project="01"]');
    const feedStart = paper?.querySelector<HTMLElement>("[data-feed-start]");
    if (!stage || !paper || !project || !feedStart) return;

    const distance = Math.max(
      stage.offsetHeight - window.innerHeight - window.innerHeight,
      1,
    );
    const progress = Math.min(
      1,
      Math.max(0, 1 - project.offsetTop / feedStart.offsetTop),
    );
    window.history.replaceState(null, "", "#work");
    window.scrollTo({
      top: stage.offsetTop + progress * distance,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let frame = 0;
    const updateFeed = () => {
      frame = 0;
      const stage = stageRef.current;
      const paper = paperRef.current;
      if (!stage || !paper) return;

      const stageTop = stage.offsetTop;
      // One viewport is reserved for the About layer to travel from the
      // bottom edge to the top while the finished printer scene stays pinned.
      const curtainDistance = window.innerHeight;
      const distance = Math.max(
        stage.offsetHeight - window.innerHeight - curtainDistance,
        1,
      );
      const progress = Math.min(
        1,
        Math.max(0, (window.scrollY - stageTop) / distance),
      );
      const feedStart = paper.querySelector<HTMLElement>(
        "[data-feed-start]",
      );
      const startingOffset = feedStart?.offsetTop ?? 0;
      paper.style.setProperty(
        "--feed-offset",
        `${-startingOffset * (1 - progress)}px`,
      );
      stage.style.setProperty(
        "--paper-visible-length",
        `${Math.max(0, paper.offsetHeight - startingOffset * (1 - progress))}px`,
      );
      stage.style.setProperty(
        "--intake-progress",
        `${Math.min(1, progress / 0.14)}`,
      );

      const outletPosition = startingOffset * (1 - progress);
      const sections = Array.from(
        paper.querySelectorAll<HTMLElement>("[data-feed-section]"),
      );
      const activeSection = sections.find(
        (section) =>
          outletPosition >= section.offsetTop &&
          outletPosition < section.offsetTop + section.offsetHeight,
      );
      setActiveProject(activeSection?.dataset.feedSection ?? "ABOUT");
    };
    const scheduleFeed = () => {
      if (!frame) frame = window.requestAnimationFrame(updateFeed);
    };
    updateFeed();
    window.addEventListener("scroll", scheduleFeed, { passive: true });
    window.addEventListener("resize", scheduleFeed);
    return () => {
      window.removeEventListener("scroll", scheduleFeed);
      window.removeEventListener("resize", scheduleFeed);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main className="printer-page">
      <PortfolioNav
        homeHref="#top"
        workHref="#work"
        aboutHref="#about"
        contactHref="#contact-footer"
        onWorkClick={scrollToFirstProject}
      />

      <header className="printer-intro" id="top">
        <p className="printer-kicker">Product Designer · UX Research · AI workflows</p>
        <p className="printer-intro-copy">
          I make complex systems easier to understand — and easier to use.
        </p>
      </header>

      <section ref={stageRef} className="printer-stage" id="work" aria-label="Scrolling portfolio printer">
        <div className="printer-rig">
          <div className="printer-machine-wrap">
            <div className="printer-machine">
              <img
                className="printer-machine-back"
                src="/assets/printer/portfolio-fax-blue-v6.png"
                alt="Hand-drawn desktop fax printer"
              />
              <div className="printer-input-sheet" aria-hidden="true">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path className="printer-sheet-edge printer-sheet-edge-top" d="M2.8 1.8 C18 .5 31 2.7 46 1.1 C63 -.2 79 2.6 97.2 1.5" />
                  <path className="printer-sheet-edge" d="M2.8 1.5 C1.7 24 3.5 43 2.2 61 C1.2 76 3.2 90 2.5 100" />
                  <path className="printer-sheet-edge" d="M97.2 1.5 C98.5 20 96.8 39 98 58 C99 75 97 90 97.6 100" />
                  <path className="printer-sheet-edge printer-sheet-edge-soft" d="M3.5 2 C2.2 19 4.1 38 2.9 55 M2.6 63 C1.8 76 3.7 89 3 99" />
                  <path className="printer-sheet-edge printer-sheet-edge-soft" d="M96.5 2 C98 17 96.2 34 97.3 50 M97.6 59 C98.5 73 96.5 88 97 99" />
                </svg>
              </div>
              <div className="printer-display" aria-live="polite">
                <span className="printer-display-wash" aria-hidden="true" />
                <span className="printer-display-default">
                  {activeProject === "READY"
                    ? "Hi, I'm Hsiang-Ting"
                    : activeProject === "ABOUT"
                      ? "04 / 04"
                      : `${activeProject} / 04`}
                </span>
                <span className="printer-display-principle printer-display-principle-green">User first</span>
                <span className="printer-display-principle printer-display-principle-pink">Stay curious</span>
                <span className="printer-display-principle printer-display-principle-yellow">Adapt with care</span>
              </div>
              <div className="printer-controls" aria-label="Quick navigation">
                <button
                  className="printer-control printer-control-work"
                  type="button"
                  aria-label="Show design principle: User first"
                ><span className="printer-control-wash" aria-hidden="true" /></button>
                <button
                  className="printer-control printer-control-about"
                  type="button"
                  aria-label="Show design principle: Stay curious"
                ><span className="printer-control-wash" aria-hidden="true" /></button>
                <button
                  className="printer-control printer-control-contact"
                  type="button"
                  aria-label="Show design principle: Adapt with care"
                ><span className="printer-control-wash" aria-hidden="true" /></button>
                <a className="printer-control printer-control-main" href="#work" aria-label="Restart selected projects">
                  <span className="printer-control-main-label" aria-hidden="true">Restart</span>
                </a>
              </div>
            </div>
          </div>

          <div className="printer-feed-window">
            <div className="printer-paper-viewport">
              <svg className="printer-paper-side-outline" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <path className="printer-paper-edge-base" d="M7.15 0 C6.35 13 6.45 24 5.45 37 C4.25 51 4.75 62 3.45 75 C2.55 85 1.35 94 .15 100" />
                <path className="printer-paper-edge-base" d="M92.85 0 C93.65 13 93.55 24 94.55 37 C95.75 51 95.25 62 96.55 75 C97.45 85 98.65 94 99.85 100" />
                <path className="printer-paper-edge-grain" d="M6.82 1 C6.15 11 6.25 20 5.7 29 M5.3 35 C4.55 46 4.85 55 4.05 65 M3.55 72 C2.75 82 1.75 91 .55 98" />
                <path className="printer-paper-edge-grain" d="M93.18 1 C93.85 11 93.75 20 94.3 29 M94.7 35 C95.45 46 95.15 55 95.95 65 M96.45 72 C97.25 82 98.25 91 99.45 98" />
              </svg>
              <div ref={paperRef} className="printer-paper">
                <svg className="printer-paper-outline" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M.9 100 C16 99.45 28 100.35 40 99.75 C55 99.2 68 100.4 80 99.72 C88 99.35 94 100.15 99.1 100" />
                  <path className="printer-paper-outline-soft" d="M1.2 99.82 C18 99.1 31 100.5 45 99.62 M52 99.78 C67 99.25 82 100.38 98.8 99.7" />
                </svg>
                <footer className="printer-contact" id="contact" data-feed-section="ABOUT">
                  <p>Beyond the projects</p>
                  <h2>Now, a little about the person behind the work.</h2>
                  <a href="#about">Meet the designer ↓</a>
                </footer>

                {projects.map((project) => (
                  <article
                    className={`printer-project printer-project-${project.tone}`}
                    data-printer-project={project.number}
                    data-feed-section={project.number}
                    key={project.number}
                  >
                    <div className="printer-project-meta">
                      <span>{project.number}</span>
                      <p>{project.eyebrow}</p>
                    </div>
                    <h2>{project.title}</h2>
                    <p className="printer-project-copy">{project.description}</p>
                    <a
                      className={`printer-project-image-link ${project.href ? "" : "is-static"}`}
                      href={project.href ?? undefined}
                      aria-disabled={!project.href}
                      aria-label={`View ${project.title} project`}
                    >
                    <div className={`printer-project-image printer-project-visual-${project.visual}`}>
                      {project.visual === "hr" ? (
                        <img
                          className="printer-device-laptop"
                          src="/assets/printer/projects/hr-timecard-laptop.png"
                          alt="AI HR Timecard Assistant displayed on a laptop"
                        />
                      ) : project.visual === "elders" ? (
                        <div className="printer-device-pair printer-device-pair-elders">
                          <figure className="printer-device-phone printer-device-phone-back device-phone-shell">
                            <img src="/assets/printer/projects/elders-checkin.png" alt="EldersConnect evening check-in screen" />
                          </figure>
                          <figure className="printer-device-phone printer-device-phone-front device-phone-shell">
                            <img src="/assets/printer/projects/elders-main-feed.png" alt="EldersConnect main conversation screen" />
                          </figure>
                        </div>
                      ) : (
                        <div className="printer-device-pair printer-device-pair-cogensus">
                          <figure className="printer-device-browser">
                            <span className="printer-browser-bar" aria-hidden="true"><i /><i /><i /></span>
                            <img src="/assets/printer/projects/cogensus-assessments.png" alt="Cogensus assessment management screen" />
                          </figure>
                          <figure className="printer-device-phone printer-device-phone-cogensus device-phone-shell">
                            <img src="/assets/printer/projects/cogensus-dashboard.png" alt="Cogensus patient dashboard on a phone" />
                          </figure>
                        </div>
                      )}
                    </div>
                    </a>
                    {project.href ? (
                      <a href={project.href}>
                        View project <span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <span className="printer-project-coming-soon">Case study coming soon</span>
                    )}
                  </article>
                ))}

                <div
                  className="printer-ready-buffer"
                  data-feed-section="READY"
                  data-feed-start
                >
                  <p>Available for work</p>
                  <span>
                    Scroll to view
                    <strong>selected projects ↓</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="printer-about-page" id="about">
        <div className="printer-about-content">
          <figure className="printer-about-portrait">
            <img
              src="/assets/printer/about-photo-handdrawn-v2.jpg"
              alt="Hand-drawn portrait of Hsiang-Ting in a snowy mountain village"
            />
          </figure>
          <p className="printer-kicker">A little about me</p>
          <h2>I turn complex workflows into clear, human tools.</h2>
          <p>
            I’m a product designer working across research, systems thinking,
            interaction design, and AI-assisted prototyping. I care about the
            moments where a product must earn trust — not simply attention.
          </p>
          <div className="printer-about-actions">
            <a href="https://www.linkedin.com/in/hsiang-ting/" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a
              href="/assets/Hsiang-Ting-Lin-Resume.pdf"
              download="Hsiang-Ting Lin_Resume.pdf"
            >
              Download résumé ↓
            </a>
          </div>
        </div>

        <section className="printer-experience" id="experience">
          <div className="printer-about-section-heading">
            <p className="printer-kicker">Experience</p>
            <h2>A closer look at where I’ve worked and what I’ve shaped.</h2>
          </div>
          <div className="printer-experience-list">
            {experiences.map((experience) => (
              <article key={`${experience.place}-${experience.dates}`}>
                <span>{experience.dates}</span>
                <div>
                  <h3>{experience.role}</h3>
                  <p className="printer-experience-place">{experience.place}</p>
                  <p>{experience.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="printer-offscreen-life">
          <p className="printer-kicker">Away from the screen</p>
          <h2>Curiosity doesn’t clock out.</h2>
          <div className="printer-life-notes" aria-label="A few things I enjoy">
            {lifeItems.map((item) => (
              <article key={item}>
                <div className="printer-life-images" aria-label={`Two overlapping images for ${item.toLowerCase()}`}>
                  {[0, 1].map((imageIndex) => {
                    const isFront = lifeFront[item] === imageIndex;
                    const imageSrc = lifeImages[item]?.[imageIndex];
                    return (
                      <button
                        className={`printer-life-image ${imageSrc ? "has-image" : ""} ${isFront ? "is-front" : "is-back"}`}
                        type="button"
                        aria-label={`Bring ${imageIndex === 0 ? "first" : "second"} ${item.toLowerCase()} photo to front`}
                        aria-pressed={isFront}
                        onClick={() => setLifeFront((current) => ({ ...current, [item]: imageIndex }))}
                        key={imageIndex}
                      >
                        {imageSrc ? <img src={imageSrc} alt="" /> : null}
                      </button>
                    );
                  })}
                </div>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </section>

        <footer className="printer-about-footer" id="contact-footer">
          <p className="printer-footer-slogan">
            <span>Good ideas get better in a</span>
            <span>good team.</span>
          </p>
          <p className="printer-footer-invite">Let’s connect.</p>
          <div>
            <a href="#experience">Résumé ↗</a>
            <a href="https://www.linkedin.com/in/hsiang-ting/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="mailto:hsiangting051419@gmail.com">Email ↗</a>
          </div>
          <PortfolioReturnLink className="printer-back-top" href="#top" direction="up">Back to top</PortfolioReturnLink>
        </footer>
      </section>
    </main>
  );
}
