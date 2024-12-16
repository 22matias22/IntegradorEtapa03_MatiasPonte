const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/api/productos', productController.getProducts);
router.post('/api/productos', productController.createProduct);
router.put('/api/productos/:id', productController.updateProduct);
router.delete('/api/productos/:id', productController.deleteProduct);

module.exports = router;
