import type { Metadata } from "next";
import PortfolioNav from "../portfolio-nav";
import PortfolioReturnLink from "../portfolio-return-link";
import FinalDesignTour from "./final-design-tour";

export const metadata: Metadata = {
  title: "AI HR Timecard Assistant — Hsiang-Ting Lin",
  description:
    "A self-initiated internal tool that reduced a three-hour manual timecard review to a focused 15–30 minute first pass.",
};

const process = [
  ["01", "Frame the workflow", "Map the inputs, decisions, exceptions, and follow-up."],
  ["02", "Define rules with AI support", "Turn policy language and recurring cases into structured logic."],
  ["03", "Write functional specs", "Define inputs, outputs, states, and edge cases before building."],
  ["04", "Prototype + test", "Compare a small sample with manual review; test false positives, false negatives, and regressions."],
  ["05", "Draft in Figma + refine", "Translate the proven workflow into a clear interface, then build the final tool."],
];

const before = ["Multiple exports", "Manual merge", "Scan every record", "Re-open files", "Follow up"];
const after = ["Import source data", "Consolidated review", "Inspect flagged exceptions", "Confirm and act"];

export default function HrTimecardCaseStudy() {
  return (
    <main className="hr-case" id="top">
      <PortfolioNav />

      <header className="hr-case-hero">
        <div className="hr-case-wrap hr-case-hero-grid">
          <div className="hr-case-hero-copy">
            <p className="hr-case-eyebrow">Awesung Tech · Self-initiated internal tool</p>
            <h1>AI HR Timecard Assistant</h1>
            <p className="hr-case-lead">Turning a 3-hour manual review into a 15–30 minute first pass.</p>
            <p className="hr-case-context">
              I found a recurring gap between what the timekeeping system exported and what HR actually needed to review.
            </p>
            <dl className="hr-case-meta">
              <div><dt>Role</dt><dd>Problem framing · Workflow design · Prototyping · Validation</dd></div>
              <div><dt>Tools</dt><dd>Codex · Figma · Python · Streamlit · Excel</dd></div>
            </dl>
          </div>
          <figure className="hr-case-hero-visual">
            <span aria-hidden="true">Internal workflow prototype</span>
            <img src="/assets/printer/projects/hr-timecard-laptop.png" alt="AI HR Timecard Assistant displayed on a laptop" />
          </figure>
        </div>
      </header>

      <section className="hr-case-section hr-case-discovery">
        <div className="hr-case-wrap">
          <div className="hr-case-heading">
            <p className="hr-case-eyebrow">01 / Finding the opportunity</p>
            <h2>The same manual work kept appearing in different forms.</h2>
            <p>
              The timekeeping system was the source of truth, but reviewing payroll meant scanning for exceptions, waiting for employee confirmation, correcting records in the system, then exporting and reorganizing the data for four staffing partners. When an employee, staffing partner, or accounting asked a question later, I had to retrace that path across separate records.
            </p>
          </div>

          <div className="hr-case-metrics" aria-label="Workflow scale">
            <p className="hr-case-metrics-label">One weekly review</p>
            <div className="hr-case-metric-primary"><strong>～ 360</strong><span>records to review</span></div>
            <dl className="hr-case-metric-context"><div><dt>30</dt><dd>employees</dd></div><div><dt>4</dt><dd>staffing companies</dd></div></dl>
          </div>

          <div className="hr-case-examples">
            <article className="hr-case-example">
              <div className="hr-case-example-title">
                <span>Example A</span><div><p>Data preparation</p><h3>Two punch rows had to become one daily record.</h3></div>
              </div>
              <div className="hr-case-merge-graphic" role="img" aria-label="Two punch rows merge into one complete daily employee record">
                <div className="hr-case-source-records">
                  <div><span>Morning</span><b>08:05 → 12:01</b></div>
                  <div><span>Afternoon</span><b>12:45 → 17:58</b></div>
                </div>
                <div className="hr-case-graphic-action"><span>Merge</span><b>→</b></div>
                <div className="hr-case-complete-record">
                  <span>Complete daily record</span>
                  <div><i /><i /><i /><i /></div>
                  <b>8.88 hours</b>
                </div>
              </div>
              <p className="hr-case-caption">Each employee generated two punch rows per day. I paired the morning and afternoon rows by employee and date to reconstruct one complete daily record before review.</p>
            </article>

            <article className="hr-case-example">
              <div className="hr-case-example-title">
                <span>Example B</span><div><p>Exception review</p><h3>Valid records and anomalies looked almost the same.</h3></div>
              </div>
              <div className="hr-case-anomaly-graphic" role="img" aria-label="Three similar timecard records with one missing lunch punch highlighted for review">
                <div><span>A001</span><i /><i /><i /><i /><b>Ready</b></div>
                <div className="is-flagged"><span>A014</span><i /><i /><i className="is-missing" /><i /><b>Review</b></div>
                <div><span>A026</span><i /><i /><i /><i /><b>Ready</b></div>
              </div>
              <div className="hr-case-tags"><span>Missing punch</span><span>Short lunch</span><span>Overtime review</span></div>
              <p className="hr-case-caption">Seven recurring exception categories depended on manual review and employee confirmation.</p>
            </article>
          </div>

          <aside className="hr-case-opportunity">
            <p>Design opportunity</p>
            <div>
              <h3>Automate the repeated first pass.</h3>
              <span>Reduce manual preparation and surface exceptions sooner — while keeping the final decision with the HR reviewer.</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="hr-case-section hr-case-process-section">
        <div className="hr-case-wrap">
          <div className="hr-case-heading hr-case-heading-wide">
            <p className="hr-case-eyebrow">02 / AI-assisted design process</p>
            <h2>I used AI to make the rules explicit, then tested every assumption.</h2>
            <div className="hr-case-narrative">
              <p>Rather than asking AI to decide which records were correct, I used it to help externalize the review logic I was already applying manually. I remained responsible for defining the workflow, checking each rule against real records, and deciding what entered the product.</p>
              <p>That distinction shaped the process: document the current state first, convert recurring judgment into explicit conditions, then prototype only after the logic held up against edge cases.</p>
            </div>
          </div>
          <ol className="hr-case-process">
            {process.map(([number, title, copy], index) => (
              <li className={index > 0 && index < 4 ? "is-loop" : ""} key={number}>
                <span>{number}</span><h3>{title}</h3><p>{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="hr-case-section hr-case-final" id="final-design">
        <div className="hr-case-wrap">
          <div className="hr-case-heading hr-case-heading-wide">
            <p className="hr-case-eyebrow">03 / Final design</p>
            <h2>A focused review flow built around exceptions — not files.</h2>
            <p>The redesign reorganized the work around one continuous review surface. Instead of reopening files at every step, the reviewer could import the source data, see the size and status of the batch, isolate exceptions, and carry the filtered context into follow-up questions.</p>
          </div>

          <div className="hr-case-flow-compare">
            <div><p>Before</p><ol>{before.map((item) => <li key={item}>{item}</li>)}</ol></div>
            <div className="is-after"><p>After</p><ol>{after.map((item) => <li key={item}>{item}</li>)}</ol></div>
          </div>

          <FinalDesignTour />

          <p className="hr-case-final-note">The tool consolidates data preparation, exception review, follow-up context, and historical questions in one place.</p>
        </div>
      </section>

      <section className="hr-case-section hr-case-outcome">
        <div className="hr-case-wrap hr-case-outcome-grid">
          <div className="hr-case-heading">
            <p className="hr-case-eyebrow">04 / Outcome</p>
            <h2>Less time reconstructing records. More time resolving the right issues.</h2>
            <p>The prototype did not replace payroll judgment. It removed the repetitive preparation around it, giving HR a faster way to find records that actually required attention while preserving a clear path back to the source data.</p>
          </div>
          <div className="hr-case-outcome-content">
            <div className="hr-case-time">
              <span>3 hours</span><b>→</b><strong>15–30<br />minutes</strong>
              <small>Active first-pass review</small>
            </div>
            <ul className="hr-case-impact-grid">
              <li><span>01</span>Faster first-pass review</li>
              <li><span>02</span>Quicker answers for employees, staffing partners, and accounting</li>
              <li><span>03</span>Clearer attendance visibility for operations managers</li>
              <li><span>04</span>Better context for paid leave and labor-related costs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="hr-case-future">
        <div className="hr-case-wrap">
          <p className="hr-case-eyebrow">Future direction</p>
          <h2>From a standalone tool toward a connected attendance workflow.</h2>
          <p className="hr-case-future-intro">The next step would connect corrections and inquiry history to the same record, so a question from an employee or staffing partner could be answered without reconstructing the review again.</p>
          <ol className="hr-case-future-steps">
            <li><span>01</span><b>Timekeeping</b></li>
            <li><span>02</span><b>Review</b></li>
            <li><span>03</span><b>Correction</b></li>
            <li><span>04</span><b>Inquiry history</b></li>
            <li><span>05</span><b>Attendance reporting</b></li>
          </ol>
          <div className="hr-case-future-footer">
            <p>Keep attendance and payroll follow-up on track.</p>
          </div>
        </div>
      </section>

      <nav className="hr-case-return-nav" aria-label="Return to portfolio">
        <div className="hr-case-wrap">
          <PortfolioReturnLink href="/#work">Back to selected work</PortfolioReturnLink>
        </div>
      </nav>
    </main>
  );
}
