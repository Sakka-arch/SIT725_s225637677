const express = require('express');
const router = express.Router();

const controller = require('../controllers/math.controller');

router.get('/add', controller.addNumbers);

module.exports = router;