import { Router } from "express";
import { 
    addCripto,
    getCripto,
    getCriptos,
 } from '../controllers/cripto.controllers.js';
const router = Router();

router.get('/criptos', getCriptos );
router.get('/cripto/:cripto', getCripto);
router.post('/cripto', addCripto );
// router.put('/cripto/:id' );
// router.delete('/cripto/:id' );

export default router;