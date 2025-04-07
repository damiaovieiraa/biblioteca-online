const { body, validationResult } = require('express-validator');

const validarUsuario = [
    body("nome")
        .notEmpty()
        .withMessage("O nome é obrigatório."),
    
    body("email")
        .notEmpty()
        .withMessage("O email é obrigatório.")
        .isEmail()
        .withMessage("Formato de email inválido."),
    
    body("tipo")
        .notEmpty()
        .withMessage("O tipo é obrigatório."),
    
    body("senha")
        .notEmpty()
        .withMessage("A senha é obrigatória"),

    (req, res, next) => {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ errors: erros.array() });
        }
        next();
    }
];

module.exports = {
    validarUsuario
}