const express = require('express');
const router = express.Router();

// Require the controllers
const order_controller = require('../controllers/order.controller');

router.post('/submit', order_controller.submit);
module.exports = router;