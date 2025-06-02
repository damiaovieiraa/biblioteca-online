const { Router } = require("express");
const { buscar, cadastrar, deletar, atualizar } = require("../controllers/usuarioControllers");
const { validarUsuario } = require("../middlewares/usuarioMiddlewares");
const { autenticarJWT } = require("../middlewares/authMiddlwares");

const router = Router();

router.get("/", autenticarJWT, buscar);
//router.post("/", validarUsuario, cadastrar);
router.delete("/:id", autenticarJWT, deletar);
router.put("/:id", autenticarJWT, validarUsuario, atualizar);

module.exports = router;