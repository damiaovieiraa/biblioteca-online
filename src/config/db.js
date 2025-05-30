const { Sequelize } = require("sequelize");
require("dotenv").config();

const DB = process.env.MYSQL_DB;
const USER = process.env.MYSQL_USER;
const PASSWORD = process.env.MYSQL_PASSWORD;
const HOST = process.env.MYSQL_HOST;
const PORT = process.env.MYSQL_PORT;

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    port: PORT,
    dialect: "mysql",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    logging: false
});

module.exports = sequelize;