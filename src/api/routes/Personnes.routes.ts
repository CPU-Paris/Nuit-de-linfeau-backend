import * as express from "express";
import { DeleteResult, getConnection } from "typeorm";
import { Personne } from "../../entity/Personne";
import {
  createPersonne,
  deletePersonne,
  findPersonne,
  findPersonneById,
  findPersonneMOVAI,
  getAllPersonnes,
  updatePersonne,
} from "../services/Personne";

const router = express.Router();

// router.get("/personnes", async (req, res) => {
//   let personnes: Personne[] = await getAllPersonnes(true);
//   res.status(200).send(personnes);
// });

router.get("/personnes/by-id/:id", async (req, res) => {
  let personne: Personne = await findPersonneById(req.params.id);
  if (!personne) return res.sendStatus(404);
  res.status(200).send(personne);
});

router.get("/personnes/:recherche", async (req, res) => {
  let personnes: Personne[] = await findPersonneMOVAI(req.params.recherche);
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
  await deletePersonne(req);
  res.sendStatus(200);
});

export = router;
