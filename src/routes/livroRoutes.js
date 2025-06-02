const { Router } = require("express");
const { buscar, cadastrar, deletar, atualizar } = require("../controllers/livroControllers");
const { validarLivro } = require("../middlewares/livroMiddlewares");
const { autenticarJWT } = require("../middlewares/authMiddlwares");

const router = Router();

router.get("/", autenticarJWT, buscar);
router.post("/", autenticarJWT, validarLivro, cadastrar);
router.put("/:id", autenticarJWT, validarLivro, atualizar);
router.delete("/:id", autenticarJWT, deletar);

module.exports = router;