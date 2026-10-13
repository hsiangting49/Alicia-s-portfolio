import styles from './story.module.css';

const rows = [
 ['E-001','Alex Morgan','Sep 08','Missing OUT','08:02 / 12:03 / 12:35','Awaiting signature'],
 ['E-002','Jamie Lee','Sep 08','Punch error','08:00 / 12:01 / 12:32 / 17:05','To confirm'],
 ['E-003','Taylor Reed','Sep 09','Lunch <25 min','08:05 / 12:10 / 12:30 / 17:02','To confirm'],
 ['E-004','Sam Rivera','Sep 09','Missing lunch IN','08:01 / 12:00 / 17:04','Awaiting signature'],
 ['E-005','Casey Park','Sep 10','Punch error','08:04 / 12:02 / 12:33 / 17:00','Updated'],
];
export default function WorkflowVisual(){return <figure className={styles.workflowVisual} aria-label="Reconstruction of the manual workflow, using fictional employee records">
 <div className={styles.workflowCanvas}>
  <div className={styles.visualHeading}><span>Before the tool</span><strong>One review. Several places to check.</strong></div>
  <div className={styles.sourceCards}>
   <div className={styles.sourceCard}><span className={styles.sourceIcon}>◷</span><div><strong>Cloud Biometry</strong><small>Export punch records</small></div><span className={styles.fileType}>CSV</span></div>
   <span className={styles.sourcePlus}>+</span>
   <div className={styles.sourceCard}><span className={styles.sourceIcon}>▦</span><div><strong>Staff information</strong><small>Cross-check employee details</small></div></div>
  </div>
  <div className={styles.manualBridge}><svg viewBox="0 0 40 35" aria-hidden="true"><path d="M20 1 Q18 15 20 29 M12 22 L20 30 L27 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg><span>Manually review & record</span></div>
  <div className={styles.tracker}>
   <div className={styles.trackerTitle}><span>▦</span><strong>HR exception tracker</strong><small>My working sheet</small></div>
   <div className={styles.trackerToolbar}><span>▦ Grid view</span><span>Filter</span><span>Sort</span><span className={styles.dataBadge}>Fictional data</span></div>
   <div className={styles.tableScroll} tabIndex={0} role="region" aria-label="Example exception tracker; scroll horizontally to see all columns"><table><thead><tr><th>Employee</th><th>Date</th><th>Exception</th><th>Punch records</th><th>Follow-up</th></tr></thead><tbody>{rows.map((r,i)=><tr key={r[0]}><td><strong>{r[1]}</strong><small>{r[0]}</small></td><td>{r[2]}</td><td><span className={[styles.exceptionTag,styles['tag'+i]].join(' ')}>{r[3]}</span></td><td className={styles.punches}>{r[4]}</td><td><span className={styles.statusDot} data-done={i===4}/>{r[5]}</td></tr>)}</tbody></table></div>
  </div>
  <div className={styles.visualFootnote}><span>Identify exceptions</span><span>Track confirmation</span><span>Record corrections</span></div>
 </div>
 <figcaption>Before building the tool, I cross-checked exported punches and employee details, then maintained this exception tracker by hand. Reconstructed from my working sheet; all records shown are fictional.</figcaption>
 </figure>}
