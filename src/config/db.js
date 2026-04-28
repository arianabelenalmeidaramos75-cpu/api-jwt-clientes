const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("api_clientes", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;