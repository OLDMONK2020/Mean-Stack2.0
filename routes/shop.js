const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop");

router.get("/", shopController.getProductList);
router.get("/cart", shopController.cartProducts);
router.get("/products", shopController.getProducts);

module.exports = router;