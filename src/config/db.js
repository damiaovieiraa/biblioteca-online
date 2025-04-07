const { Sequelize } = require("sequelize");
require("dotenv").config();

const DB = process.env.MYSQL_DB;
const USER = process.env.MYSQL_USER;
const PASSWORD = process.env.MYSQL_PASSWORD;
const HOST = process.env.MYSQL_HOST;

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: "mysql",
    logging: false
});

module.exports = sequelize;