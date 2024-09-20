const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");
const Event = require('../models/evento')
const User = sequelize.define('User', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: { 
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventoid: { 
      type: DataTypes.INTEGER,
      references:{
        model: Event,
        key:'id',
      }
    }
  });
  
  module.exports = User;