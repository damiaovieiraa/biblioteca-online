const { usuario } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sanitize = require("sanitize-html");
const { cadastrar } = require("./usuarioControllers");
require("dotenv").config();

const realizarCadastro = () => {
    return cadastrar;
}

const realizarLogin = async (req, res) => {
    const { email, senha } = req.body;
    const sanitizedEmail = sanitize(email);

    try {
        const user = await usuario.findOne({
            where: {email: sanitizedEmail},
            attributes: ["nome", "email", "senha"]
        });
        if (!user) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }

        const senhaCorreta = await bcrypt.compare(senha, user.senha);
        if (!senhaCorreta) {
            return res.status(401).json({ success: false, message: "Senha incorreta" });
        }

        const token = jwt.sign(
            {nome: user.nome, email: user.email},
            process.env.SECRET_JWT,
            {expiresIn: "1h"}
        );

        res.json({ success: true, message: "Login bem-sucedido", token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    realizarLogin,
    realizarCadastro
}