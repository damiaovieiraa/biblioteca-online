const express = require("express");
const router = require("./routes");

const app = express();

router(app, express);

module.exports = app;