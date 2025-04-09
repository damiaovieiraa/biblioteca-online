const { body, validationResult } = require('express-validator');
const validator = require("validator");

const validarEmprestimo = [
    body("id_usuario")
        .notEmpty()
        .withMessage("O id do usuário é obrigatório")
        .custom((value) => {
            if (!validator.isNumeric(value) && !validator.isInt(value)) {
                throw new Error("O id do usuário deve ser um número inteiro");
            }
            return true;
        }),
        
    body("id_livro")
        .notEmpty()
        .withMessage("O id do livro é obrigatório")
        .custom((value) => {
            if (!validator.isNumeric(value) && !validator.isInt(value)) {
                throw new Error("O id do livro deve ser um número inteiro");
            }
            return true;
        }),
    
    (req, res, next) => {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ errors: erros.array() });
        }
        next();
    }
];

const validarAtualizacao = [
    body("data_devolucao")
        .notEmpty()
        .withMessage("A data é obrigatória")
        .custom((value) => {
            if (!validator.isDate(value, {format: "YYYY-MM-DD", strictMode: true})) {
                throw new Error("A data precisa estar no formato YYYY-MM-DD");
            }
            return true;
        }),
    
    body("status")
        .notEmpty()
        .withMessage("O status é obrigatório"),

    (req, res, next) => {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ errors: erros.array() });
        }
        next();
    }
];

module.exports = {
    validarEmprestimo,
    validarAtualizacao
}