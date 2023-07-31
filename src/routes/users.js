const express = require('express');
const router = express.Router();
const prisma = require('../prisma');
const mailSrvc = require('../utils/email/mail.srvc');

router.get('/', async function (req,res,next) {
    const users = await prisma.users.findMany();
    res.json(users);
})

router.post('/create', async function (req,res,next) {
    try {
        const user = await prisma.users.create({ data: req.body });
        await mailSrvc.sendMail(
            {
                from: 'no-reply@xxxxxx.io', 
                to: user.email, 
                subject: 'Welcome to X', 
                text: `Hi ${user.firstName}`
            }
        );

        res.send(user);
    } catch (err) {
        console.log(err);
        next();
    }
})

router.put('/update', async function (req,res,next) {
    const user = await prisma.users.update({
        where: {
            id: 5,
        },
        update: {
          age: 30,
        },
    });
    console.log(user)
})

module.exports = router;
