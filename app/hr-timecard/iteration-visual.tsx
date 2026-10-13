import styles from './iteration.module.css';

export default function IterationVisual() {
  return <figure className={styles.figure} id="refinements">
    <div className={styles.canvas}>
      <header><span>Refining through testing</span><strong>Turn separate checks into a reviewable result.</strong></header>
      <div className={styles.row}>
        <div className={styles.reason}><b>01</b><strong>Combine related findings</strong><span>Each check can return an answer, but the final review must consider them together.</span></div>
        <div className={styles.before}><small>Before · separate answers</small><dl><dt>Issue</dt><dd>Normal</dd><dt>OT Status</dt><dd>Over 30 min · Review</dd></dl></div>
        <div className={styles.after}><small>After · one review outcome</small><span className={styles.blue}>Overtime – Review</span><em>The result tells HR what needs review. Uncertain inputs stay pending.</em></div>
      </div>
      <div className={styles.row}>
        <div className={styles.reason}><b>02</b><strong>Show the original beside the suggestion</strong><span>The lunch field once showed a suggested value, hiding what the punches actually recorded.</span></div>
        <div className={styles.before}><small>Before · one unclear value</small><div className={styles.unclearValue}><span>Lunch Minutes</span><b>30.0</b><em>Recorded or suggested?</em></div></div>
        <div className={styles.after}><small>After · recorded → suggested</small><div className={styles.minutes}><span><b>20</b>Recorded min</span><i>→</i><span><b>30</b>Suggested min</span></div><span className={styles.yellow}>Short Lunch</span><em>The proposal still needs the employee’s signed confirmation.</em></div>
      </div>
      <div className={styles.row}>
        <div className={styles.reason}><b>03</b><strong>Make time readable</strong><span>Decimal hours were easy to misread as hours and minutes.</span></div>
        <div className={styles.before}><small>Before · decimal hours</small><div className={styles.time}>8.75</div></div>
        <div className={styles.after}><small>After · hours & minutes</small><div className={styles.time}>8 <span>hr</span> 45 <span>min</span></div><em>Numeric calculations stay unchanged.</em></div>
      </div>
      <footer>Preserve original records <span>·</span> Suggest only when supported <span>·</span> Keep unresolved cases pending</footer>
    </div>
    <figcaption>Selected refinements from testing the exported data. Values are illustrative; suggested changes are not confirmed employee records.</figcaption>
  </figure>;
}
