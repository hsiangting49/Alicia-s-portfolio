import PortfolioNav from "../portfolio-nav";
import PortfolioReturnLink from "../portfolio-return-link";

const typeStyles = [
  {
    family: "Jacques François",
    role: "Display serif",
    className: "type-guide-display",
    sample: "Clear, human tools.",
    uses: "Project titles · About headlines · Footer statement",
    scale: "38–76px / 400",
  },
  {
    family: "Inter",
    role: "Interface sans",
    className: "type-guide-sans",
    sample: "Product design grounded in people and systems.",
    uses: "Navigation · Body copy · Buttons · Section labels",
    scale: "14–28px / 400–700",
  },
  {
    family: "Courier New",
    role: "Machine mono",
    className: "type-guide-mono",
    sample: "AVAILABLE FOR WORK — 01 / 04",
    uses: "Printer display · Project numbers · Dates · Metadata",
    scale: "12–34px / 400–700",
  },
  {
    family: "Bradley Hand fallback stack",
    role: "Handwritten accent",
    className: "type-guide-hand",
    sample: "Start here — good ideas take time.",
    uses: "Small annotations only",
    scale: "14–20px / 600",
  },
];

export default function PrinterTypeGuide() {
  return (
    <main className="type-guide-page">
      <PortfolioNav />
      <header className="type-guide-header">
        <PortfolioReturnLink href="/#top">Back to portfolio</PortfolioReturnLink>
        <p>Typography asset · current system</p>
        <h1>Four voices,<br />one visual story.</h1>
        <div className="type-guide-summary">
          <strong>Current audit</strong>
          <p>
            The system uses three functional typefaces plus one handwritten accent.
            It is not excessive yet, but the handwriting should stay rare and the mono
            should remain limited to machine-like information.
          </p>
        </div>
      </header>

      <section className="type-guide-list" aria-label="Current typography styles">
        {typeStyles.map((style, index) => (
          <article key={style.family}>
            <div className="type-guide-index">0{index + 1}</div>
            <div>
              <p className="type-guide-role">{style.role}</p>
              <h2>{style.family}</h2>
              <p className={style.className}>{style.sample}</p>
            </div>
            <dl>
              <div>
                <dt>Used for</dt>
                <dd>{style.uses}</dd>
              </div>
              <div>
                <dt>Current scale</dt>
                <dd>{style.scale}</dd>
              </div>
            </dl>
          </article>
        ))}
      </section>

      <footer className="type-guide-verdict">
        <p>Recommended boundary</p>
        <h2>Keep all four, but treat handwriting as an illustration—not a fourth UI font.</h2>
      </footer>
    </main>
  );
}
