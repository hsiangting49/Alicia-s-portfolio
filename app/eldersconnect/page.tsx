import type { Metadata } from 'next';
import { GroupDemo, RoutineDemo, SharingDemo } from '../DemoCarousels';
import StoryContents from '../hr-timecard/story-contents';
import ImageLightbox from '../hr-timecard/image-lightbox';
import story from '../hr-timecard/story.module.css';
import styles from './case.module.css';
import PortfolioNavigation from '../portfolio-navigation';

export const metadata: Metadata = {
  title: 'EldersConnect — Alicia Lin',
  description: 'How concept evaluation with five older adults reframed an AI companion around practical support, autonomy, and human connection.',
};

const sections = [
  { id: 'overview', label: '01 / Overview' },
  { id: 'research', label: '02 / Research' },
  { id: 'decisions', label: '03 / Design decisions' },
  { id: 'experience', label: '04 / Experience' },
  { id: 'reflection', label: '05 / Reflection' },
];

function Divider() {
  return <svg className={story.brush} viewBox="0 0 1100 8" preserveAspectRatio="none" aria-hidden="true"><path d="M0 3 Q130 1 260 3 T520 2 T780 3 T1100 2 L1100 5 Q930 6 780 5 T520 6 T260 5 L0 5Z" fill="currentColor" /></svg>;
}

const decisions = [
  { number: '01', title: 'Give people a useful reason to begin.', finding: 'Companion framing raised concerns about dependency, surveillance, and replacing real relationships. Direct emotional prompts could feel forced.', response: 'Let practical reminders and shared interests provide an entry point. Emotional reflection can follow when the person chooses.', feature: 'Daily support and optional check-ins' },
  { number: '02', title: 'Make sharing a decision the user can see.', finding: 'Participants wanted to understand what information was collected and shared, and whether they could stop an interaction.', response: 'Build review, editing, and recipient selection into the weekly sharing flow so the person can decide what leaves the app.', feature: 'Review → edit → choose recipients' },
  { number: '03', title: 'Use AI to help existing relationships.', finding: 'Participants responded more positively to support for communication with trusted people than to AI companionship as the main promise.', response: 'Use summaries and reply assistance to help people follow a conversation and prepare their own response.', feature: 'Family group chat assistance' },
];

export default function EldersConnect() {
  return <main className={`${story.page} ${styles.page}`} id="top">
    <PortfolioNavigation />
    <header className={story.hero}>
      <p className={story.note}>A useful assistant starts with listening.</p>
      <p className={story.kicker}>UX research · Product design · AI concept</p>
      <h1>EldersConnect</h1>
      <p className={story.lead}>I set out to design an AI companion. Conversations with older adults changed what the product should offer.</p>
      <p className={story.intro}>I researched, prototyped, and evaluated a mobile concept for adults age 65+. Their feedback redirected the experience toward practical support, visible control, and connection with trusted people.</p>
      <dl className={story.meta}>
        <div><dt>My role</dt><dd>UX research, concept development,<br />prototyping & product design</dd></div>
        <div><dt>Timeline</dt><dd>6 months · 2024–2025</dd></div>
        <div><dt>Project stage</dt><dd>Individual concept study<br />5 evaluation participants, age 65+</dd></div>
      </dl>
      <figure className={story.cover}><img src="/assets/printer/projects/elders-scene-green-small.png" alt="EldersConnect mobile experience on a white pedestal with a subtle green sprig" /><figcaption>A mobile concept exploring everyday support and communication for older adults.</figcaption></figure>
    </header>
    <div className={story.layout}>
      <StoryContents sections={sections} />
      <article className={story.article}>
        <section id="overview">
          <p className={story.kicker}>01 / Overview</p><h2>What role should AI have in an older adult’s day?</h2>
          <p className={story.summary}>The opportunity was to make everyday support easier to access while preserving independence.</p>
          <div className={story.capabilities}><p className={story.kicker}>What this project demonstrates</p><div>
            <article><span>01</span><strong>Research-led direction</strong><p>Used concept feedback to reconsider the product’s central promise.</p></article>
            <article><span>02</span><strong>Interaction design</strong><p>Translated concerns about trust into review and sharing controls.</p></article>
            <article><span>03</span><strong>AI role definition</strong><p>Connected AI assistance to everyday tasks and existing relationships.</p></article>
          </div></div>
          <p>My initial research explored three connected needs: emotional well-being, daily routines, and communication with family or friends. Support for these needs was spread across separate tools, while some companion products relied on devices that stayed at home.</p>
          <p>I explored whether one mobile experience could bring these forms of support together. The first concept gave AI three roles: conversation partner, daily assistant, and communication facilitator.</p>
          <aside className={styles.question}><span>Design question</span><p>How might AI support everyday well-being and human connection while keeping older adults in control?</p></aside>
        </section>
        <section id="research"><Divider />
          <p className={story.kicker}>02 / Research</p><h2>A prototype made the assumptions discussable.</h2>
          <p className={story.summary}>Secondary research shaped the concept; scenario-based sessions tested how people understood it.</p>
          <p>I began with market and literature research, then reviewed related products to identify an opportunity for portable, connected support. I brought those ideas into a prototype so participants could respond to specific situations.</p>
          <div className={story.scale}><small>Concept evaluation</small><div><strong>5</strong><span>participants, age 65+</span></div><div><strong>60–90 min</strong><span>approximately, per interview</span></div><div><strong>4</strong><span>everyday scenarios</span></div></div>
          <h3>Explore the role, as well as the interaction.</h3>
          <p>The sessions covered a mood check-in, medication reminder, weekly update to family, and open conversation with AI. These scenarios let me examine how participants understood the assistance, what felt useful, and where they wanted control.</p>
          <figure className={styles.visual}><div className={styles.canvas}><header><span>Early prototype</span><strong>Three screens used to explore everyday support.</strong></header><div className={styles.screens}>
            {[
              ['wireframe-sleep.png', 'Emotional check-in'],
              ['wireframe-profile.png', 'Daily support overview'],
              ['wireframe-chat.png', 'Open conversation'],
            ].map(([src, label]) => <div key={src}><ImageLightbox src={`/assets/${src}`} alt={`${label} prototype screen`} label={`Enlarge ${label.toLowerCase()}`} /><span>{label}</span></div>)}
          </div></div><figcaption>Early prototype screens. Click to enlarge.</figcaption></figure>
          <p className={styles.note}>These sessions evaluated the concept with a small group. They informed design direction; they do not establish long-term adoption or well-being outcomes.</p>
        </section>
        <section id="decisions"><Divider />
          <p className={story.kicker}>03 / Design decisions</p><h2>The feedback changed what should lead.</h2>
          <p className={story.summary}>Practical assistance and communication with trusted people gave participants a clearer reason to use the product.</p>
          <figure className={styles.visual}><div className={styles.canvas}><header><span>The product pivot</span><strong>From companionship to everyday connection.</strong></header><div className={styles.pivot}><article><span>Initial concept</span><strong>Companion-led</strong><p>One-to-one AI conversation carried the main promise. Group communication played a supporting role.</p></article><span className={styles.arrow} aria-hidden="true">→</span><article><span>Refined direction</span><strong>Connection-led</strong><p>Routines and communication lead the experience. AI assists the person within those activities.</p></article></div></div><figcaption>The evaluation changed the product’s positioning and the priority of its interactions.</figcaption></figure>
          <div className={styles.decisions}>{decisions.map(item => <article key={item.number}><span className={styles.number}>{item.number}</span><h3>{item.title}</h3><div><span>What I heard</span><p>{item.finding}</p></div><div><span>Design response</span><p>{item.response}</p></div><small>{item.feature}</small></article>)}</div>
        </section>
        <section id="experience"><Divider />
          <p className={story.kicker}>04 / Experience</p><h2>Turn the findings into visible choices.</h2>
          <p className={story.summary}>The refined concept connects three kinds of assistance to the decisions people make each day.</p>
          <div className={styles.experiences}>
            <section><div><p className={story.kicker}>01 / Weekly sharing</p><h3>Review what family will receive.</h3><p>A weekly summary moves through review, editing, and recipient selection. The user can see and choose what to share before sending it.</p><p className={styles.intent}>Design intent: make consent part of the interaction.</p></div><figure><SharingDemo /><figcaption>Use the dots to inspect each step.</figcaption></figure></section>
            <section><div><p className={story.kicker}>02 / Daily support</p><h3>Start with something useful.</h3><p>Medication reminders and gentle check-ins offer concrete entry points into the app. They give the person a reason to engage while leaving room to choose how much to discuss.</p><p className={styles.intent}>Design intent: fit assistance into existing routines.</p></div><figure><RoutineDemo /><figcaption>Daily reminders and check-in scenarios.</figcaption></figure></section>
            <section><div><p className={story.kicker}>03 / Group conversation</p><h3>Help people stay part of the conversation.</h3><p>AI can summarize missed messages and help prepare replies. The interaction supports participation in an existing family group.</p><p className={styles.intent}>Design intent: reduce the effort of catching up.</p></div><figure><GroupDemo /><figcaption>A summary flow within a family conversation.</figcaption></figure></section>
          </div>
        </section>
        <section id="reflection"><Divider />
          <p className={story.kicker}>05 / Reflection</p><h2>A promising feature still needs a meaningful role.</h2>
          <p className={story.summary}>The main outcome of this study was a better-defined product direction.</p>
          <p>I began with a broad idea of companionship. Evaluation made me reconsider the reason someone would invite AI into their day. Practical support, clear control, and existing relationships became the basis for the refined concept.</p>
          <p>This strengthened my ability to turn feedback into priorities: change the leading promise, make sharing decisions explicit, and connect assistance to familiar activities.</p>
          <h3>What still needs validation</h3>
          <p>The refined flows need another round of evaluation. I would test whether participants understand the sharing controls, can complete the flows independently, and find the communication assistance useful in their own routines.</p>
          <p>A broader participant group and repeated use over time would also help test how well this direction fits different needs and levels of familiarity with technology.</p>
        </section>
      </article>
    </div>
    <footer className={story.footer}><Divider /><p className={story.note}>Thanks for reading.</p><h2>More things I’ve<br />been figuring out.</h2><a href="/horizon-test#horizon-work">Back to selected work ↗</a><a href="/horizon-test#horizon-contact">Let’s talk</a></footer>
  </main>;
}
