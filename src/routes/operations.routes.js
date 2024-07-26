import { Router } from "express";
import { getOperation, createOperation } from "../controllers/operations.controllers.js";
import { getActualPrice } from "../controllers/getActualPrice.controllers.js";
const router = Router();

router.get('/operations', getOperation);
router.post('/operations', createOperation);
router.put('/operations/:id');
router.delete('/operations/:id');
router.get('/operations/:id');
router.get('/actualp/:ticker', getActualPrice );

export default router;