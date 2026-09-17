import type { Metadata } from 'next';
import { Inter, Jacques_Francois } from 'next/font/google';
import ContentsquareTracking from './contentsquare-tracking';
import './globals.css';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const jacques = Jacques_Francois({ variable: '--font-jacques', subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Hsiang-Ting Lin — Product Designer',
  description: 'Selected UX research, product design, and AI workflow projects by Hsiang-Ting Lin.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${jacques.variable}`}>{children}<ContentsquareTracking /></body></html>;
}
