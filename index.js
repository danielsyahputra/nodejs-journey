const express = require('express');
const path = require('path');
const app = express();
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const errorController = require('./controllers/error')

// app.engine(
//     'hbs',
//     expressHbs({
//         layoutsDir: 'views/layouts/',
//         defaultLayout: 'main-layout',
//         extname: 'hbs'
//     })
// );
// app.set('view engine', 'hbs'); // Ini untuk handlebars yang bukan built-in express nya
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use(errorController.get404);

app.listen(3000);