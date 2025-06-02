const express = require("express");
const router = require("./routes");
const cors = require("cors");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require("./docs/swagger");

const app = express();

app.use(cors());

router(app, express);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;