const usuarioRoutes = require("./usuarioRoutes");

module.exports = (app, express) => {
    app.use(express.json());
    app.use("/usuarios", usuarioRoutes);
}