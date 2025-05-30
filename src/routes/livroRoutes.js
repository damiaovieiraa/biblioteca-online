const { Router } = require("express");
const { buscar, cadastrar, deletar, atualizar } = require("../controllers/livroControllers");
const { validarLivro } = require("../middlewares/livroMiddlewares");
const { autenticarJWT, autenticarJWTAdm } = require("../middlewares/authMiddlwares");

const router = Router();

router.get("/", autenticarJWT, buscar);
router.post("/", autenticarJWTAdm, validarLivro, cadastrar);
router.put("/:id", autenticarJWTAdm, validarLivro, atualizar);
router.delete("/:id", autenticarJWTAdm, deletar);

module.exports = router;