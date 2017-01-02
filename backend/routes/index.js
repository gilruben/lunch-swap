const user = require('./user-router');
const friend = require('./friend-router');
const lunch = require('./lunch-router');
const auth = require('./auth-router');

module.exports = {
  user: user,
  friend: friend,
  lunch: lunch,
  auth: auth
}
