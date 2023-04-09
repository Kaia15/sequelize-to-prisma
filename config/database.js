const { Sequelize, DataTypes, Model } = require("sequelize")
const dotenv = require('dotenv')

dotenv.config()
const mydatabase = process.env.DATABASE
const myusername = process.env.DB_USERNAME
const mypassword = process.env.DB_PASSWORD

const sequelize = new Sequelize(mydatabase, myusername, mypassword, {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize;