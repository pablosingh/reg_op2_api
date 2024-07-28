import express from 'express';
import operationsRoutes from './routes/operations.routes.js';
import criptoRoutes from './routes/cripto.routes.js';

const app = express();

// middlewares
app.use(express.json());

app.use(operationsRoutes);
app.use(criptoRoutes);

export default app;