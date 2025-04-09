const usuarioRoutes = require("./usuarioRoutes");
const livroRoutes = require("./livroRoutes");
const emprestimoRoutes = require("./emprestimoRoutes");

module.exports = (app, express) => {
    app.use(express.json());
    app.use("/usuarios", usuarioRoutes);
    app.use("/livros", livroRoutes);
    app.use("/emprestimos", emprestimoRoutes);
}