'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const TAG_ID = '8726cbc61d2b9';
const PRODUCTION_HOST = 'alicia-s-portfolio.vercel.app';

declare global {
  interface Window {
    _uxa?: [string, string][];
  }
}

export default function ContentsquareTracking() {
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);
  const initialPath = useRef(pathname);
  const lastTrackedPath = useRef(pathname);
  const tagLoaded = useRef(false);
  const pendingPath = useRef<string | null>(null);

  useEffect(() => {
    if (window.location.hostname !== PRODUCTION_HOST) return;

    window._uxa = window._uxa || [];
    window._uxa.push(['setPath', window.location.pathname]);
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled || lastTrackedPath.current === pathname) return;

    lastTrackedPath.current = pathname;
    if (tagLoaded.current) {
      window._uxa = window._uxa || [];
      window._uxa.push(['trackPageview', pathname]);
    } else {
      pendingPath.current = pathname;
    }
  }, [enabled, pathname]);

  if (!enabled) return null;

  return (
    <Script
      src={`https://t.contentsquare.net/uxa/${TAG_ID}.js`}
      strategy="afterInteractive"
      onLoad={() => {
        tagLoaded.current = true;
        if (pendingPath.current && pendingPath.current !== initialPath.current) {
          window._uxa = window._uxa || [];
          window._uxa.push(['trackPageview', pendingPath.current]);
          pendingPath.current = null;
        }
      }}
    />
  );
}
