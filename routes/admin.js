const express = require("express");
const router = express.Router();

router.use("/yo", (req, res, next) => {
    res.send("<h1>Yo from Admin js</h1>");
})

module.exports = router;