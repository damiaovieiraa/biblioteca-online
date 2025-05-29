const express = require("express");
const { validarUsuario } = require("../middlewares/authMiddlwares");
const { realizarLogin, realizarCadastro } = require("../controllers/authControllers");

const router = express.Router();

router.post("/register", validarUsuario, realizarCadastro());
router.post("/login", realizarLogin);

module.exports = router;