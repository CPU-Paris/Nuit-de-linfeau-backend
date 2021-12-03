import * as express from "express";
import { getConnection } from "typeorm";
import { Personne } from "../../entity/Personne";
import {
  createPersonne,
  deletePersonne,
  findPersonne,
  getAllPersonnes,
  updatePersonne,
} from "../services/Personne";

const router = express.Router();

router.get("/personnes", async (req, res) => {
  let personnes: Personne[] = await getAllPersonnes(true);
  res.status(200).send(personnes);
});

router.get("/personnes/:recherche", async (req, res) => {
  let personnes: Personne[] = await findPersonne(req.params.recherche);
  res.status(200).send(personnes);
});

router.post("/personnes", async (req, res) => {
  try {
    let personne: Personne = await createPersonne(req);
    res.status(200).send(personne);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.put("/personnes", async (req, res) => {
  try {
    let personne: Personne = await updatePersonne(req);
    res.status(200).send(personne);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.delete("/personnes", async (req, res) => {
  deletePersonne(req);
  res.sendStatus(200);
});

export = router;
