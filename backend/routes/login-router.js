let db = require(../models);
let User = db.User;
let router = require('express').Router();

const verifyCred = (req, res) => {
  User.findOne({where: {email: req.body.email, password: req.body.password}})
  .then((user) => {
    if(user){
      req.session.email = user.email;
      req.session.save; 
      console.log('Successful log in');
    } else {
      console.log('Login Unsuccessful');
    }
  })
}

router.route('/')
  .post(verifyCred)

module.exports = router;
