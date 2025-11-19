<!-- Dependencies: -->

```markdown
## Dependencies / Setup

Install development dependencies and tools used in this project:

```bash
npm install typescript --save-dev
tsc --init
npm install fastify @fastify/cors
npm install tsx
npm install @types/node --save-dev
```

## Environment variables

This project requires AWS credentials to access DynamoDB. Copy `env.example` to `.env` (or set these environment variables directly) and fill in your values.

Required variables:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION` (defaults to `us-east-1`)
- `DYNAMODB_TABLE_USERS` (defaults to `Usuarios`)

Do NOT commit real credentials to git. Use an AWS IAM role or local AWS profile where possible.

## Run locally (WSL / Linux / macOS)

Install dependencies:

```bash
npm install
```

Set environment variables (example):

```bash
export AWS_ACCESS_KEY_ID=your_access_key
export AWS_SECRET_ACCESS_KEY=your_secret
export AWS_REGION=us-east-1
```

Start dev server:

```bash
npm run dev
```

If you prefer PowerShell (Windows):

```powershell
$env:AWS_ACCESS_KEY_ID = "your_access_key"
$env:AWS_SECRET_ACCESS_KEY = "your_secret"
$env:AWS_REGION = "us-east-1"
npm run dev
```

Alternatively, use a `.env` loader or a secrets manager for local development.