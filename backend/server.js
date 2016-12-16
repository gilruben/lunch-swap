const express = require('express');
const db = require('./models');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const router = require('./routes');


db.sequelize.sync({force: true}).then(() => {
  console.log('db connection opened');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static('scripts'));


  //api routes
  app.use('/api/user', router.user);

  //route to frontend
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
  });

  const port = process.env.PORT || 4444;

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })

})
