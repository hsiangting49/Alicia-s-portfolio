'use client';

import styles from './portfolio-navigation.module.css';

type Props = { active?: string; homepage?: boolean; onHome?: () => void; onWork?: () => void };

export default function PortfolioNavigation({ active = 'work', homepage = false, onHome, onWork }: Props) {
  const base = homepage ? '' : '/horizon-test';
  const items = [
    { id: 'home', label: 'Home', href: `${base}#top`, action: onHome },
    { id: 'work', label: 'Work', href: `${base}#horizon-work`, action: onWork },
    { id: 'about', label: 'About', href: `${base}#horizon-about` },
    { id: 'contact', label: 'Contact', href: `${base}#horizon-contact` },
  ];
  return <nav className={styles.nav} aria-label="Portfolio navigation">
    {items.map(item => <a key={item.id} href={item.href} className={active === item.id ? styles.active : undefined} aria-current={active === item.id ? 'location' : undefined} onClick={item.action ? event => { event.preventDefault(); item.action?.(); } : undefined}>{item.label}</a>)}
  </nav>;
}
