const uuid = require('uuid/v4')
const { validationResult } = require('express-validator')

const HttpError = require('../models/http-error')
const User = require('../models/user')

const DUMMY_USERS = [
  {
    id: 'u1',
    name: 'Xavi Guasch',
    email: 'test@test.com',
    password: 'testers'
  }
]

const getUsers = async (req, res, next) => {
  let users

  try {
    users = User.find({}, '-password')
  } catch (err) {
    const error = new HttpError('Fetching users failed, please try again later.', 500)
    return next(error)
  }

  res.json({ users: users.map(user => user.toObject({ getters: true })) })
}

const signup = async (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    console.log(errors)
    return next(new HttpError('Invalids inputs passed, please check your data.', 422))
  }

  const { name, email, password } = req.body

  let existingUser

  try {
    existingUser = await User.findOne({ email: email })
  } catch (err) {
    const error = new HttpError('Signing up failed, plese try again later.', 500)
    return next(error)
  }

  if (existingUser) {
    const error = new HttpError('User exists already, please login instead.', 422)
    return next(error)
  }

  const createdUser = new User({
    name,
    email,
    image: 'https://live.staticflickr.com/7631/26849088292_36fc52ee90_b.jpg',
    password,
    places: []
  })

  try {
    await createdUser.save()
  } catch (err) {
    const error = new HttpError('Signing up failed, please try again.', 500)
    return next(error)
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) })
}

const login = async (req, res, next) => {
  const { email, password } = req.body

  let existingUser

  try {
    existingUser = await User.findOne({ email: email })
  } catch (err) {
    const error = new HttpError('Logging in failed, plese try again later.', 500)
    return next(error)
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError('Invalid credentials, could not log you in.', 401)
    return next(error)
  }

  res.json({ message: 'Logged in!' })
}

exports.getUsers = getUsers
exports.signup = signup
exports.login = login
