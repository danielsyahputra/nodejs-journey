const express = require('express');
const router = express.Router();
const listUsers = require('./home');

router.get('/users', (req, res, next) => {
    res.render('users', {
        pageTitle: 'Users',
        users: listUsers.listUsers
    })
});

exports.routes = router;