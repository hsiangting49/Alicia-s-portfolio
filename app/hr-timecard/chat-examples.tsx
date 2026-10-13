import ImageLightbox from './image-lightbox';
import styles from './chat-examples.module.css';

export default function ChatExamples() {
  return <figure className={styles.figure} id="chat-examples">
    <div className={styles.canvas}>
      <div className={styles.background} aria-hidden="true" />
      <header><span>Questions grounded in the uploaded records</span><strong>Two ways to ask.</strong></header>
      <div className={styles.examples}>
        <div className={styles.card}>
          <span className={styles.label}>01 / Summarize attendance</span>
          <ImageLightbox src="/assets/printer/projects/hr-chat-report-safe.png" alt="Question requesting an employee attendance report, followed by the report period, record counts and overall status" label="Enlarge attendance summary conversation" />
          <p>No schedules or expected workdays are provided, so the report cannot determine absences.</p>
        </div>
        <div className={styles.card}>
          <span className={styles.label}>02 / Look up lunch times</span>
          <ImageLightbox src="/assets/printer/projects/hr-chat-lunch-safe.png" alt="Question: who has lunch after 14. The answer states its assumption: returning from lunch after 14:00." label="Enlarge lunch-time conversation" />
          <p>The answer makes its interpretation explicit: returning from lunch, not starting it.</p>
          <div className={styles.excerpt}>“No listed employee started lunch after 14:00.”</div>
          <small>Closing sentence from the response.</small>
        </div>
      </div>
    </div>
    <figcaption>Actual conversation excerpts. Employee-level records are cropped out. Answers use the current filtered data; attendance rules are calculated separately.</figcaption>
  </figure>;
}
