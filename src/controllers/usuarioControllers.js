const { usuario } = require("../models");
const sanitize = require("sanitize-html");
const bcrypt = require("bcrypt");

const sanitizedInputs = (reqBody) => {
    const { nome, email, tipo, senha} = reqBody;

    const sanitizedNome = sanitize(nome);
    const sanitizedEmail = sanitize(email);
    const sanitizedTipo = sanitize(tipo);
    const sanitizedSenha = sanitize(senha);

    return {
        nome: sanitizedNome,
        email: sanitizedEmail,
        tipo: sanitizedTipo,
        senha: sanitizedSenha
    }
}

const criarHash = async (senha) => {
    const hash = await bcrypt.hash(senha, 10);
    return hash;
};

const buscar = async (req, res) => {
    try {
        const usuarios = await usuario.findAll();
        return res.json(usuarios);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const cadastrar = async (req, res) => {
    const user = sanitizedInputs(req.body);

    try {
        const senhaHash = await criarHash(user.senha);
        user.senha = senhaHash;

        const novoUsuario = await usuario.create(user);
        return res.status(201).json({ message: "Usuário registrado" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deletar = async (req, res) => {
    const { id } = req.params;
    const sanitizedId = sanitize(id);
    try {
        const deleted = await usuario.destroy({
            where: {
                id_usuario: sanitizedId
            }
        });
        if (!deleted) {
            return res.status(404).json({ error: "Usuario não encontrado" });
        }
        return res.json({ message: "Usuário removido com sucesso" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const atualizar = async (req, res) => {
    const { id } = req.params;
    const sanitizedId = sanitize(id);
    const userUpdated = sanitizedInputs(req.body);

    try {
        const senhaHash = await criarHash(userUpdated.senha);
        userUpdated.senha = senhaHash;

        const usuarioAtualizado = await usuario.update(userUpdated, {
            where: {
                id_usuario: sanitizedId
            }
        });
        if (usuarioAtualizado[0] === 0) {
            return res.status(404).json({ message: "Usuário não encontrado" });
        }
        return res.json({ message: "Usuário atualizado com sucesso" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    buscar,
    cadastrar,
    deletar,
    atualizar
}