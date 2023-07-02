const express = require('express');
const router = express.Router();
const prisma = require('../prisma');

router.get('/', async function (req,res,next) {
    const users = await prisma.users.findMany();
    res.json(users);
})

router.post('/create', async function (req,res,next) {
    await prisma.users.create({
        data: {
            email: 'elsa@prisma.io',
            firstName: 'Elsa',
            lastName: "Prisma",
            createdAt: new Date(),
            updateTimestamp: new Date(),
            age: 32,
            gender: 'female',
            status: 'married'
        }});
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
