import express from 'express';
import operationsRoutes from './routes/operations.routes.js';

const app = express();

// middlewares
app.use(express.json());

app.use(operationsRoutes);

export default app;