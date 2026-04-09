import { Router } from 'express';
import { roastResumeController } from '../controllers/roast.controller';

export const roastRouter = Router();

roastRouter.post('/', roastResumeController);
