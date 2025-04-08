const { Router } = require("express");
const { buscar, cadastrar, deletar, atualizar } = require("../controllers/usuarioControllers");
const { validarUsuario } = require("../middlewares/usuarioMiddlewares");

const router = Router();

router.get("/", buscar);
router.post("/", validarUsuario, cadastrar);
router.delete("/:id", deletar);
router.put("/:id", validarUsuario, atualizar);

module.exports = router;