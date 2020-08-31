const express = require('express');

const usersControllers = require('../controllers/user-controller')

const router = express.Router();

router.get('/', usersControllers.getAllUsers)

module.exports = router;