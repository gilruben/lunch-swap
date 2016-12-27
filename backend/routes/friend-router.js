const db = require('../models');
const User = db.User;
const router = require('express').Router();


const getFriends = (req, res) => {
  let userId = req.params.userId;


  db.sequelize.query(`SELECT "User"."id", "User"."email", ` +
    `"User"."first_name", "User"."last_name", "User"."createdAt", "User"."updatedAt", ` +
    `"Friends"."createdAt" AS "friends_since" FROM "Users" AS "User" ` +
    `INNER JOIN "Friends" AS "Friends" ON ("User"."id" = "Friends"."UserId" AND "Friends"."friendId" = ${userId}) OR` +
    `("User"."id" = "Friends"."friendId" AND "Friends"."UserId" = ${userId});`
  )
  .spread(function(results, metadata) {
    res.send(results)
  })
  // User.findById(userId)
  //   .then((user) => {
  //     //console.log(user.$modelOption)
  //     //console.log('getFriend:', user)
  //     return user.getFriend()
  //   })
  //   .then((users) => {
  //     //console.log(users);
  //     res.send(users);
  //   })
}

const addFriend = (req, res) => {
  console.log("addFriend: ", req.body)

  //req.body is an object with {userId, friendId}
  User.findById(req.body.userId)
    .then((user) => {
      user.addFriend(req.body.friendId)
      console.log('New friendship');
    })
}

router.route('/')
  .post(addFriend)

router.route('/:userId')
  .get(getFriends)

module.exports = router;
