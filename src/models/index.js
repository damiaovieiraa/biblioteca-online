const sequelize = require("../config/db");
const { initModels } = require("./init-models");

module.exports = initModels(sequelize);