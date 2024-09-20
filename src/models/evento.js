const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Evento = sequelize.define('evento', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    localizacao: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  
  module.exports = Evento;