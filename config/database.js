const { Sequelize, DataTypes, Model } = require("sequelize")
const dotenv = require('dotenv')

dotenv.config()
const mydatabase = process.env.database
const myusername = process.env.user
const mypassword = process.env.password

const sequelize = new Sequelize(mydatabase, myusername, mypassword, {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize;