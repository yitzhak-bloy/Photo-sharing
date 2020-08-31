const { v4: uuidv4 } = require('uuid');

const HttpError = require('../models/http-error');

let DUMMY_USERS = [
  {
    id: 'u1',
    description: 'One of the most famous sky scrapers in the world!',
    address: '20 W 34th St, New York, NY 10001',
  },
  {
    id: 'u2',
    description: 'In the world!',
    address: 'rehovot',
  },
  {
    id: 'u3',
    description: ' world!',
    address: 'jerujalem',
  },
];


const getAllUsers = (req, res, next) => {
 
  if (DUMMY_USERS.length === 0) {
    throw new HttpError('Could not find any user.', 404);
  }

  res.json({ DUMMY_USERS });
};


const createUser = (req, res, next) => {
  const {name, description, address} = req.body;
  const createUser = {
    id: uuidv4(),
    name,
    description,
    address
  };

  DUMMY_USERS.push(createUser);

  res.status(201).json({user: createUser})
};

const login = (req, res, next) => {
  res.status(200).send('נכנסת בהצלחה')
}

exports.getAllUsers = getAllUsers;
exports.createUser = createUser;
exports.login = login;