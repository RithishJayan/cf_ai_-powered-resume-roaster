import { Request, Response } from 'express';
import { buildMockRoast } from '../services/roast.service';

type RoastRequestBody = {
  resumeText?: string;
  targetRole?: string;
  roastLevel?: string;
};

export function roastResumeController(req: Request, res: Response) {
  const payload = req.body as RoastRequestBody;
  const response = buildMockRoast(payload);
  res.status(200).json(response);
}
