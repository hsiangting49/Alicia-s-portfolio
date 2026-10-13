import styles from './report-visual.module.css';

export default function ReportVisual(){return <figure className={styles.figure} id="report-export">
  <div className={styles.canvas}>
    <header><span>From review to export</span><strong>The details behind the output.</strong></header>
    <div className={styles.details}>
      <div className={styles.columns}><span className={styles.label}>Review fields</span><ul>{['Date','Source','Original Raw Records','Issue','Suggested Four Times','Lunch Minutes','Adjusted Lunch Minutes','Adjusted Work Hours','Overtime Hours','Notes'].map(field=><li key={field}><i>✓</i>{field}</li>)}</ul></div>
      <div className={styles.export}><span className={styles.label}>Keep the context</span><p>Original records, suggested times, and calculated hours remain distinct.</p><div className={styles.exportButton}>Export Excel</div><span className={styles.label}>Export the result</span><p>The reviewed data stays ready for the next reporting step.</p></div>
    </div>
  </div>
  <figcaption>Interface details reconstructed from the tool: selectable review fields and the Excel export action.</figcaption>
</figure>}
