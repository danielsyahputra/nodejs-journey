const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shop')

// Note: Add more spesific route first and then add dynamic routes
router.get('/', shopController.getIndex);
router.get('/products', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct)
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);
router.get('/checkout', shopController.getCheckout)
module.exports = router;