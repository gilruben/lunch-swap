const db = require('../models');
const User = db.User;
const router = require('express').Router();

const login = (req, res) => {
  User.findOne({where: {email: req.body.email, password: req.body.password}})
  .then((user) => {
    if(user){
      req.session.email = user.email;
      req.session.save;
      console.log('Successful log in');
      console.log('Session:', req.session);
      res.status(200).send({email: user.email})
    } else {
      console.log('Login Unsuccessful');
      console.log('Session:', req.session);
      res.status(401).send({loginMsg: 'Incorrect Email and/or Password'});
    }
  })
}


const logout = (req, res) => {
  console.log('Before destroy: ', req.session);
  req.session.destroy
  console.log('After destroy: ', req.session);
}


const verifyAuth = (req, res) => {
  if(req.session.email){
    console.log('Authorized');
    res.sendStatus(200);
  } else {
    console.log('Unauthorized');
    res.sendStatus(401);
    //res.redirect('/signin');
  }
}


router.route('/login')
  .post(login)

router.route('/logout')
  .post(logout)

router.route('/verify')
  .get(verifyAuth)

module.exports = router;