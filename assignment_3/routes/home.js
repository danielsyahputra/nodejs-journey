const express = require('express');
const router = express.Router()

const listUsers = [];

router.get('/', (req, res, next) => {
    res.render('home', {
        pageTitle: 'Homepage'
    })
})

router.post('/', (req, res, next) => {
    listUsers.push({
        username: req.body.user
    });
    console.log(listUsers);
    res.redirect('/users');
})

exports.routes = router
exports.listUsers = listUsers;