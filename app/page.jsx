import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={styles.main}>
      <div style={styles.card}>
        <h1 style={styles.title}>PolyMarket AI Agent</h1>
        <p style={styles.text}>
          Open the dashboard editor to make changes with OpenAI.
        </p>

        <Link href="/dashboard" style={styles.link}>
          Open Dashboard Editor
        </Link>
      </div>
    </main>
  );
}

const styles = {
  main: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0b1220',
    fontFamily: 'Arial, sans-serif',
    padding: '24px',
  },
  card: {
    background: '#111827',
    border: '1px solid #243041',
    padding: '32px',
    borderRadius: '16px',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '12px',
  },
  text: {
    color: '#cbd5e1',
    marginBottom: '20px',
  },
  link: {
    display: 'inline-block',
    background: '#2563eb',
    color: 'white',
    padding: '12px 18px',
    borderRadius: '10px',
    textDecoration: 'none',
    fontWeight: '600',
  },
};
