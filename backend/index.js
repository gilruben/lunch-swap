//Models
const users = require('./models/users-model');

//Routes
const frontend = require('./routers/frontend-router');


module.exports = {
  routes: {
    frontend: frontend
  },
  models: {
    users: users
  }
}
