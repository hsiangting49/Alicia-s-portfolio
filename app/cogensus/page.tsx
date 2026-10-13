import type { Metadata } from 'next';
import StoryContents from '../hr-timecard/story-contents';
import ImageLightbox from '../hr-timecard/image-lightbox';
import story from '../hr-timecard/story.module.css';
import styles from './case.module.css';
import PortfolioNavigation from '../portfolio-navigation';

export const metadata: Metadata = {
  title: 'Cogensus — Alicia Lin',
  description: 'Connecting roles, permissions, and care workflows across a healthcare SaaS platform.',
};
const sections = [
  { id: 'overview', label: '01 / Overview' },
  { id: 'approach', label: '02 / Approach' },
  { id: 'decisions', label: '03 / Design decisions' },
  { id: 'handoff', label: '04 / Handoff & outcomes' },
  { id: 'reflection', label: '05 / Reflection' },
];
function Divider() { return <svg className={story.brush} viewBox="0 0 1100 8" preserveAspectRatio="none" aria-hidden="true"><path d="M0 3 Q130 1 260 3 T520 2 T780 3 T1100 2 L1100 5 Q930 6 780 5 T520 6 T260 5 L0 5Z" fill="currentColor" /></svg>; }
function Screen({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return <figure className={styles.visual}><div className={styles.canvas}><ImageLightbox src={src} alt={alt} label={`Enlarge ${alt.toLowerCase()}`} /></div><figcaption>{caption} Click to enlarge.</figcaption></figure>;
}
export default function CogensusCaseStudy() {
  return <main className={`${story.page} ${styles.page}`} id="top">
    <PortfolioNavigation />
    <header className={story.hero}>
      <p className={story.note}>Every screen connects to someone else’s experience.</p>
      <p className={story.kicker}>Cogensus · Contract product design</p>
      <h1>AI Healthcare SaaS Platform</h1>
      <p className={story.lead}>I connected early product concepts into mobile and web workflows for members, trusted supporters, and care professionals.</p>
      <p className={story.intro}>My work defined how actions, permissions, and information move between roles, then translated that logic into interfaces and reusable components for engineering handoff.</p>
      <dl className={story.meta}><div><dt>My role</dt><dd>UX/UI design · Interaction flows<br />Design system & engineering handoff</dd></div><div><dt>Timeline</dt><dd>Oct 2025–Apr 2026</dd></div><div><dt>Scope</dt><dd>3 connected roles<br />Mobile & web</dd></div></dl>
      <figure className={story.cover}><ImageLightbox src="/assets/printer/projects/cogensus-scene-spaced.png" alt="Cogensus member mobile interface and care professional web interface presented on a phone and laptop" label="Enlarge Cogensus cover" /><figcaption>Modified member and care professional interfaces across mobile and web. Click to enlarge.</figcaption></figure>
    </header>
    <div className={story.layout}><StoryContents sections={sections} /><article className={story.article}>
      <section id="overview"><p className={story.kicker}>01 / Overview</p><h2>The concepts existed. The connections still needed design.</h2><p className={story.summary}>A member’s action could change what another person needed to see, understand, or do.</p>
        <div className={story.capabilities}><p className={story.kicker}>What this project demonstrates</p><div><article><span>01</span><strong>Systems thinking</strong><p>Defined relationships between roles, information, and actions.</p></article><article><span>02</span><strong>Interaction design</strong><p>Extended concept screens into flows with decisions and states.</p></article><article><span>03</span><strong>Design delivery</strong><p>Built reusable patterns and documented behavior for handoff.</p></article></div></div>
        <aside className={styles.confidentiality}><strong>Confidentiality note</strong><p>Product details, user characteristics, and interface elements have been omitted or modified. This case study focuses on my contribution and design approach.</p></aside>
        <p>When I joined the early-stage team, a small set of screens expressed the core product ideas. Detailed interactions, system states, and relationships between features still needed to be defined.</p>
        <p>The first phase focused on the member’s mobile experience. Designing it also meant anticipating the trusted supporter and care professional: what each role could access, how they could contribute, and what happened when information moved between them.</p>
        <figure className={styles.visual}><div className={styles.canvas}><header><span>My contribution</span><strong>From concept screens to connected workflows.</strong></header><div className={styles.compare}><article><span>Starting point</span><strong>Early interface concepts</strong><p>Core ideas and a few screens; interaction states and cross-role relationships still to define.</p></article><span aria-hidden="true">→</span><article><span>Design handoff</span><strong>Flows, states, and shared patterns</strong><p>End-to-end paths across mobile and web, with permissions and handoffs made explicit.</p></article></div></div><figcaption>A comparison of design scope at the start and at handoff.</figcaption></figure>
      </section>
      <section id="approach"><Divider /><p className={story.kicker}>02 / Approach</p><h2>Map the relationships before designing the screens.</h2><p className={story.summary}>I used mind maps and user flows to make the product’s behavior discussable.</p>
        <p>I mapped features, roles, and information, then developed flows around the decisions a person or the system needed to make. This helped connect individual screens to the wider experience.</p>
        <div className={styles.steps}>{[['01','Map the ecosystem','Explore how features, roles, and information relate.'],['02','Define the flow','Identify actions, permissions, states, and handoffs.'],['03','Design by role','Shape the interface around each person’s responsibilities.'],['04','Align for delivery','Review feasibility and document reusable behavior.']].map(([n,title,copy])=><article key={n}><span>{n}</span><strong>{title}</strong><p>{copy}</p></article>)}</div>
        <h3>Different responsibilities need different views.</h3><p>Members interact with their own activity and sharing choices. Trusted supporters need permitted context to provide support. Care professionals need structured information to review and determine next actions.</p>
        <figure className={styles.visual}><div className={styles.canvas}><header><span>Role-specific interfaces</span><strong>One product, three working contexts.</strong></header><div className={styles.roles}>{[['member-brain-game.png','Member','A focused activity with clear actions and feedback.'],['caregiver-my-family.png','Trusted supporter','Connected people and available support actions.'],['provider-dashboard-2.png','Care professional','Records and trends organized for review.']].map(([src,title,copy])=><article key={src}><ImageLightbox src={`/assets/cogensus/${src}`} alt={`${title} interface`} label={`Enlarge ${title.toLowerCase()} interface`} /><strong>{title}</strong><p>{copy}</p></article>)}</div></div><figcaption>Modified interfaces illustrating each role’s context. Click to enlarge.</figcaption></figure>
      </section>
      <section id="decisions"><Divider /><p className={story.kicker}>03 / Design decisions</p><h2>Design what crosses the boundary between roles.</h2><p className={story.summary}>Access, meaning, and next actions needed to stay coherent as information moved through the system.</p>
        <h3>01 / Reframe information for its purpose.</h3><p>The same underlying activity serves different needs. The member needs personal context and continuity; a supporter needs permitted situational context; a professional needs structured signals for review.</p><p>I used those differences to shape the information hierarchy and available actions, rather than reproducing the same record in every interface.</p>
        <Screen src="/assets/cogensus/provider-manage-tests.png" alt="Modified care professional management interface" caption="The professional view brings management actions, timing, and confirmation states into one working surface." />
        <h3>02 / Keep connected support within clear permissions.</h3><p>I designed both member-initiated sharing and supporter contributions. Members could choose what entered the shared space, while supporters could respond with context and questions.</p>
        <figure className={styles.visual}><div className={`${styles.canvas} ${styles.sharing}`}><div><span>Connected reflection</span><strong>Make the shared space intentional.</strong><p>A shared record creates a place for conversation while the member retains control over what is shared.</p></div><div className={styles.phone}><ImageLightbox src="/assets/cogensus/caregiver-shared-records.png" alt="Modified shared reflection interface" label="Enlarge shared reflection interface" /></div></div><figcaption>Modified supporter interface showing the shared space. Click to enlarge.</figcaption></figure>
        <h3>03 / Make patterns reusable across the product.</h3><p>As the scope expanded, I documented interaction logic, states, and design decisions alongside reusable components. This gave product and engineering a common reference when discussing behavior and feasibility.</p>
        <figure className={styles.visual}>
          <div className={styles.canvas}>
            <header><span>Selected component families</span><strong>Shared patterns, visible states.</strong></header>
            <div className={styles.componentGallery}>
              <div className={styles.confirmationPreview}><span>Confirmation variants</span><ImageLightbox src="/assets/cogensus/confirmation-variants.png" alt="Delete, Send and Skip confirmation component variants" label="Enlarge confirmation component variants" /></div>
              <div className={styles.componentStack}>
                <ImageLightbox src="/assets/cogensus/component-profile.png" alt="Profile information components in collapsed, expanded and location variants" label="Enlarge profile component variants" />
                <ImageLightbox src="/assets/cogensus/component-appointments-v2.png" alt="Appointment options in available, unavailable and selected states" label="Enlarge appointment component states" />
                <ImageLightbox src="/assets/cogensus/component-session.png" alt="Session selection component in selected and unselected states" label="Enlarge session component states" />
              </div>
            </div>
            <div className={styles.componentNotes}><span>Shared: hierarchy, spacing, action placement</span><span>Varies: message, action label, destructive emphasis</span></div>
          </div>
          <figcaption>Selected component variants reconstructed with fictional and placeholder content. Click any image to enlarge.</figcaption>
        </figure>
        <p>Typography, contrast, hierarchy, and interaction clarity were designed with WCAG 2.1 AA principles in mind. This describes the design approach rather than a verified accessibility certification.</p>
      </section>
      <section id="handoff"><Divider /><p className={story.kicker}>04 / Handoff & outcomes</p><h2>A shared reference for an expanding product.</h2><p className={story.summary}>The deliverables connected flow logic, interface states, and reusable components across mobile and web.</p>
        <div className={story.scale}><small>Design delivery</small><div><strong>18+</strong><span>end-to-end workflows</span></div><div><strong>50+</strong><span>mobile & web screens</span></div><div><strong>30+</strong><span>reusable components</span></div></div>
        <h3>Translate expert input into buildable interactions.</h3><p>Founders, researchers, and domain advisors helped clarify needs and constraints. I translated that input into flows and interfaces, then worked with engineers to discuss feasibility and prepare the designs for development.</p>
        <aside className={styles.outcome}><strong>4–5 → ~2</strong><span>Approximate design review rounds</span><p>Explicit flows and reusable patterns gave the team a clearer reference for feedback. This is an observed collaboration change, rather than a measured user or clinical outcome.</p></aside>
      </section>
      <section id="reflection"><Divider /><p className={story.kicker}>05 / Reflection</p><h2>The difficult decisions lived between screens.</h2><p className={story.summary}>Designing the system meant understanding how one person’s choices affect another person’s experience.</p>
        <p>The work made me more deliberate about who can act, who can see, and how information changes meaning as it moves between roles. Mapping those relationships helped me identify decisions that a single screen could not resolve.</p><p>I also learned the value of a shared interaction language. Flows, states, and reusable patterns made discussions with domain experts and engineers more concrete as the product expanded.</p>
        <h3>What the evidence shows</h3><p>This case study demonstrates design coverage and collaboration at handoff. The material presented here does not establish adoption, usability gains, or clinical outcomes. Those require evaluation of the implemented experience.</p>
      </section>
    </article></div>
    <footer className={story.footer}><Divider /><p className={story.note}>Thanks for reading.</p><h2>More things I’ve<br />been figuring out.</h2><a href="/horizon-test#horizon-work">Back to selected work ↗</a><a href="/horizon-test#horizon-contact">Let’s talk</a></footer>
  </main>;
}
