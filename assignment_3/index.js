const express = require('express');
const app = express();
const homeRouter = require('./routes/home');
const usersRouter = require('./routes/users');

// Register our view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// For 'POST' requirements
app.use(express.urlencoded({ extended: false }));

// register our static file using static middleware
// app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRouter.routes);
app.use(usersRouter.routes);

app.use((req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page not Found!'
    })
})

app.listen(3000);