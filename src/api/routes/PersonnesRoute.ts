import * as express from "express";
import { Personne } from "../../entity/Personne";
import { getAllPersonnes } from "../services/Personne";

const router = express.Router();

router.get("/personnes", async (req, res) => {
  let personnes: Personne[] = await getAllPersonnes(true);
  res.status(200).send(personnes);
});

export = router;
