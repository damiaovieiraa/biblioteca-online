const usuarioRoutes = require("./usuarioRoutes");
const livroRoutes = require("./livroRoutes");
const emprestimoRoutes = require("./emprestimoRoutes");
const authRoutes = require("./authRoutes");

module.exports = (app, express) => {
    app.use(express.json());
    app.use("/usuarios", usuarioRoutes);
    app.use("/livros", livroRoutes);
    app.use("/emprestimos", emprestimoRoutes);
    app.use("/auth", authRoutes);
}