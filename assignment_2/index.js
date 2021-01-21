/**
 * Import some important stuff like:
 * express, path
 */

const express = require('express');
const app = express();
const path = require('path');
const baseRouter = require('./routes/base');
const usersRouter = require('./routes/users');

/**
 * Handle some routes
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(baseRouter);
app.use(usersRouter);

// Handle if url not found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);