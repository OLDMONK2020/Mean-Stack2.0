const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
    //res.sendFile(path.join(__dirname, "..", "views", "shop.html"));
    let products  = Product.fetchAll();
    res.render("shop/product-list.ejs", { products: products, title: "Product List", path: "products" });
};

exports.cartProducts = (req,res,next) => {
    res.render("shop/cart.ejs", {products: [], title: "Product Cart", path: "cart"});
}

exports.getProductList = (req,res,next) => {
    let products  = Product.fetchAll();
    res.render("shop/index.ejs", {products: products, title: "Shop Products", path: "shop"});
}


