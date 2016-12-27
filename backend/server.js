const express = require('express');
const session = require('express-session');
const db = require('./models');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const router = require('./routes');


db.sequelize.sync().then(() => {
  console.log('db connection opened');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static('scripts'));
  app.use(session({
    secret: 'midnight-snack',
    resave: false,
    saveUninitialized: false
  }))

  //authentication routes
  app.use('/auth', router.auth);


  //api routes
  app.use('/api/user', router.user);
  app.use('/api/friends', router.friend);

  //route to frontend
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
  });

  const port = process.env.PORT || 4444;

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })

})
