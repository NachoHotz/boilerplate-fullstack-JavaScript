const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const basic = sequelize.define('basic', {
  name: {
    type: DataTypes.STRING
  }
}, { timestamps: false });

module.exports = basic;
