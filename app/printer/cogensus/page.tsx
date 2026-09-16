import type { Metadata } from "next";
import PortfolioNav from "../portfolio-nav";
import PortfolioReturnLink from "../portfolio-return-link";
import CogensusHeroCarousel from "./hero-carousel";

export const metadata: Metadata = {
  title: "AI Healthcare SaaS Platform at Cogensus — Alicia Lin",
  description: "A confidential product design case study about connected roles, permissions, and care workflows.",
};

const roles = [
  { number: "01", title: "Member", copy: "Interacts directly with the product and retains control over personal information and sharing." },
  { number: "02", title: "Trusted supporter", copy: "Receives permitted context and can contribute to appropriate, connected support." },
  { number: "03", title: "Care professional", copy: "Reviews structured signals and determines when further attention is appropriate." },
];

const buildPhases = [
  ["01", "Map the ecosystem", "Used mind maps to explore relationships between features, roles, and information before defining screens."],
  ["02", "Draft the logic", "Built user flows to identify decisions, permissions, system states, and handoffs."],
  ["03", "Design by role", "Developed distinct interfaces around each role’s context, responsibilities, and information needs."],
  ["04", "Connect the system", "Extended the resulting interaction logic across mobile and web experiences."],
];

function Label({ children }: { children: React.ReactNode }) {
  return <p className="cg-case-label">{children}</p>;
}

function SystemPreview() {
  return (
    <figure className="cg-system-preview" aria-label="Connected three-role product system">
      <span className="cg-system-caption">Connected product ecosystem</span>
      <div className="cg-system-core"><small>Shared product logic</small><strong>Permissions<br />Information<br />Actions</strong></div>
      <div className="cg-system-role is-member"><span>01</span><strong>Member</strong><small>Personal experience</small></div>
      <div className="cg-system-role is-supporter"><span>02</span><strong>Trusted supporter</strong><small>Connected support</small></div>
      <div className="cg-system-role is-professional"><span>03</span><strong>Care professional</strong><small>Structured review</small></div>
      <svg className="cg-system-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M18 31 L50 50" />
        <path d="M82 33 L50 50" />
        <path d="M79 82 L50 50" />
      </svg>
    </figure>
  );
}

export default function CogensusCaseStudy() {
  return (
    <main id="top" className="cg-case">
      <PortfolioNav />

      <section className="cg-case-hero">
        <div className="cg-case-wrap cg-case-hero-grid">
          <div className="cg-case-hero-copy">
            <div>
              <Label>Product design at Cogensus</Label>
              <h1>AI Healthcare<br />SaaS Platform</h1>
              <p className="cg-case-lead">Designing connected mobile and web experiences across multiple roles, permissions, and care workflows.</p>
            </div>
            <dl className="cg-case-meta">
              <div><dt>Role</dt><dd>UX/UI Designer</dd></div>
              <div><dt>Timeline</dt><dd>Oct 2025–Apr 2026</dd></div>
              <div><dt>Scope</dt><dd>Interaction · Systems<br />Mobile · Web</dd></div>
            </dl>
          </div>

          <figure className="cg-hero-mockup">
            <span>Member mobile experience</span>
            <CogensusHeroCarousel />
            <figcaption>Modified product interfaces</figcaption>
          </figure>
        </div>
      </section>

      <section className="cg-confidentiality">
        <div className="cg-case-wrap">
          <strong>Confidentiality note</strong>
          <p>This case study focuses on my role, design process, and systems-thinking approach. Certain product details, user characteristics, and interface elements have been omitted or modified.</p>
        </div>
      </section>

      <section className="cg-case-section cg-starting-point">
        <div className="cg-case-wrap">
          <div className="cg-section-heading">
            <Label>00 / Starting point</Label>
            <h2>The product had core ideas—but not yet a connected experience.</h2>
            <p>When I joined Cogensus, the early-stage team had expressed several product concepts through a small set of early interface screens. The detailed interactions, system states, and relationships between features had not yet been defined.</p>
          </div>
          <div className="cg-before-after">
            <article>
              <Label>Starting point</Label>
              <h3>A few early interface concepts</h3>
              <ul><li>Concept-level screens</li><li>Limited interaction states</li><li>Roles not yet connected</li></ul>
            </article>
            <div className="cg-transform-arrow" aria-hidden="true"><span>→</span><small>My contribution</small></div>
            <article className="is-after">
              <Label>Handoff</Label>
              <h3>A connected product system</h3>
              <ul><li>Complete end-to-end flows</li><li>Cross-role interaction logic</li><li>Mobile and web experiences</li></ul>
            </article>
          </div>
        </div>
      </section>

      <section className="cg-case-section cg-approach">
        <div className="cg-case-wrap">
          <div className="cg-section-heading cg-approach-heading">
            <Label>01 / Inclusive systems approach</Label>
            <h2>Designing for one role meant <mark>anticipating the entire system.</mark></h2>
            <p>Although the first phase focused on the member-facing mobile experience, its features could not be designed in isolation. Every action could eventually affect what another role needed to see, understand, or do.</p>
          </div>

          <div className="cg-process-grid">
            {buildPhases.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>

          <div className="cg-map-board" aria-label="Mind mapping and user flow process">
            <div className="cg-map-tools"><span>Mind maps</span><span>User flows</span><span>Role matrix</span></div>
            <div className="cg-map-node is-center"><small>Feature logic</small><strong>One connected system</strong></div>
            <div className="cg-map-node is-top">Actions</div>
            <div className="cg-map-node is-left">Permissions</div>
            <div className="cg-map-node is-right">Information</div>
            <div className="cg-map-node is-bottom">Handoffs</div>
            <svg viewBox="0 0 900 390" preserveAspectRatio="none" aria-hidden="true">
              <path d="M450 122 L450 68" />
              <path d="M355 188 C285 188 225 175 162 175" />
              <path d="M545 188 C615 188 675 175 738 175" />
              <path d="M450 254 L450 296" />
            </svg>
          </div>
        </div>
      </section>

      <section className="cg-case-section cg-role-section">
        <div className="cg-case-wrap">
          <div className="cg-section-heading"><Label>02 / Designing across roles</Label><h2>One system needed to support three different perspectives.</h2><p>An inclusive approach did not mean giving every role the same experience. It meant considering their different contexts, responsibilities, and information needs from the beginning.</p></div>
          <div className="cg-role-layout">
            <SystemPreview />
            <div className="cg-role-list">{roles.map(role => <article key={role.number}><span>{role.number}</span><div><h3>{role.title}</h3><p>{role.copy}</p></div></article>)}</div>
          </div>
          <div className="cg-role-screens" aria-label="Role-specific product interfaces">
            <figure><div className="cg-role-phone device-phone-shell"><img src="/assets/cogensus/member-brain-game.png?v=20260914-2" alt="Member activity interface" /></div><figcaption><span>Member activity</span><strong>Focused tasks use clear hierarchy, feedback, and large actions.</strong></figcaption></figure>
            <figure><div className="cg-role-phone device-phone-shell"><img src="/assets/cogensus/caregiver-my-family.png?v=20260914-2" alt="Trusted supporter family overview mobile interface" /></div><figcaption><span>Supporter overview</span><strong>Connected people and available actions are organized around support.</strong></figcaption></figure>
            <figure><div className="cg-role-phone cg-role-phone-provider device-phone-shell"><img src="/assets/cogensus/provider-dashboard.png" alt="Provider dashboard showing patient records, trends, and statistics" /></div><figcaption><span>Provider review</span><strong>A data-focused view brings user trends and records together so providers can assess what needs attention.</strong></figcaption></figure>
          </div>
        </div>
      </section>

      <section className="cg-case-section cg-information">
        <div className="cg-case-wrap">
          <div className="cg-section-heading"><Label>03 / Information transformation</Label><h2>The same activity should not look the same to everyone.</h2><p>This was not simply a matter of hiding or showing fields. Information needed to be reframed according to each role’s purpose.</p></div>
          <div className="cg-information-flow">
            <article className="cg-source-card"><Label>Underlying activity</Label><h3>One shared source</h3><p>Conversation, behavior, or product activity creates context within the system.</p></article>
            <div className="cg-flow-branch" aria-hidden="true"><i /><i /><i /></div>
            <div className="cg-view-stack">
              <article><span>Member view</span><strong>Personal context and continuity</strong></article>
              <article><span>Supporter view</span><strong>Clear, permitted situational context</strong></article>
              <article><span>Professional view</span><strong>Structured signals for further review</strong></article>
            </div>
          </div>
          <blockquote className="cg-principle"><Label>Design principle</Label><p>Share the appropriate meaning—not the entire underlying record.</p></blockquote>
          <figure className="cg-provider-evidence">
            <figcaption><Label>Care professional view</Label><h3>Structured actions and status were consolidated into one working surface.</h3><p>The interface brings management, timing, and confirmation states together without exposing the underlying product concept in detail.</p></figcaption>
            <img src="/assets/cogensus/provider-manage-tests.png" alt="Modified care professional management interface" />
          </figure>
        </div>
      </section>

      <section className="cg-case-section cg-control">
        <div className="cg-case-wrap">
          <div className="cg-section-heading"><Label>04 / Control and connected support</Label><h2>Support could be proactive without becoming unrestricted access.</h2><p>I designed two complementary directions of interaction while maintaining clear boundaries around personal information.</p></div>
          <div className="cg-control-grid">
            <article><span>Member-initiated</span><h3>The member chooses what to share and who can receive it.</h3></article>
            <div className="cg-control-link" aria-hidden="true"><span>Permission-aware exchange</span><i>↔</i></div>
            <article><span>Supporter-initiated</span><h3>The supporter can contribute context without gaining unrestricted access.</h3></article>
          </div>
          <figure className="cg-sharing-evidence">
            <div className="cg-sharing-visual"><div className="cg-sharing-phone device-phone-shell"><img src="/assets/cogensus/caregiver-shared-records.png?v=20260914-2" alt="Shared reflection thread between a member and a trusted supporter" /></div></div>
            <figcaption><Label>Connected reflection</Label><h3>A shared record could become a meaningful conversation.</h3><p>Members could choose what entered the shared space. Supporters could respond with context and questions, extending connection without receiving unrestricted access to the member’s full activity.</p></figcaption>
          </figure>
        </div>
      </section>

      <section className="cg-case-section cg-handoff">
        <div className="cg-case-wrap">
          <div className="cg-section-heading"><Label>05 / From concepts to handoff</Label><h2>A reusable system made the expanding product easier to align and build.</h2><p>I documented flow logic, states, and design decisions so product discussions could focus on behavior and feasibility—not only visual preferences.</p></div>
          <div className="cg-output-story">
            <div className="cg-output-primary"><strong>18+</strong><div><Label>Connected coverage</Label><h3>End-to-end workflows across mobile and web</h3><p>The work extended feature concepts into complete paths, including decisions, states, permissions, and cross-role handoffs.</p></div></div>
            <dl className="cg-output-secondary"><div><dt>50+</dt><dd>Mobile and web screens</dd></div><div><dt>30+</dt><dd>Reusable components</dd></div></dl>
          </div>
          <div className="cg-collaboration-flow" aria-label="From expert input to engineering handoff">
            <div><Label>Expert input</Label><p>Founders, researchers, and domain advisors clarified needs and constraints.</p></div><i aria-hidden="true">→</i>
            <div><Label>Interface decisions</Label><p>I translated the input into flows, states, and understandable interactions.</p></div><i aria-hidden="true">→</i>
            <div><Label>Engineering handoff</Label><p>Engineers helped evaluate feasibility and prepare the connected system for development.</p></div>
          </div>
          <aside className="cg-alignment-note"><div><Label>Collaboration outcome</Label><h3>A shared interaction language shortened feedback cycles.</h3><p>Reusable patterns and explicit flow logic gave design and engineering a clearer reference for review.</p></div><div className="cg-alignment-impact"><strong>4 – 5 → ~2</strong><span>approx. design review rounds</span></div></aside>
          <p className="cg-accessibility-note"><strong>Accessible foundations:</strong> Typography, contrast, hierarchy, and interaction clarity followed WCAG 2.1 AA principles.</p>
        </div>
      </section>

      <section className="cg-reflection">
        <div className="cg-case-wrap">
          <Label>06 / Reflection</Label>
          <h2>Systems design is also relationship design.</h2>
          <div className="cg-reflection-note"><p>The hardest decisions were rarely contained within a single screen. They appeared in the relationships between people: who could act, who could see, who remained in control, and how information changed meaning as it moved through the system.</p><p>The result was not simply a larger collection of screens. It was a more coherent product system that preserved the distinct needs of each role.</p></div>
        </div>
      </section>

      <nav className="cg-case-return" aria-label="Return to portfolio"><div className="cg-case-wrap"><PortfolioReturnLink href="/printer#work" direction="back">Back to selected work</PortfolioReturnLink></div></nav>
    </main>
  );
}
