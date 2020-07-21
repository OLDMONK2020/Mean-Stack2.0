const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");

router.get("/add-product", adminController.getProductsForm);
router.post("/add-product", adminController.addProducts);
router.post("/admin-product", adminController.addProducts);

module.exports = router;