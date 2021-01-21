const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('Dummy Middleware!');
    next();
})

app.use('/users', (req, res, next) => {
    console.log('This is "/users" Page');
    res.send('<h1>This is "/users" Page</h1>')
})

app.use('/', (req, res, next) => {
    console.log('This is "/" Page');
    res.send('<h1>This is "/" Page</h1>')
})

app.listen(3000);