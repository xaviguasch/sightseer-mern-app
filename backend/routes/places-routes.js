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

  if (!place) {
    const error = new Error('Could not find a place for the provided id.')
    error.code = 404
    throw error
  }

  res.json({ place })
})

router.get('/user/:uid', (req, res, next) => {
  const uid = req.params.uid

  const place = DUMMY_PLACES.find(p => p.creator === uid)

  if (!place) {
    const error = new Error('Could not find a place for the provided user id.')
    error.code = 404
    return next(error)
  }

  res.json({ place })
})

module.exports = router
