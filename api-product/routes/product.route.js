const express = require('express');
const router = express.Router();

// Require the controllers
const product_controller = require('../controllers/product.controller');

router.post('/list', product_controller.list);
router.post('/create', product_controller.create);
router.get('/show/:id', product_controller.show);
router.put('/edit/:id', product_controller.update);
router.delete('/delete/:id', product_controller.delete);
module.exports = router;