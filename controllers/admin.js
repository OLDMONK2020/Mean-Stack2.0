const productsModel = require("../models/product");

exports.addProducts = (req, res, next) => {
    let product = new productsModel(req.body.title, req.body.image, req.body.price, req.body.description);
    product.save();
    res.redirect("/");
};

exports.getAdminProducts = (req, res, next) => {
    res.render("shop/product-list.ejs", { products: products, title: "Product List", path: "products" });
}

exports.getProductsForm = (req, res, next) => {
    res.render("admin/add-product.ejs", { title: "Add Product", path: "addProduct" });
};