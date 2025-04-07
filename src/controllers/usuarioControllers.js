const { usuario } = require("../models");
const sanitize = require("sanitize-html");

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

const buscarTudo = async (req, res) => {
    try {
        const usuarios = await usuario.findAll();
        return res.json(usuarios);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const criarUsuario = async (req, res) => {
    try {
        const novoUsuario = await usuario.create(sanitizedInputs(req.body));
        return res.status(201).json(novoUsuario);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deletarUsuario = async (req, res) => {
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
        return res.json({ message: "Usuário excluído com sucesso" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const atualizarUsuario = async (req, res) => {
    const { id } = req.params;
   
    const sanitizedId = sanitize(id);

    try {
        const usuarioAtualizado = await usuario.update(sanitizedInputs(req.body), {
            where: {
                id_usuario: sanitizedId
            }
        });
        if (usuarioAtualizado[0] === 0) {
            return res.status(400).json({ error: "Usuário não encontrado ou nenhum dado novo foi inserido" });
        }
        return res.json({ message: "Usuário atualizado com sucesso" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    buscarTudo,
    criarUsuario,
    deletarUsuario,
    atualizarUsuario
}