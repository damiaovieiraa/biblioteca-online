const { Router } = require("express");
const { buscar, cadastrar, deletar, atualizar } = require("../controllers/livroControllers");
const { validarLivro } = require("../middlewares/livroMiddlewares");

const router = Router();

router.get("/", buscar);
router.post("/", validarLivro, cadastrar);
router.put("/:id", validarLivro, atualizar);
router.delete("/:id", deletar);

module.exports = router;