# PolyMarkertAIAgent4

A minimal Next.js app that calls OpenAI models through Vercel AI Gateway.

## Development

```bash
npm install
npm run dev
```

The deployed Vercel app authenticates to AI Gateway with Vercel OIDC automatically. For local development, link the project and run `vercel env pull` to refresh the short-lived OIDC token.
