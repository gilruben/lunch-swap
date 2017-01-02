const router = require('express').Router();
const db = require('../models');
const User = db.user;

const getUser = (req, res) => {
  User.findById(req.params.userId)
  .then((user) => {
    return user.getFriend();
  })
  .then((friends) => {
    res.send(friends);
  })
}

const createUser = (req, res) => {
  console.log(req.body)

  User.create(req.body)
  .then(() => {
    console.log('User created');
  })
}


router.route('/')
  .post(createUser)

router.route('/:userId')
  .get(getUser)



module.exports = router;
