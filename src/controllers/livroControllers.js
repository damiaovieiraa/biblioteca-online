const { livro } = require("../models");
const sanitize = require("sanitize-html");

const sanitizedInputs = (reqBody) => {
    const tituloSanitized = sanitize(reqBody.titulo);
    const autorSanitized = sanitize(reqBody.autor);
    const editoraSanitized = sanitize(reqBody.editora);
    const anoSanitized = sanitize(reqBody.ano_publicacao);
    const isbnSanitized = sanitize(reqBody.isbn);
    const qtdeSanitized = sanitize(reqBody.quantidade_disponivel);

    return {
        titulo: tituloSanitized,
        autor: autorSanitized,
        editora: editoraSanitized,
        ano_publicacao: parseInt(anoSanitized),
        isbn: isbnSanitized,
        quantidade_disponivel: parseInt(qtdeSanitized)
    }
}

const buscar = async (req, res) => {
    try {
        const livros = await livro.findAll();
        return res.json(livros);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const cadastrar = async (req, res) => {
    const novoLivroSanitized = sanitizedInputs(req.body);
    try {
        const novoLivro = await livro.create(novoLivroSanitized);
        return res.status(201).json(novoLivro);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const atualizar = async (req, res) => {
    const sanitizedId = sanitize(req.params.id);
    const livroAtualizadoSanitized = sanitizedInputs(req.body);

    try {
        const livroAtualizado = await livro.update(livroAtualizadoSanitized, {
            where: {
                id_livro: parseInt(sanitizedId)
            }
        });
        if (livroAtualizado[0] === 0) {
            return res.status(404).json({ error: "Livro não encontrado" });
        }
        return res.json({ message: "Livro atualizado com sucesso" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const deletar = async (req, res) => {
    const sanitizedId = sanitize(req.params.id);
    try {
        const deleted = await livro.destroy({
            where: {
                id_livro: parseInt(sanitizedId)
            }
        });
        if (!deleted) {
            return res.status(404).json({ error: "Livro não encontrado" });
        }
        return res.json({ message: "Livro removido com sucesso" });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

module.exports = {
    buscar,
    cadastrar,
    atualizar,
    deletar
}