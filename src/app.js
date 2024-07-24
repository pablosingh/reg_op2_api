import express from 'express';
import operationsRoutes from './routes/operations.routes.js';

const app = express();
app.use(operationsRoutes);

export default app;