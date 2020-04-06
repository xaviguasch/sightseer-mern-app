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

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS })
}

const signup = async (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    console.log(errors)
    throw new HttpError('Invalids inputs passed, please check your data.', 422)
  }

  const { name, email, password } = req.body

  let existingUser

  try {
     existingUser = awiat User.findOne({ email: email })
  } catch(err) {
    const error = new HttpError(
      'Signing up failed, plese try again later.', 500
    )
    return next(error)
  }

  if (existingUser){
    const error = new HttpError(
      'User exists already, please login instead.', 422
    )
    return next(error)
  }

  

  const createdUser = {
    id: uuid(),
    name,
    email,
    password
  }

  DUMMY_USERS.push(createdUser)

  res.status(201).json({ user: createdUser })
}

const login = (req, res, next) => {
  const { email, password } = req.body

  const identifiedUser = DUMMY_USERS.find(user => user.email === email)

  if (!identifiedUser || identifiedUser.password !== password) {
    throw new HttpError('Could not identify user, credentials seem to be wrong.', 401)
  }

  res.json({ message: 'Logged in!' })
}

exports.getUsers = getUsers
exports.signup = signup
exports.login = login
