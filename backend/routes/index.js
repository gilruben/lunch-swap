const user = require('./user-router');
const friend = require('./friend-router');
const auth = require('./auth-router');

module.exports = {
  user: user,
  friend: friend,
  auth: auth
}
