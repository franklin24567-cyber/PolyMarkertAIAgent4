'use client';

import { FormEvent, useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('Create a Polymarket research plan for today.');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function submitPrompt(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok || !res.body) {
        throw new Error('The AI request failed.');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        setResponse((current) => current + decoder.decode(value, { stream: true }));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="container">
      <section className="card">
        <p className="eyebrow">Vercel AI Gateway</p>
        <h1>PolyMarkert AI Agent</h1>
        <p className="intro">
          Ask OpenAI for research, market summaries, or agent-building ideas. Requests run through Vercel AI Gateway.
        </p>

        <form onSubmit={submitPrompt}>
          <label htmlFor="prompt">Prompt</label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            rows={6}
          />
          <button type="submit" disabled={isLoading || !prompt.trim()}>
            {isLoading ? 'Thinking...' : 'Ask OpenAI'}
          </button>
        </form>

        {error && <p className="error">{error}</p>}
        {response && <pre className="response">{response}</pre>}
      </section>
    </main>
  );
}
