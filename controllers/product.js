const products = [];

exports.getAddProduct = (req, res, next) => {
  // console.log(rootDir);
  // rootDir kalau kita print bakalan kyak gini: /home/danielsyahputra13/Kuliah/FullStack Journey/nodejs-complete-guide
  // Intinya itu buat dapatin entry directory dari project nya kita.
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "admin/add-product",
    activeAddProduct: true,
    productCSS: true,
    formsCSS: true,
  });
};

exports.postAddProduct = (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  // res.sendFile('./views/shop.html');
  // Kode diatas ga akan bekerja karena mereka melihat file nya dari root folder di OS kita.
  // res.sendFile(path.join(rootDir,'views', 'shop.html'));
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });

  // __dirname : memegang absolute path ke folder ini di OS
  // path.join() bakalan otomatis membuat path dengan cara concatinating
};
