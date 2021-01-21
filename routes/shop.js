const express = require('express');

const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();
const adminData = require('./admin')

router.get('/', (req, res, next) => {
    // res.sendFile('./views/shop.html');
    // Kode diatas ga akan bekerja karena mereka melihat file nya dari root folder di OS kita.
    // res.sendFile(path.join(rootDir,'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: (products.length > 0),
        activeShop: true,
        productCSS: true
    });

    // __dirname : memegang absolute path ke folder ini di OS
    // path.join() bakalan otomatis membuat path dengan cara concatinating 
});

module.exports = router;