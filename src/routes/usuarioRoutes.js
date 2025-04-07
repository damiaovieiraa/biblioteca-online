const { Router } = require("express");
const { buscarTudo, criarUsuario, deletarUsuario, atualizarUsuario } = require("../controllers/usuarioControllers");
const { validarUsuario } = require("../middlewares/usuarioMiddlewares");

const router = Router();

router.get("/", buscarTudo);
router.post("/", validarUsuario, criarUsuario);
router.delete("/:id", deletarUsuario);
router.put("/:id", validarUsuario, atualizarUsuario);

module.exports = router;