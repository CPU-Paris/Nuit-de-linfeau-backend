import { getConnection, Like } from "typeorm";
import { Personne } from "../../entity/Personne";

const getAllPersonnes = async (withBio: boolean) => {
  return await getConnection()
    .getRepository(Personne)
    .find({ relations: ["bio"] });
};

const findPersonne = async (nom_prenom: string) => {
  return await getConnection()
    .getRepository(Personne)
    .find({ nom_prenom: Like(`%${nom_prenom}%`) });
};

const createPersonne = async (req) => {
  let personne: Personne = new Personne();
  personne.nom_prenom = req.body.nom_prenom;
  personne.date_naissance = req.body.date_naissance;
  personne.date_deces = req.body.date_deces;
  return await getConnection().manager.save(personne);
};

const updatePersonne = async (req) => {
  let personne: Personne = new Personne();
  personne.id = req.body.id;
  personne.nom_prenom = req.body.nom_prenom;
  personne.date_naissance = req.body.date_naissance;
  personne.date_deces = req.body.date_deces;
  return await getConnection().manager.save(personne);
};

const deletePersonne = async (req) => {
  let personne: Personne = new Personne();
  personne.id = req.body.id;
  getConnection().manager.remove(personne);
};

export {
  getAllPersonnes,
  findPersonne,
  createPersonne,
  deletePersonne,
  updatePersonne,
};
