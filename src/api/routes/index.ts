import * as express from "express";
const router = express.Router();

import Personnes = require("./Personnes.routes");

router.use("/", Personnes);

router.get("/", (req, res) => {
  res.status(200).json({ status: "OK" });
});

export = router;
