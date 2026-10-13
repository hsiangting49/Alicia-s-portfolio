'use client';

import { useEffect, useState } from 'react';
import styles from './story.module.css';

type Section = { id: string; label: string };

export default function StoryContents({ sections }: { sections: Section[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? '');
  useEffect(() => {
    const updateActiveSection = () => {
      const readingLine = window.scrollY + window.innerHeight * 0.28;
      const current = sections.reduce((latest, section) => {
        const element = document.getElementById(section.id);
        return element && element.offsetTop <= readingLine ? section.id : latest;
      }, sections[0]?.id ?? '');
      setActiveId(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('hashchange', updateActiveSection);
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, [sections]);

  return (
    <aside className={styles.contents} aria-label="Story sections">
      <p>In this story</p>
      {sections.map((section) => (
        <a
          href={`#${section.id}`}
          key={section.id}
          className={section.id === activeId ? styles.contentsActive : undefined}
          aria-current={section.id === activeId ? 'location' : undefined}
        >
          {section.label}
        </a>
      ))}
    </aside>
  );
}
