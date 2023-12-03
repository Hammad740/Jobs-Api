const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/auth');

///// first way of doing router things
router.post('/register', register);
router.post('/login', register);

module.exports = router;
