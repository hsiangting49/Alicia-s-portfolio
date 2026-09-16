"use client";

import { useEffect, useState } from "react";

type Frame = { src: string; label: string; alt: string };

function Progress({ frames, step, select, label }: { frames: Frame[]; step: number; select: (index: number) => void; label: string }) {
  return <div className="demo-progress" aria-label={label}>{frames.map((frame, index) => <button type="button" className={index === step ? "active" : ""} onClick={() => select(index)} aria-label={`Show ${frame.label}`} aria-current={index === step ? "step" : undefined} key={frame.label} />)}</div>;
}

const sharingScreens = [
  { src: "/assets/demo/connect-main-feed.png", label: "Main feed", alt: "EldersConnect main feed" },
  { src: "/assets/demo/connect-weekly-report.png", label: "Weekly review", alt: "Weekly wellbeing report" },
  { src: "/assets/demo/connect-share-confirm.png", label: "Review before sharing", alt: "Share review and consent choices" },
  { src: "/assets/demo/connect-recipients.png", label: "Choose trusted people", alt: "Trusted recipient selection" },
  { src: "/assets/demo/connect-recipients.png", label: "Shared with consent", alt: "Trusted recipient selection with sent confirmation" },
];

export function SharingDemo() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tapping, setTapping] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || paused) { setTapping(false); return; }
    const durations = [2600, 2600, 2600, 2600, 3000];
    const tap = step > 0 && step < 4 ? window.setTimeout(() => setTapping(true), durations[step] - 800) : undefined;
    const next = window.setTimeout(() => { setTapping(false); setStep((value) => (value + 1) % sharingScreens.length); }, durations[step]);
    return () => { if (tap) window.clearTimeout(tap); window.clearTimeout(next); };
  }, [step, paused]);
  const hasPopup = step > 0;
  return <div className="demo-carousel" aria-label="Automatic weekly sharing flow" aria-live="polite">
    <div className="demo-phone device-phone-shell" onMouseEnter={() => { setPaused(true); setTapping(false); }} onMouseLeave={() => setPaused(false)}>
      <img className="demo-base" src={sharingScreens[0].src} alt={sharingScreens[0].alt}/>
      <div className={`demo-overlay ${hasPopup ? "is-visible" : ""}`} aria-hidden="true"/>
      {hasPopup && <div className={`demo-popup ${step === 1 ? "is-entering" : "is-static"}`} key={step}><img src={sharingScreens[step].src} alt={sharingScreens[step].alt}/></div>}
      {tapping && <span className={`demo-tap sharing-tap-${step}`} aria-hidden="true"><i/></span>}
      {step === 4 && <img className="demo-sent" src="/assets/demo/connect-sent.png" alt="Sent confirmation"/>}
    </div>
    <div className="demo-caption"><span>{sharingScreens[step].label}</span><Progress frames={sharingScreens} step={step} select={(index) => { setTapping(false); setStep(index); }} label="Weekly sharing carousel steps"/></div>
  </div>;
}

const routineScreens = [
  { src: "/assets/demo/care-main-feed.png", label: "Main feed", alt: "EldersConnect main feed" },
  { src: "/assets/demo/care-checkin.png", label: "Emotional check-in", alt: "Evening emotional check-in for Margaret" },
  { src: "/assets/demo/care-medication.png", label: "Medication reminder", alt: "Evening medication reminder" },
];

export function RoutineDemo() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || paused) return;
    const timer = window.setTimeout(() => setStep((value) => (value + 1) % routineScreens.length), 2600);
    return () => window.clearTimeout(timer);
  }, [step, paused]);
  return <div className="demo-carousel" aria-label="Automatic daily support scenarios" aria-live="polite">
    <div className="demo-phone device-phone-shell" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <img className="demo-base" src={routineScreens[0].src} alt={routineScreens[0].alt}/>
      <div className={`demo-overlay ${step > 0 ? "is-visible" : ""}`} aria-hidden="true"/>
      {step > 0 && <div className="demo-popup is-entering" key={step}><img src={routineScreens[step].src} alt={routineScreens[step].alt}/></div>}
    </div>
    <div className="demo-caption"><span>{routineScreens[step].label}</span><Progress frames={routineScreens} step={step} select={setStep} label="Daily support carousel steps"/></div>
  </div>;
}

const groupScreens = [
  { src: "/assets/demo/group-chat-initial.png", label: "Unread group chat", alt: "Family group chat with unread messages" },
  { src: "/assets/demo/group-chat-tools.png", label: "AI helper tools", alt: "Summary and reply assistance tools" },
  { src: "/assets/demo/group-chat-summary.png", label: "Conversation summary", alt: "AI-generated summary of unread family messages" },
];

export function GroupDemo() {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tapping, setTapping] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || paused) { setTapping(false); return; }
    const duration = 2600;
    const tap = step < 2 ? window.setTimeout(() => setTapping(true), duration - 800) : undefined;
    const next = window.setTimeout(() => { setTapping(false); setStep((value) => (value + 1) % groupScreens.length); }, duration);
    return () => { if (tap) window.clearTimeout(tap); window.clearTimeout(next); };
  }, [step, paused]);
  return <div className="demo-carousel" aria-label="Automatic AI-assisted group chat flow" aria-live="polite">
    <div className="demo-phone device-phone-shell" onMouseEnter={() => { setPaused(true); setTapping(false); }} onMouseLeave={() => setPaused(false)}>
      {groupScreens.map((frame, index) => <img className={`demo-frame ${index === step ? "is-active" : ""}`} src={frame.src} alt={frame.alt} key={frame.src}/>) }
      {tapping && <span className={`demo-tap group-tap-${step}`} aria-hidden="true"><i/></span>}
    </div>
    <div className="demo-caption"><span>{groupScreens[step].label}</span><Progress frames={groupScreens} step={step} select={(index) => { setTapping(false); setStep(index); }} label="Group chat carousel steps"/></div>
  </div>;
}
