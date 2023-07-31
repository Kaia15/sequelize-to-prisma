const transporter = require('./mailConfig');

const sendMail = async function (message) {
    try {
        await transporter.sendMail(message, (error, info) => {
            if (error) {
                console.error("Error sending email: ", error);
            } else {
                console.log("Email sent: ", info.response);
            }
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    sendMail
}