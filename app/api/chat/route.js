import { streamText } from 'ai';

export const runtime = 'nodejs';
export const maxDuration = 30;

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const prompt = typeof body.prompt === 'string' ? body.prompt.trim() : '';

  if (!prompt) {
    return Response.json({ error: 'Prompt is required.' }, { status: 400 });
  }

  const result = streamText({
    model: 'openai/gpt-5.5',
    system: 'You are a concise market research assistant for a Polymarket-focused AI agent.',
    prompt,
  });

  return result.toTextStreamResponse();
}
