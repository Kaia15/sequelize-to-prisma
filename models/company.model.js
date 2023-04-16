const sequelize = require('../config/database')
const {Model, DataTypes} = require('sequelize')

class Company extends Model {}

Company.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    funding: {
        type: DataTypes.INTEGER,
    },
    address: {
        type: DataTypes.STRING,
        defaultValue: 'Singapore'
    },
    private: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    sequelize, // We need to pass the connection instance
    modelName: 'Company', // We need to choose the model name
    timestamps: true,
    createdAt: true,
    // I want updatedAt to actually be called updateTimestamp
    updatedAt: 'updateTimestamp'
}
)

module.exports = Company