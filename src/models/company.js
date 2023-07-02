'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Company.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    funding: DataTypes.INTEGER,
    address:  DataTypes.STRING,
    private: DataTypes.BOOLEAN,
    createdAt: new Date(),
    updateTimestamp: new Date(),
    size: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};