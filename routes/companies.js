const Company = require('../models/company.model')
const express = require('express');
const router = express.Router();
const {Op} = require('sequelize');
const sequelize = require('../config/database');

router.get('/', async function (req, res, next) {
    // const new_company = await Company.create({
    //     name: 'Triplea',
    //     age: 1,
    //     funding: 4000000,
    //     private: true
    // })
    // const companies = await Company.findAll({
    //     attributes: ['id', 'name', 'profit']
    // })

    // const triplea = await Company.findOne({where: {id: 1}})
    // triplea.profit = 0
    // await triplea.update({profit: 1000000})
    // await triplea.save()
    // triplea.profit = 1000000
    // await triplea.save()

    // const companies = await Company.findAll({
    //     attributes: ['id', 'name', 'profit']
    // })
    // await res.send(companies)

    // ***
    // await sequelize.query('UPDATE "Companies" SET profit = 1000000 WHERE id = 1')


    try {
        const t = await sequelize.transaction();
        const triplea = await Company.findOne({where: {id: 1}})
        await triplea.update({profit: 1200000})
        await triplea.save()
        await t.commit()

        const companies = await Company.findAll({
            attributes: ['profit']
        })
        await res.send(companies)
    } catch(err) {
        console.log(err)
    }
    
})

router.get('/update', async function (req,res,next) {
    await res.render('index', { title: 'success!' });
})

module.exports = router