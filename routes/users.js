const express = require('express');
const router = express.Router();
const User = require('../models/user.model')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  // const user = await User.create({firstName: 'Alice', lastName: 'Nguyen'})
  // await res.send(user)
  // console.log(user.id)
  const users = await User.findAll()
  await res.send(users)
});

module.exports = router;
