const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');
const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    // console.log(rootDir);
    // rootDir kalau kita print bakalan kyak gini: /home/danielsyahputra13/Kuliah/FullStack Journey/nodejs-complete-guide
    // Intinya itu buat dapatin entry directory dari project nya kita.
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: 'admin/add-product',
        activeAddProduct: true,
        productCSS: true,
        formsCSS: true
    });
});

router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
})

exports.routes = router;
exports.products = products;