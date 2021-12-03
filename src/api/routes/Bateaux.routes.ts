import * as express from "express";
import { Bateau } from "../../entity/Bateau";
import {
  createBateau,
  deleteBateau,
  findBateau,
  updateBateau,
} from "../services/Bateau";
const router = express.Router();

router.get("/bateaux/:recherche", async (req, res) => {
  let bateaux: Bateau[] = await findBateau(req);
  return res.status(200).send(bateaux);
});

router.post("/bateaux", async (req, res) => {
  try {
    let bateau: Bateau = await createBateau(req);
    res.status(200).send(bateau);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.delete("/bateaux", async (req, res) => {
  try {
    let bateau: Bateau = await deleteBateau(req);
    res.status(200).send(bateau);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.put("/bateaux", async (req, res) => {
  try {
    let bateau: Bateau = await updateBateau(req);
    res.status(200).send(bateau);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

export = router;
