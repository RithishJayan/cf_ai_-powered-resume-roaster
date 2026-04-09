import express from 'express';
import cors from 'cors';
import { healthRouter } from './routes/health';
import { roastRouter } from './routes/roast';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/health', healthRouter);
app.use('/api/roast', roastRouter);

export default app;
