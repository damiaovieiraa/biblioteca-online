const { Router } = require("express");
const { buscar, cadastrar, atualizar, deletar } = require("../controllers/emprestimoControllers");
const { validarEmprestimo, validarAtualizacao } = require("../middlewares/emprestimoMiddlewares");

const router = Router();

router.get("/", buscar);
router.post("/", validarEmprestimo, cadastrar);
router.put("/:id", validarAtualizacao, atualizar);
router.delete("/:id", deletar);

module.exports = router;