const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.MAILHOG_HOST,
    port: process.env.MAILHOG_PORT,
    ignoreTLS: true
})

module.exports = transporter