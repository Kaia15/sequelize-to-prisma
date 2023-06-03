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
    funding: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Company',
    tableName: 'Companies',
    schema: 'public'
  });
  return Company;
};