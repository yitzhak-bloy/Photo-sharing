const jwt = require('jsonwebtoken');

const httpError = require('../models/http-error');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      throw new Error('Authenticatin failed!');
    };

    const decodedToken = jwt.verify(token, 'supersecret_dont_share');
    req.userData = { userId: decodedToken.useId };
    next();
  } catch(err) {
    const error = new httpError('Authenticatin failed!', 401);
    return next(error);
  };
};