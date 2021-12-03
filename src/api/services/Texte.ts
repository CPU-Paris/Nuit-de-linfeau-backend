import { getConnection } from "typeorm";
import { Modification } from "../../entity/Modification";
import { Texte } from "../../entity/Texte";

const createTexte = async (req) => {
  return await getConnection().getRepository(Texte).save(req.body);
};

const deleteTexte = async (req) => {
  return await getConnection().getRepository(Texte).remove(req.body);
};

const getModifications = async () => {
  return await getConnection()
    .getRepository(Modification)
    .find({ relations: ["texteModifie"] });
};

const createModification = async (req) => {
  return await getConnection().getRepository(Modification).save(req.body);
};

const removeModification = async (req) => {
  return await getConnection().getRepository(Modification).remove(req.body);
};

export {
  createTexte,
  deleteTexte,
  getModifications,
  createModification,
  removeModification,
};
