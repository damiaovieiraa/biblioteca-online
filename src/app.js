const express = require("express");
const routerAcervo = require("./routes/routerAcervo");

const app = express();

app.use(express.json());
app.use(routerAcervo);

module.exports = app;