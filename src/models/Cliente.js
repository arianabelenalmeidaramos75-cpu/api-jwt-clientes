const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Cliente = sequelize.define("Cliente", {
  nombre: DataTypes.STRING,
  correo: DataTypes.STRING,
  telefono: DataTypes.STRING,
  direccion: DataTypes.STRING,
});

module.exports = Cliente;