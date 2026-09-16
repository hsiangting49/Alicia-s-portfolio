import type { Metadata } from 'next';
import { Inter, Jacques_Francois } from 'next/font/google';
import './globals.css';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const jacques = Jacques_Francois({ variable: '--font-jacques', subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'EldersConnect — Alicia Lin',
  description: 'A UX research and product design case study exploring trustworthy conversational AI for older adults.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${jacques.variable}`}>{children}</body></html>;
}
