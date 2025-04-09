const { emprestimo } = require("../models");
const sequelize = require("../config/db");
const sanitize = require("sanitize-html");

const buscar = async (req, res) => {
    try {
        const emprestimos = await emprestimo.findAll();
        return res.json(emprestimos);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const cadastrar = async (req, res) => {
    const { id_usuario, id_livro } = req.body;

    const sanitizedIdUsuario = parseInt(sanitize(id_usuario));
    const sanitizedIdLivro = parseInt(sanitize(id_livro));

    try {
        await sequelize.query(
            "CALL RegistrarEmprestimo(:id_usuario, :id_livro)",
            {
                replacements: { 
                    id_usuario: sanitizedIdUsuario,
                    id_livro: sanitizedIdLivro 
                }
            }
        );
        return res.status(201).json({ message: "Empréstimo registrado com sucesso" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const atualizar = async function name(req, res) {
    const { data_devolucao, status } = req.body;
    const { id } = req.params;

    const sanitizedData = sanitize(data_devolucao);
    const sanitizedStatus = sanitize(status);
    const sanitizedId = parseInt(sanitize(id));

    try {
        const query = `update Emprestimo 
                       set data_devolucao = :data_devolucao, status = :status 
                       where id_emprestimo = :id`
        const [result, meta] = await sequelize.query(query, {
            replacements: {
                data_devolucao: sanitizedData,
                status: sanitizedStatus,
                id: sanitizedId
            },
            type: sequelize.QueryTypes.UPDATE
        });
        if (meta === 0) {
            return res.status(400).json({ error: "Nenhuma alteração aconteceu: nenhum dado novo ou id inexiste" });
        }
        return res.status(200).json({ message: "Empréstimo atualizado com sucesso" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const deletar = async (req, res) => {
    const sanitizedId = parseInt(sanitize(req.params.id));

    try {
        const deleted = await emprestimo.destroy({
            where: {
                id_emprestimo: sanitizedId
            }
        });
        if (!deleted) {
            return res.status(404).json({ error: "Empréstimo não encontrado"});
        }
        return res.json({ message: "Empréstimo excluído com sucesso" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

module.exports = {
    buscar,
    cadastrar,
    atualizar,
    deletar
}