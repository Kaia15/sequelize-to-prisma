const express = require('express');
const router = express.Router();
const User = require('../models/user.model')
const {Op} = require('sequelize')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  // const user = await User.create({firstName: 'Alice', lastName: 'Nguyen'})
  // await res.send(user)
  // console.log(user.id)
  // const users = await User.findAll()
  // const users = await User.findAll({
  //   where: {
  //     firstName: 'Tran'
  //   }
  // })
  const users = await User.findAll({
    attributes: ['id', 'firstName', 'age', 'status'], 
    // where: {
    //   id: 1
    // },
    where: {
      // id: {
      //   [Op.gt]: 4
      // }
      firstName: {
        [Op.like]: "%an"
      }
    },
    order: [
      ['firstName', 'ASC']
    ]
  })
  console.log(req.query)
  await res.send(users)
});


module.exports = router;
