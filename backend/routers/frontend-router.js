const router = require('express').Router();
const path = require('path');
const rootPath = path.join(__dirname, '../../frontend/index.html');
//const Users. = require('mongoose').model('Users');

const frontend = (req, res) => (
  res.sendFile(rootPath)
)

router.route('/*')
  .get(frontend);

module.exports = router;
