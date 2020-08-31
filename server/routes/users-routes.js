const express = require('express');

const usersControllers = require('../controllers/user-controller')

const router = express.Router();

router.get('/', usersControllers.getAllUsers)

router.post('/signup', usersControllers.createUser)

router.get('/login', usersControllers.login)

module.exports = router;