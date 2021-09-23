const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ReachOut extends Model { }

ReachOut.init();


module.exports = ReachOut;