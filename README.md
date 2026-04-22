# SER594 Team 7 - AI Resume Roaster

## Description

AI Resume Roaster is an AI-based resume analyzer tool that allows recruiters to evaluate candidate resumes against job descriptions. The system analyzes resumes to identify key skills, missing keywords, accomplishments, and overall job fit, and generates structured match reports with actionable feedback.

## 🧠 My Contributions

- Built backend APIs using Hono for resume analysis and feedback workflows
- Implemented RAG pipeline using embeddings and vector similarity search
- Developed frontend features using Next.js and TypeScript
- Integrated authentication using NextAuth and middleware
- Worked with PostgreSQL (pgvector) for structured and vector data storage
- Contributed to testing, debugging, and full-stack integration

## Project Team Members

- Nidhi Vispute - GitHub: `nvisputech`
- Anshul Kumar Sharma - GitHub: `akshar18`
- Rahaf Almakhalas - GitHub: `Rahafm11`
- Rithish Jayan - GitHub: `RithishJayan`

## Repository

- Repository name: `SER594-Team7-AIResumeRoaster`

## Development Environment Setup

Ensure the following tools are installed:

- Node.js (v18+ recommended)
- npm (v9+ recommended)
- Git

Verify installation:

```bash
node -v
npm -v
git --version
```

## Required Tools and Dependencies

### Tools

- Git
- Node.js
- npm

### Frontend

- React
- Vite
- TypeScript

### Backend

- Express
- TypeScript

### Optional Tools

- Docker
- Docker Compose

## Project Structure

```text
project-root/
├── frontend/      # React + Vite + TypeScript UI
├── backend/       # Express + TypeScript API
├── scripts/       # Utility scripts
├── docker-compose.yml
└── README.md
```

## Architecture Overview

- Frontend: React (Vite + TypeScript)
- Backend: Express (TypeScript)
- Communication: REST API
- AI Layer: Planned for Milestone 2+ (resume analysis, scoring, and feedback generation)

## Environment Variables

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:4000
```

### Backend (`backend/.env`)

```env
PORT=4000
```

## Quick Start (Local Development)

1. Install dependencies

```bash
npm install
```

2. Set up environment variables

```bash
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
```

3. Start both frontend and backend

```bash
npm run dev
```

## Run Services Individually

### Frontend

```bash
cd frontend
npm run dev
```

### Backend

```bash
cd backend
npm run dev
```

## Docker Quick Start

Run both frontend and backend using Docker Compose:

```bash
./scripts/start-dev.sh
```

or

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

## Application URLs

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:4000](http://localhost:4000)
- Health Check: [http://localhost:4000/api/health](http://localhost:4000/api/health)

## Milestone 1 API Contract

### `GET /api/health`

Response:

```json
{
  "status": "ok",
  "service": "resume-roaster-backend",
  "version": "0.1.0"
}
```

### `POST /api/roast`

Request:

```json
{
  "resumeText": "string",
  "targetRole": "string",
  "roastLevel": "string"
}
```

Response:

```json
{
  "roast": "string",
  "score": 85,
  "breakdown": [
    { "name": "Skills Match", "score": 90 },
    { "name": "Keyword Coverage", "score": 80 }
  ]
}
```
