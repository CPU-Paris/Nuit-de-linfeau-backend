"use strict";
var express = require("express");
var router = express.Router();
var Personnes = require("./PersonnesRoute");
router.use("/", Personnes);
router.get("/", function (req, res) {
    res.status(200).json({ status: "OK" });
});
module.exports = router;
//# sourceMappingURL=index.js.map