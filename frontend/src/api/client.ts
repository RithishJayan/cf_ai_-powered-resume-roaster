export type RoastRequest = {
  resumeText?: string;
  targetRole?: string;
  roastLevel?: string;
};

export type RoastResponse = {
  roast: string;
  score?: number;
  breakdown?: Array<{ name: string; score: number }>;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000';

export async function roastResume(payload: RoastRequest): Promise<RoastResponse> {
  const response = await fetch(`${API_BASE_URL}/api/roast`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Roast request failed with status ${response.status}`);
  }

  return response.json() as Promise<RoastResponse>;
}
