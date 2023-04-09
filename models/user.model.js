const sequelize = require('../config/database')
const {Model, DataTypes} = require("sequelize")

class User extends Model {}

User.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  timestamps: true,
  createdAt: true,
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: 'updateTimestamp'
});

// the defined model is the class itself
module.exports = User // true