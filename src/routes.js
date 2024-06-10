import { Router } from "express";
import PessoaController from "./app/controllers/PessoasController.js";
const router = Router()


//rotas
router.get('/pessoas', PessoaController.list); 
router.get('/pessoas/:id', PessoaController.find);
router.post('/pessoas', PessoaController.add);
router.put('/pessoas/:id', PessoaController.update);
router.delete('/pessoas/:id',PessoaController.delete);

export default router
