import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'PolyMarkert AI Agent',
  description: 'OpenAI-powered agent running on Vercel AI Gateway',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
