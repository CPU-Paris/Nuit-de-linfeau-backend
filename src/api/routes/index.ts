import * as express from "express";
const router = express.Router();

import Personnes = require("./Personnes.routes");
import Bateaux = require("./Bateaux.routes");
import Sauvetages = require("./Sauvetages.routes");
import Textes = require("./Textes.routes");

router.use("/", Personnes);
router.use("/", Bateaux);
router.use("/", Sauvetages);
router.use("/", Textes);

router.get("/", (req, res) => {
  res.status(200).json({ status: "OK" });
});

export = router;
