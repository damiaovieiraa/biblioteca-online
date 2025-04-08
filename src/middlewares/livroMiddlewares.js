const { body, validationResult } = require('express-validator');

const validarLivro = [
    body("titulo")
        .notEmpty()
        .withMessage("O título é obrigatório"),
    
    body("autor")
        .notEmpty()
        .withMessage("O autor é obrigatório"),
    
    body("isbn")
        .notEmpty()
        .withMessage("O isbn é obrigatório"),

    body("quantidade_disponivel")
        .notEmpty()
        .withMessage("A quantidade disponível é obrigatória"),
    
    (req, res, next) => {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ errors: erros.array() });
        }
        next();
    }
];

module.exports = {
    validarLivro
}