const express = require('express');
const path = require('path');
const app = express();
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const errorController = require('./controllers/error')
// const expressHbs = require('express-handlebars');

/**
 * Untuk bisa memakai templating engine, kita harus register dulu templating engine nya biar express nya tau.
 */
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

/**
 * Use mengizinkan kita untuk menambahkan sebuah middleware function.
 * Argumen next adalah fungsi yang ngizinkan kita request ke next middleware.
 */

app.use(express.urlencoded({ extended: false }));

// Kode di bawah ini maksudnya kalau nanti server ingin minta file static 
// dia bakalan cari directory yang namanya public.
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use(errorController.get404);

app.listen(3000);

/**
 * Note: Request doesn't try to parse the incoming request body
 * Solution: use body parser third party package, we can install it by using npm install --save body-parser
 */