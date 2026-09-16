"use client";

import { useState } from "react";

const features = [
  {
    number: "01",
    className: "is-import",
    label: "Import source CSV",
    title: "Import + consolidate",
    copy: "Upload the exported CSV and begin analysis in one place.",
  },
  {
    number: "02",
    className: "is-summary",
    label: "Review at a glance",
    title: "Review summary",
    copy: "See merged records, exceptions, and pending updates before going row by row.",
  },
  {
    number: "03",
    className: "is-results",
    label: "Filter and inspect results",
    title: "Filter + inspect",
    copy: "Move between daily records, exceptions, and summaries without reopening spreadsheets.",
  },
  {
    number: "04",
    className: "is-ai",
    label: "Ask about filtered records",
    title: "Ask the record",
    copy: "Use the current filtered results to answer follow-up questions without recalculating rules or replacing human judgment.",
  },
];

export default function FinalDesignTour() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mobileOverview, setMobileOverview] = useState(true);

  const selectFeature = (index: number) => {
    setActiveFeature(index);
    setMobileOverview(false);
  };

  return (
    <div className={`hr-case-product-tour ${mobileOverview ? "is-mobile-overview" : ""}`}>
      <figure className="hr-case-interface-map">
        <div
          className={`hr-case-interface-image ${mobileOverview ? "is-overview" : `is-focused ${features[activeFeature].className}`}`}
        >
          <img
            src="/assets/printer/projects/hr-timecard-demo-overview.png"
            alt="AI HR Timecard Assistant showing data import, a review summary, filtered timecard results, and the AI Assistant"
          />
          {features.map((feature, index) => (
            <button
              className={`hr-case-screen-callout ${feature.className} ${activeFeature === index ? "is-active" : ""}`}
              type="button"
              aria-label={`${feature.number} — ${feature.label}`}
              aria-pressed={activeFeature === index}
              aria-controls={`hr-feature-${feature.number}`}
              key={feature.number}
              onClick={() => selectFeature(index)}
              onFocus={() => setActiveFeature(index)}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <b>{feature.number}</b>
            </button>
          ))}
        </div>

        <div className="hr-case-mobile-tour-controls" aria-label="Interface detail controls">
          <button
            className={mobileOverview ? "is-active" : ""}
            type="button"
            aria-pressed={mobileOverview}
            onClick={() => setMobileOverview(true)}
          >
            Overview
          </button>
          {features.map((feature, index) => (
            <button
              className={!mobileOverview && activeFeature === index ? "is-active" : ""}
              type="button"
              aria-label={`${feature.number} — ${feature.label}`}
              aria-pressed={!mobileOverview && activeFeature === index}
              aria-controls={`hr-feature-${feature.number}`}
              key={feature.number}
              onClick={() => selectFeature(index)}
            >
              {feature.number}
            </button>
          ))}
        </div>
      </figure>

      <div className="hr-case-features" aria-live="polite">
        {features.map((feature, index) => (
          <article
            className={activeFeature === index ? "is-active" : ""}
            id={`hr-feature-${feature.number}`}
            key={feature.number}
            onMouseEnter={() => setActiveFeature(index)}
          >
            <span>{feature.number}</span>
            <h3>{feature.title}</h3>
            <p>{feature.copy}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
