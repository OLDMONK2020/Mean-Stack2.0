const express = require("express");
const router = express.Router();

router.use("/", (req, res, next) => {
    res.send("<h1>/ from Shop Js");
})

module.exports = router;