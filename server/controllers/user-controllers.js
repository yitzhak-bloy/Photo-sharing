const { v4: uuidv4 } = require('uuid');
const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

let DUMMY_USERS = [
  {
    id: 'u1',
    name: 'ssdsd',
    email: 'world@gmail.com',
    password: 'sdfsc5416',
  },
  {
    id: 'u2',
    name: 'ssdsd',
    email: 'wefdorld@gmail.com',
    password: 'sfgsc5416',
  },
  {
    id: 'u3',
    name: 'ssdqqsd',
    email: 'woddrld@gmail.com',
    password: 'sddvffsc5416',
  },
];

const getUsers = (req, res, next) => {
 
  if (DUMMY_USERS.length === 0) {
    throw new HttpError('Could not find any user.', 404);
  }

  res.json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) { 
    throw new HttpError('Invalid inputs passed, please check your data.', 422);
  };

  const {name, email, password} = req.body;

  const hasUser = DUMMY_USERS.find(u => u.email === email);
  if (hasUser) {
    throw new HttpError('Surry, Could not create user. email already exists.', 422); 
  }

  const createUser = {
    id: uuidv4(),
    name,
    email,
    password
  };

  DUMMY_USERS.push(createUser);

  res.status(201).json({user: createUser})
};

const login = (req, res, next) => {
  const { email, password} = req.body;

  const identifiedeUser = DUMMY_USERS.find(u => u.email === email);

  if (!identifiedeUser || identifiedeUser.password !== password) {
    throw new HttpError('Surry, Could not find any user.', 401);  
  }

  res.send('!נכנסת בהצלחה')
}

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;