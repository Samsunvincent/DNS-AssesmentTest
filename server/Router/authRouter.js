const express = require('express')
const Router = express.Router();

const authController = require('../controller/authController');

Router.post('/login',authController.login)

module.exports = Router