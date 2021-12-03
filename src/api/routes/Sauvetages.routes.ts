import * as express from "express";
import { DeleteResult } from "typeorm";
import { Sauvetage } from "../../entity/Sauvetage";
import {
  createOrUpdateSauvetage,
  deleteSauvetage,
  findSauvetage,
} from "../services/Sauvetage";
const router = express.Router();

router.get("/sauvetages/:recherche", async (req, res) => {
  let sauvetages: Sauvetage[] = await findSauvetage(req.params.recherche);
  return res.status(200).send(sauvetages);
});

router.post("/sauvetages", async (req, res) => {
  try {
    let sauvetage: Sauvetage = await createOrUpdateSauvetage(req);
    res.status(200).send(sauvetage);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.delete("/sauvetages", async (req, res) => {
  try {
    let sauvetage: DeleteResult = await deleteSauvetage(req.body.id);
    res.status(200).send(sauvetage);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.put("/sauvetages", async (req, res) => {
  try {
    let sauvetage: Sauvetage = await createOrUpdateSauvetage(req);
    res.status(200).send(sauvetage);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

export = router;
