const { Router } = require("express");
const { buscar, cadastrar, atualizar, deletar } = require("../controllers/emprestimoControllers");
const { validarEmprestimo, validarAtualizacao } = require("../middlewares/emprestimoMiddlewares");
const { autenticarJWT, autenticarJWTAdm } = require("../middlewares/authMiddlwares");

const router = Router();

router.get("/", autenticarJWT, buscar);
router.post("/", autenticarJWT, validarEmprestimo, cadastrar);
router.put("/:id", autenticarJWTAdm, validarAtualizacao, atualizar);
router.delete("/:id", autenticarJWTAdm, deletar);

module.exports = router;