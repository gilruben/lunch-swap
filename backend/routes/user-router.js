const db = require('../models');
const User = db.User;
const router = require('express').Router();

const createUser = (req, res) => {
  console.log(req.body)
  User.create(req.body)
    .then(() => {
      console.log('User created');
    })
}

router.route('/')
  .post(createUser)

module.exports = router;
