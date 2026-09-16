import type { Metadata } from "next";
import { GroupDemo, RoutineDemo, SharingDemo } from "../../DemoCarousels";
import PortfolioNav from "../portfolio-nav";
import PortfolioReturnLink from "../portfolio-return-link";

export const metadata: Metadata = {
  title: "EldersConnect — Alicia Lin",
  description: "A UX research and product design case study exploring trustworthy conversational AI for older adults.",
};

const researchSteps = [
  { number: "01", title: "Market + literature research", insight: "Emotional well-being, everyday independence, and existing relationships were closely connected needs.", decision: "Explore one mobile experience that could support all three." },
  { number: "02", title: "Competitive analysis", insight: "Companion products often relied on stationary devices, while related support was spread across separate services.", decision: "Focus on portable access and combine practical support with communication." },
  { number: "03", title: "Define + prototype", insight: "The opportunity could be tested through three AI roles: conversation partner, daily assistant, and communication facilitator.", decision: "Build one prototype with four everyday scenarios instead of isolated feature concepts." },
  { number: "04", title: "Concept evaluation", insight: "Five adults age 65+ valued practical support, clear control, and connection more than AI companionship as the main promise.", decision: "Reframe the product from companion-led to connection-led." },
];

const opportunities = [
  ["01", "Portable access", "Support that can move through daily life rather than remain tied to a home device."],
  ["02", "One connected tool", "Bring check-ins, routines, and communication into one understandable experience."],
  ["03", "Multiple support roles", "Explore where AI could assist—and where it should step back."],
];

const scenarios = [
  ["01", "Mood check-in", "Respond to a proactive emotional prompt."],
  ["02", "Medication support", "Complete a routine reminder."],
  ["03", "Weekly sharing", "Review and share an update with family."],
  ["04", "Open conversation", "Decide when and what to discuss with AI."],
];

const findings = [
  ["01", "“Companion” created hesitation.", "Participants associated the framing with dependency, surveillance, or replacing real relationships.", "Reframe AI as a practical tool."],
  ["02", "Control influenced trust.", "Users wanted to know what was collected, shared, and whether they could stop an interaction.", "Surface consent and controls."],
  ["03", "Connection mattered more.", "Participants responded more positively when AI supported communication with trusted people.", "Make connection the product focus."],
];

function Label({ children }: { children: React.ReactNode }) {
  return <p className="ec-case-label">{children}</p>;
}

export default function Home() {
  return (
    <main id="top" className="ec-case">
      <PortfolioNav homeHref="/printer#top" workHref="/printer#work" aboutHref="/printer#about" contactHref="/printer#contact-footer" />

      <section className="ec-case-hero">
        <div className="ec-case-wrap ec-case-hero-grid">
          <div className="ec-case-hero-copy">
            <div><Label>UX research · Product design · AI experience</Label><h1>EldersConnect</h1><p className="ec-case-lead">Designing a trustworthy AI assistant that supports daily independence and strengthens the relationships older adults already value.</p></div>
            <dl className="ec-case-meta">
              <div><dt>Role</dt><dd>UX Researcher<br />Product Designer</dd></div>
              <div><dt>Timeline</dt><dd>6 months<br />2024–2025</dd></div>
              <div><dt>Scope</dt><dd>Individual<br />case study</dd></div>
            </dl>
          </div>
          <figure className="ec-case-hero-visual"><span>Mobile AI concept</span><div className="ec-case-hero-phone device-phone-shell"><img src="/assets/hero-main-feed.png" alt="EldersConnect main feed shown on a phone" /></div></figure>
        </div>
      </section>

      <section className="ec-case-section ec-case-background">
        <div className="ec-case-wrap">
          <div className="ec-case-context-grid">
            <div className="ec-case-heading"><Label>00 / Background &amp; problem definition</Label><h2>Digital support was fragmented—and AI companionship was not automatically the answer.</h2><p>Older adults may move between separate tools for emotional well-being, everyday routines, and communication with family or friends. I saw an opportunity to explore whether conversational AI could make that support easier to access without reducing independence or replacing human relationships.</p></div>
            <aside className="ec-case-question"><Label>Design question</Label><h3>How might AI support daily well-being and human connection while keeping older adults in control?</h3><p>This question set the boundary: non-clinical support, clear user agency, and connection—not substitution.</p></aside>
          </div>
          <div className="ec-case-opportunities">{opportunities.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="ec-case-section ec-case-research">
        <div className="ec-case-wrap">
          <div className="ec-case-heading"><Label>01 / Research approach</Label><h2>Secondary research shaped the first prototype. Concept evaluation changed its direction.</h2><p>The process was intentionally sequential: understand the space, define a testable concept, then use participant feedback to reframe the product.</p></div>
          <div className="ec-case-research-grid">{researchSteps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><div><strong>Insight</strong><p>{step.insight}</p></div><div className="ec-case-decision"><strong>Design decision</strong><p>{step.decision}</p></div></article>)}</div>
        </div>
      </section>

      <section className="ec-case-section ec-case-pivot-section">
        <div className="ec-case-wrap">
          <div className="ec-case-heading"><Label>02 / Product direction</Label><h2>From AI companion to connection facilitator.</h2><p>Concept evaluation showed stronger interest in practical routines and communication with trusted people than in companionship as the product’s main promise.</p></div>
          <div className="ec-case-pivot"><article><Label>Initial concept</Label><h3>Companion-led</h3><p>One-to-one AI conversation led the value proposition. Group communication was secondary.</p></article><div className="ec-case-pivot-arrow"><span aria-hidden="true">→</span><small>Research reframed<br />the AI’s role</small></div><article className="is-refined"><Label>Refined positioning</Label><h3>Connection-led</h3><p>AI supports routines and communication, while human connection becomes the primary value.</p></article></div>
        </div>
      </section>

      <section className="ec-case-section ec-case-evaluation">
        <div className="ec-case-wrap">
          <div className="ec-case-heading"><Label>03 / Concept evaluation</Label><h2>One prototype. Four everyday scenarios.</h2><p>The sessions tested how participants understood emotional support, routine assistance, and AI-supported family communication within the same product.</p></div>
          <div className="ec-case-evaluation-grid">
            <figure className="ec-case-wireframes" aria-label="Three EldersConnect prototype screens"><div className="device-phone-shell"><img src="/assets/wireframe-sleep.png" alt="Bedtime emotional check-in wireframe" /></div><div className="device-phone-shell"><img src="/assets/wireframe-profile.png" alt="Profile, reminders, mood, activities and health wireframe" /></div><div className="device-phone-shell"><img src="/assets/wireframe-chat.png" alt="One-to-one conversational support wireframe" /></div></figure>
            <div className="ec-case-study"><div className="ec-case-study-stats"><div><h3>5</h3><span>participants, age 65+</span></div><div><h3>40–60</h3><span>minute sessions</span></div><div><h3>4</h3><span>scenario-based tasks</span></div><div><h3>1</h3><span>clickable prototype</span></div></div><div className="ec-case-scenarios">{scenarios.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div>
          </div>
        </div>
      </section>

      <section className="ec-case-section ec-case-findings-section">
        <div className="ec-case-wrap">
          <div className="ec-case-heading"><Label>04 / What changed the design</Label><h2>Three findings shaped the product pivot.</h2></div>
          <div className="ec-case-findings">{findings.map(([number, title, copy, decision]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><strong>{decision}</strong></article>)}</div>
          <aside className="ec-case-conversation-insight">
            <div className="ec-case-insight-lead"><Label>Conversation insight</Label><h3>People needed a meaningful reason to begin.</h3></div>
            <div className="ec-case-insight-body">
              <p>For people who were not actively seeking companionship, a direct emotional prompt felt forced. Practical assistance, shared interests, or a reason to connect with someone they already knew offered a more natural entry point—and allowed reflection to emerge on its own.</p>
              <div className="ec-case-insight-response"><span>Design response</span><strong>Lead with assistance, connection, or shared interests—not loneliness.</strong></div>
            </div>
          </aside>
        </div>
      </section>

      <section className="ec-case-section ec-case-refined">
        <div className="ec-case-wrap">
          <div className="ec-case-heading"><Label>05 / Refined experience</Label><h2>AI supports independence. People remain the connection.</h2><p>The refined direction keeps conversation, reminders, and group communication—but changes which value leads the product.</p></div>
          <div className="ec-case-experience-grid"><article><SharingDemo /><h3>Keep connection, keep control.</h3><p>Weekly summaries use review, editing, and recipient controls to preserve privacy and autonomy.</p></article><article><RoutineDemo /><h3>Support that fits into daily life.</h3><p>Gentle check-ins and timely reminders provide practical support without taking control away.</p></article><article><GroupDemo /><h3>Help the conversation continue.</h3><p>AI summarizes missed messages and helps prepare replies—without speaking for the user.</p></article></div>
        </div>
      </section>

      <section className="ec-case-reflection"><div className="ec-case-wrap ec-case-reflection-grid"><div><Label>06 / Reflection</Label><h2>The right feature can still fail under the wrong framing.</h2></div><div className="ec-case-reflection-note"><p>This project shifted my focus from what AI can do to how people understand its role.</p><p>Trust came from clear boundaries, user control, and support for the relationships participants already valued.</p></div></div></section>

      <nav className="ec-case-return" aria-label="Return to portfolio"><div className="ec-case-wrap"><PortfolioReturnLink href="/printer#work" direction="back">Back to selected work</PortfolioReturnLink></div></nav>
    </main>
  );
}
