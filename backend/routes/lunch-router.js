const router = require('express').Router();
const db = require('../models');
const User = db.user;
const Lunch = db.lunch;
const haversineDistance = require('../functions/haversine-formula');

const getLunches = (req, res) => {
  Lunch.findAll().then((lunches) => {
    res.send(lunches);
  })
}

const getUserLunches = (req, res) => {
  User.findById(req.params.id)
  .then((user) => {
    return user.getLunches()
  })
  .then((lunches) => {
    res.send(lunches);
  })
}

const createLunches = (req, res) => {
  let newLunch = Object.assign({}, req.body, {location: JSON.parse(req.body.location)})
  Lunch.create(newLunch)
  .then((lunch) => {
    res.send(lunch)
  })
}

const getNearbyLunches = (req, res) => {
  //let userLocation = req.session.location;
  let userLocation = {
    lat: 40.7419114,
    lng: -73.9351385
  }
  // let dist = db.sequelize.literal(haversineDistance);
  // self.sequelize.fn(dist, self.sequelize.col('username'), userLocation);

  Lunch.findAll({
    include: {
      model: User,
      attributes: ['email', 'first_name', 'last_name', 'createdAt']
    }
  })
  .then((lunches) => {
    let nearby = lunches.filter((lunch) => {
      //distance in miles
      let distance = haversineDistance(userLocation, lunch.location) / 1609.34

      return distance <= 1
    })

    return nearby
  })
  .then((nearby) => {
    res.send(nearby);
  })
}

router.route('/')
  .get(getLunches)
  .post(createLunches)

router.route('/user/:id')
  .get(getUserLunches)

router.route('/near')
  .get(getNearbyLunches)

module.exports = router;
