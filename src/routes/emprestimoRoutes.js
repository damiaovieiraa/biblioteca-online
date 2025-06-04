const { Router } = require("express");
const { buscar, cadastrar, atualizar, deletar, registrarDevolucao } = require("../controllers/emprestimoControllers");
const { validarEmprestimo, validarAtualizacao } = require("../middlewares/emprestimoMiddlewares");
const { autenticarJWT } = require("../middlewares/authMiddlwares");

const router = Router();

router.get("/", autenticarJWT, buscar);
router.post("/", autenticarJWT, validarEmprestimo, cadastrar);
router.post("/devolucoes", autenticarJWT, registrarDevolucao);
router.put("/:id", autenticarJWT, validarAtualizacao, atualizar);
router.delete("/:id", autenticarJWT, deletar);

module.exports = router;