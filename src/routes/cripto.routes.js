import { Router } from "express";
import { 
    addCripto,
    getCripto,
    getCriptos,
 } from '../controllers/cripto.controllers.js';
import { test } from "../controllers/getActualPrice.controllers.js";
const router = Router();

router.get('/criptos', getCriptos );
router.get('/cripto/:cripto', getCripto);
router.post('/cripto', addCripto );
router.get('/test', test);
// router.put('/cripto/:id' );
// router.delete('/cripto/:id' );

export default router;