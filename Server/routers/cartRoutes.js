const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.post('/api/carrito', cartController.addToCart);

module.exports = router;
