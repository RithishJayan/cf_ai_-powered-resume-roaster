type RoastRequest = {
  resumeText?: string;
  targetRole?: string;
  roastLevel?: string;
};

type RoastResponse = {
  roast: string;
  score: number;
  breakdown: Array<{ name: string; score: number }>;
};

export function buildMockRoast(payload: RoastRequest): RoastResponse {
  const level = payload.roastLevel || 'medium';
  const role = payload.targetRole?.trim() || 'your target role';
  const hasResumeText = Boolean(payload.resumeText && payload.resumeText.trim().length > 0);

  return {
    roast: hasResumeText
      ? `Mock ${level} roast: your resume has potential for ${role}, but several bullets need clearer impact metrics and stronger action verbs.`
      : `Mock ${level} roast: add resume content first, then this endpoint will return a richer critique for ${role}.`,
    score: hasResumeText ? 68 : 50,
    breakdown: [
      { name: 'Content', score: hasResumeText ? 70 : 50 },
      { name: 'Impact & metrics', score: hasResumeText ? 62 : 45 },
      { name: 'Clarity', score: hasResumeText ? 72 : 55 },
      { name: 'Formatting', score: 75 },
    ],
  };
}
