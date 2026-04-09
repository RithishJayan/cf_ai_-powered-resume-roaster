# SER594 Team 7 - AI Resume Roaster

Milestone 1 creates a monorepo boilerplate with:

- `frontend/`: React + Vite + TypeScript app shell
- `backend/`: Express + TypeScript API shell

## Project Structure

- `frontend`: UI boilerplate and API client wiring
- `backend`: API server with health and roast stub endpoints

## Quick Start

1. Install dependencies from root:

```bash
npm install
```

2. Copy env examples:

```bash
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

3. Start both apps:

```bash
npm run dev
```

## Docker Quick Start (One Go)

Run both frontend and backend with Docker Compose in development mode:

```bash
./scripts/start-dev.sh
```

Equivalent command:

```bash
docker compose up --build
```

Stop containers:

```bash
docker compose down
```

Rebuild from scratch:

```bash
docker compose down --volumes
docker compose up --build
```

Ports:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:4000`
- Health: `http://localhost:4000/api/health`

## Milestone 1 API Contract

- `GET /api/health`
  - Response: `{ "status": "ok", "service": "resume-roaster-backend", "version": "0.1.0" }`
- `POST /api/roast`
  - Request: `{ "resumeText"?: string, "targetRole"?: string, "roastLevel"?: string }`
  - Response: `{ "roast": string, "score": number, "breakdown": Array<{ "name": string, "score": number }> }`