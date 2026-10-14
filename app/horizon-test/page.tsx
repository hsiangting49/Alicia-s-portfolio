'use client';

import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import styles from './test.module.css';
import PortfolioNavigation from '../portfolio-navigation';

const clamp = (v: number) => Math.max(0, Math.min(1, v));
function curve(p: number, offset = 0) {
  const bend = 1 - clamp((p - .55) / .45);
  return `M -100 ${220 * bend + offset} Q 700 ${-55 * bend + offset} 1500 ${220 * bend + offset}`;
}
function brush(p: number) {
  const bend = 1 - clamp((p - .55) / .45);
  const points = Array.from({ length: 101 }, (_, i) => {
    const t = i / 100;
    const x = -100 + t * 1600;
    const y = (220 * (1 - t) ** 2 - 110 * t * (1 - t) + 220 * t ** 2) * bend;
    const width = 1.8 + .6 * Math.sin(t * 29) + .3 * Math.sin(t * 127);
    return { x, y, width };
  });
  return `M ${points.map(v => `${v.x},${v.y - v.width}`).join(' L ')} L ${points.reverse().map(v => `${v.x},${v.y + v.width}`).join(' L ')} Z`;
}
const projects = [
  { title: 'AI HR Timecard Assistant', image: '/assets/printer/projects/hr-timecard-scene-preview.png', href: '/hr-timecard', detail: 'Workflow design · Prototyping' },
  { title: 'EldersConnect', image: '/assets/printer/projects/elders-scene-green-small.png', href: '/eldersconnect', detail: 'UX research · Product design' },
  { title: 'AI Healthcare SaaS Platform', image: '/assets/printer/projects/cogensus-scene-spaced.png', href: '/cogensus', detail: 'Product design · Design systems' },
];
const experience = [
  { role: 'Training & Employee Communications Coordinator', company: 'Awesung Tech Inc.', dates: 'Jul 2026 – Present', summary: 'Automating everyday workflows and building internal tools with AI.', project: '/hr-timecard' },
  { role: 'UX/UI Designer', company: 'Cogensus · Contract', dates: 'Oct 2025 – Apr 2026', summary: 'Designing user flows and a shared design system for mental wellness.', project: '/cogensus' },
  { role: 'UX/UI Designer', company: 'AaronBux · Contract', dates: 'Sep 2024 – Mar 2025', summary: 'Designing tools to help people manage investments and savings.' },
  { role: 'UX Researcher & Product Designer', company: 'EldersConnect', dates: 'Jan 2025 – May 2025', summary: 'Shaping an AI companion through conversations with older adults.', project: '/eldersconnect' },
];

export default function HorizonTest() {
  const scene = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const scrollFrame = useRef(0);
  const reduce = useRef(false);
  const [playful, setPlayful] = useState(false);
  const [profileAnimated, setProfileAnimated] = useState(false);
  const [profileVisible, setProfileVisible] = useState(true);
  const [profileEntered, setProfileEntered] = useState(false);
  const [horizonViewHeight, setHorizonViewHeight] = useState(230);
  const [activeSection, setActiveSection] = useState('home');
  const cap = useRef<SVGPathElement>(null);
  const ink = useRef<SVGPathElement>(null);
  const letterPath = useRef<SVGPathElement>(null);
  const designerD = useRef<SVGTSpanElement>(null);
  const flower = useRef<SVGGElement>(null);
  useEffect(() => {
    const timer = window.setTimeout(() => setProfileEntered(true), 1500);
    return () => window.clearTimeout(timer);
  }, []);
  useEffect(() => {
    setProfileAnimated(false);
    if (!profileVisible) return;
    const timer = window.setTimeout(() => setProfileAnimated(true), 1450);
    return () => window.clearTimeout(timer);
  }, [profileVisible]);
  const placeFlower = () => {
    if (!designerD.current || !flower.current) return;
    const box = designerD.current.getExtentOfChar(0);
    flower.current.setAttribute('transform', `translate(${box.x + box.width * .55} ${box.y + 4})`);
  };
  useEffect(() => {
    // Follow the animated glyph's changing size, rather than a viewport-specific position.
    let frame = 0;
    const start = performance.now();
    const follow = () => { placeFlower(); if (performance.now() - start < 450) frame = requestAnimationFrame(follow); };
    frame = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(frame);
  }, [playful]);
  useEffect(() => {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let updateFrame = 0;
    const update = () => {
      updateFrame = 0;
      const node = scene.current;
      if (!node || !stage.current) return;
      const work = stage.current.querySelector<HTMLElement>('[data-work]');
      const horizonSvg = stage.current.querySelector<SVGSVGElement>('[data-horizon] svg');
      if (horizonSvg) setHorizonViewHeight(1400 * 180 / Math.max(1, horizonSvg.getBoundingClientRect().width));
      const stageHeight = Math.max(innerHeight, (work?.offsetHeight ?? 0) + 110);
      node.style.setProperty('--stage-height', `${stageHeight}px`);
      const p = clamp(-node.getBoundingClientRect().top / Math.max(1, innerHeight * .8));
      setProfileVisible(p < .12);
      const readingLine = innerHeight * .3;
      const contactTop = document.getElementById('horizon-contact')?.getBoundingClientRect().top ?? Infinity;
      const aboutTop = document.getElementById('horizon-about')?.getBoundingClientRect().top ?? Infinity;
      setActiveSection(contactTop <= readingLine || (scrollY > innerHeight && scrollY + innerHeight >= document.documentElement.scrollHeight - 4) ? 'contact' : aboutTop <= readingLine ? 'about' : p >= .65 ? 'work' : 'home');
      stage.current.style.setProperty('--progress', String(p));
      stage.current.style.setProperty('--label-opacity', String(1 - clamp((p - .32) / .25)));
      cap.current?.setAttribute('d', `${curve(p)} L 1500 2000 L -100 2000 Z`);
      ink.current?.setAttribute('d', brush(p));
      letterPath.current?.setAttribute('d', curve(p, -24));
      placeFlower();
      stage.current.dataset.moving = String(p > .01);
      stage.current.querySelector<HTMLElement>('[data-hero]')?.toggleAttribute('inert', !media.matches && p > .65);
      stage.current.querySelector<HTMLElement>('[data-work]')?.toggleAttribute('inert', !media.matches && p < .65);
      stage.current.querySelector<HTMLElement>('[data-horizon]')?.toggleAttribute('inert', !media.matches && p > .57);
    };
    const queue = () => { if (!updateFrame) updateFrame = requestAnimationFrame(update); };
    const cancel = () => { cancelAnimationFrame(scrollFrame.current); scrollFrame.current = 0; };
    const preference = () => { reduce.current = media.matches; queue(); };
    preference(); update();
    const observer = new ResizeObserver(queue);
    const work = stage.current?.querySelector<HTMLElement>('[data-work]');
    if (work) observer.observe(work);
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    window.addEventListener('wheel', cancel, { passive: true });
    window.addEventListener('touchstart', cancel, { passive: true });
    window.addEventListener('keydown', cancel);
    media.addEventListener('change', preference);
    return () => {
      cancel(); cancelAnimationFrame(updateFrame);
      observer.disconnect();
      window.removeEventListener('scroll', queue); window.removeEventListener('resize', queue);
      window.removeEventListener('wheel', cancel); window.removeEventListener('touchstart', cancel);
      window.removeEventListener('keydown', cancel); media.removeEventListener('change', preference);
    };
  }, []);
  const goWork = () => {
    const node = scene.current;
    if (!node) return;
    cancelAnimationFrame(scrollFrame.current);
    const from = scrollY;
    const to = scrollY + node.getBoundingClientRect().top + innerHeight * .8;
    if (reduce.current) { document.getElementById('horizon-work')?.scrollIntoView({ behavior: 'instant' }); document.getElementById('horizon-work')?.focus({ preventScroll: true }); return; }
    const start = performance.now();
    const tick = (now: number) => {
      const t = clamp((now - start) / 1050);
      const eased = t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      window.scrollTo({ top: from + (to - from) * eased, behavior: 'instant' });
      if (t < 1) scrollFrame.current = requestAnimationFrame(tick);
      else { scrollFrame.current = 0; document.getElementById('horizon-work')?.focus({ preventScroll: true }); }
    };
    scrollFrame.current = requestAnimationFrame(tick);
  };
  return <main className={styles.page} id="top">
    <PortfolioNavigation homepage active={activeSection} onWork={goWork} onHome={() => { cancelAnimationFrame(scrollFrame.current); window.scrollTo({ top: 0, behavior: reduce.current ? 'instant' : 'smooth' }); history.replaceState(null, '', '#top'); }} />
    <section ref={scene} className={styles.scene}>
      <div ref={stage} className={styles.stage}>
        <div data-hero className={styles.hero}>
          <article className={styles.profile} data-animated={profileAnimated} data-entered={profileEntered}>
            <svg className={styles.profileLeaves} viewBox="0 0 80 65" aria-hidden="true"><path className={styles.leafStem} d="M39 63 C38 52 38 41 41 31" /><g className={styles.leafPair}><path d="M40 36 C29 37 19 31 17 19 C29 17 39 24 40 36Z M40 36 Q30 29 24 24" /><path d="M40 34 C42 21 54 14 65 17 C64 30 54 37 40 34Z M40 34 Q50 25 58 22" /></g></svg>
            <svg className={styles.profileVine} viewBox="0 0 65 170" aria-hidden="true"><path className={styles.vineLine} pathLength="1" d="M19 156 C37 142 38 119 28 99 C20 83 22 65 34 48 C41 38 42 24 37 15" /><g className={styles.vineLeaves}><path d="M34 49 C35 34 46 27 56 29 C56 42 46 51 34 49Z M34 49 Q43 40 50 35" /><path d="M25 80 C13 79 7 70 9 59 C21 60 28 68 25 80Z M25 80 Q18 72 14 65" /><path d="M33 121 C34 109 44 102 54 103 C54 116 45 123 33 121Z M33 121 Q43 112 48 109" /></g></svg>
            <div className={styles.portrait}><img src="/assets/printer/about-photo.jpg" alt="Hsiang-Ting Lin" /></div>
            <p className={styles.name}>Hi, I’m Hsiang-Ting.</p>
            <p>I ask questions, untangle problems,<br />and make things easier to use.</p>
          </article>
        </div>
        <div className={styles.surface}>
          <div data-horizon className={styles.horizon}>
            <svg viewBox={`0 0 1400 ${horizonViewHeight}`} preserveAspectRatio="xMidYMin meet" role="img" aria-label="Product Designer">
              <defs><path ref={letterPath} id="horizon-letter-path" d={curve(0, -24)} /><clipPath id="brush-reveal"><rect className={styles.reveal} x="-100" y="-100" width="1600" height="430" /></clipPath></defs>
              <path ref={cap} className={styles.cap} d={`${curve(0)} L 1500 2000 L -100 2000 Z`} />
              <path ref={ink} className={styles.line} clipPath="url(#brush-reveal)" d={brush(0)} />
              <text className={styles.letters} textAnchor="middle" onMouseLeave={() => setPlayful(false)}><textPath href="#horizon-letter-path" startOffset="50%">{'Product Designer'.split('').map((letter, i) => <tspan key={i} ref={i === 8 ? designerD : undefined} onMouseEnter={i === 8 ? () => setPlayful(true) : undefined} rotate={i === 8 ? (playful ? -22 : -5) : 0} dx={i === 9 && playful ? 12 : undefined} className={i === 8 ? styles.special : ''} style={{ '--letter': i, fontSize: i === 8 && playful ? '62px' : undefined } as CSSProperties}>{letter}</tspan>)}</textPath></text>
              <g ref={flower} className={styles.flower} aria-hidden="true" data-open={playful}>
                <g className={styles.sprout}>
                  <path className={styles.stem} d="M0 0 Q-7 -16 0 -33 M-2 -13 Q-18 -22 -18 -11 Q-8 -6 -2 -13" />
                  <g className={styles.blossom} transform="translate(0 -36)"><path d="M0 -5 C-15 -22 -20 -4 -8 0 C-24 9 -9 21 -3 8 C4 26 18 14 8 3 C27 0 17 -17 5 -7 C8 -26 -11 -24 0 -5Z" /><circle r="5" /></g>
                </g>
              </g>
            </svg>
            <button className={styles.go} onClick={goWork}><span>View my work</span><span aria-hidden="true">↓</span></button>
          </div>
        <section data-work id="horizon-work" tabIndex={-1} className={styles.work}>
          <p className={styles.eyebrow}>Selected Work</p>
          <div className={styles.cards}>{projects.map(project => <a className={styles.card} href={project.href} key={project.title}><div className={styles.image}><img src={project.image} alt={`${project.title} preview`} /></div><h2>{project.title}<span aria-hidden="true">↗</span></h2><p>{project.detail}</p></a>)}</div>
        </section>
        </div>
      </div>
    </section>
    <section id="horizon-about" className={styles.about} aria-labelledby="about-title">
      <p className={styles.eyebrow}>About</p>
      <div className={styles.aboutGrid}>
        <div className={styles.aboutCopy}>
          <p className={styles.note}>A little about how I work.</p>
          <h2 id="about-title">I like figuring<br />things out.</h2>
          <p>I’m Hsiang-Ting, a product designer working across research, interaction design, and prototyping.</p>
          <p>I like figuring out what’s getting in people’s way — asking questions, trying ideas, and seeing what works.</p>
          <p>I’ve worked on mental wellness products, financial tools, and internal workflows. I start by understanding what people need, then work out how the design can help.</p>
          <a className={styles.textLink} href="/assets/Hsiang-Ting-Lin-Resume.pdf" target="_blank" rel="noreferrer">A bit more in my <span className={styles.resumeWord}>résumé</span> <span aria-hidden="true">↗</span></a>
        </div>
        <div className={styles.experience}>
          <p className={styles.listLabel}>Where I’ve been</p>
          {experience.map(item => <article key={item.company} className={styles.experienceRow}><div><h3>{item.project ? <a className={styles.companyLink} href={item.project}>{item.company.split(' · ')[0]}</a> : item.company.split(' · ')[0]}</h3><p className={styles.role}>{item.role}{item.company.includes(' · ') && ' · Contract'}</p></div><p className={styles.date}>{item.dates}</p><p className={styles.experienceSummary}>{item.summary}</p></article>)}
        </div>
      </div>
    </section>
    <section id="horizon-contact" className={styles.contact} aria-labelledby="contact-title">
      <p className={styles.eyebrow}>Contact</p>
      <h2 id="contact-title">Got something<br />on your mind?</h2>
      <p>Have a project in mind, a question, or just want to say hello? I’d love to hear from you.</p>
      <div className={styles.contactActions}>
        <a className={styles.primaryButton} href="mailto:hsiangting051419@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a>
        <div className={styles.socials}><a href="https://www.linkedin.com/in/hsiang-ting/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href="mailto:hsiangting051419@gmail.com">Email <span aria-hidden="true">↗</span></a><a href="/assets/Hsiang-Ting-Lin-Resume.pdf" target="_blank" rel="noreferrer">Résumé <span aria-hidden="true">↗</span></a></div>
      </div>
      <footer className={styles.footer}>Hsiang-Ting Lin <a href="#" aria-label="Back to top">Back to top ↑</a></footer>
    </section>
  </main>;
}
