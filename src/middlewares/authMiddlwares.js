const { validarUsuario } = require("./usuarioMiddlewares");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const autenticarJWT = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
    }

    jwt.verify(token, process.env.SECRET_JWT, (err, user) => {
        if (err) {
            return res.status(401).json({ message: "Token inválido ou expirado" });
        }

        req.user = user;
        next();
    });
};

const autenticarJWTAdm = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Token não fornecido" });
    }

    jwt.verify(token, process.env.SECRET_JWT, (err, user) => {
        if (err) {
            return res.status(401).json({ message: "Token inválido ou expirado" });
        }

        if (user.tipo !== "Admin") {
            return res.status(403).json({ message: "Acesso negado: rota restrita a Admin" });
        }
        
        req.user = user;
        next();
    });
};

module.exports = {
    validarUsuario,
    autenticarJWT,
    autenticarJWTAdm
};