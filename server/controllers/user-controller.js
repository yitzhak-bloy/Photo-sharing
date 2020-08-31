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

exports.getAllUsers = getAllUsers;