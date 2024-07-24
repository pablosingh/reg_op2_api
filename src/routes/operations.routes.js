import { Router } from "express";
import { getOperation, createOperation } from "../controllers/operations.controllers.js";
const router = Router();

router.get('/operations', getOperation);
router.post('/operations', createOperation);
router.put('/operations/:id');
router.delete('/operations/:id');
router.get('/operations/:id');

export default router;