import * as express from "express";
import { Modification } from "../../entity/Modification";
import { Texte } from "../../entity/Texte";
import {
  approveModification,
  createModification,
  createTexte,
  getModifications,
  removeModification,
} from "../services/Texte";
const router = express.Router();

router.post("/texte", async (req, res) => {
  try {
    let texte: Texte = await createTexte(req);
    return res.status(200).send(texte);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.get("/texte/modifications", async (req, res) => {
  let modifications: Modification[] = await getModifications();
  return res.status(200).send(modifications);
});

router.post("/texte/modifications", async (req, res) => {
  try {
    let modification: Modification = await createModification(req);
    return res.status(200).send(modification);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.put("/texte/modifications", async (req, res) => {
  try {
    await approveModification(req);
    return res.sendStatus(200);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.delete("/texte/modifications", async (req, res) => {
  try {
    await removeModification(req);
    return res.status(200);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
});

router.delete("/texte", (req, res) => {});

export = router;
