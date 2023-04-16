const Company = require('../models/company.model')
const express = require('express');
const router = express.Router();
const {Op} = require('sequelize')

router.get('/', async function (req, res, next) {
    // const new_company = await Company.create({
    //     name: 'Triplea',
    //     age: 1,
    //     funding: 4000000,
    //     private: true
    // })
    const companies = await Company.findAll()
    await res.send(companies)
    // await Company.update({profit: 0, type: 'startup'}, {
    //     where: {
    //         [Op.and]: [
    //             { id: 1}, {profit: null}, {type: null}
    //         ]
    //     }
    // })
})

router.get('/update', async function (req,res,next) {
    // await Company.update({profit: 0, type: 'startup'}, {
    //     where: {
    //         [Op.and]: [
    //             { id: 1}, {profit: null}, {type: null}
    //         ]
    //     }
    // })
    await Company.update({profit: 0}, {
        where: {
            profit: null
        }
    })
    await res.render('index', { title: 'success!' });
})

module.exports = router