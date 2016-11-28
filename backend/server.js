const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

//Models
const models = require('./index').models;
//Routes
const routes = require('./index').routes;

mongoose.connect('mongodb://localhost/lunch-swap');

const db = mongoose.connection;

db.on('open', () => {
  console.log('db connection opened');

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static('scripts'));
  app.use('/*', routes.frontend);

  const port = process.env.PORT || 4444;

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })

})
