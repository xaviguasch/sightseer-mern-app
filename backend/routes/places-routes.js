const express = require('express')

const router = express.Router()

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    location: {
      lat: 40.768686,
      lng: -73.9876733
    },
    address: '20 W 3th St, New York, NY 10001',
    creator: 'u1'
  }
]

router.get('/:pid', (req, res, next) => {
  const placeId = req.params.pid

  const place = DUMMY_PLACES.find(p => p.id === placeId)

  res.json({ place })
})

module.exports = router
