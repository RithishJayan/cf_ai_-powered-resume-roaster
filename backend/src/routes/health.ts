import { Router } from 'express';

export const healthRouter = Router();

healthRouter.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'resume-roaster-backend',
    version: '0.1.0',
  });
});
