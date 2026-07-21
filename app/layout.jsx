import './globals.css';

export const metadata = {
  title: 'PolyMarkert AI Agent',
  description: 'OpenAI-powered agent running on Vercel AI Gateway',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
