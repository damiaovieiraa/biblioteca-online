const usuarioRoutes = require("./usuarioRoutes");
const livroRoutes = require("./livroRoutes");

module.exports = (app, express) => {
    app.use(express.json());
    app.use("/usuarios", usuarioRoutes);
    app.use("/livros", livroRoutes);
}