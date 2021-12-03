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
  req.body.texteModifie = await getConnection()
    .getRepository(Texte)
    .findOne(req.body.texteModifie);
  return await getConnection().getRepository(Modification).save(req.body);
};

const approveModification = async (req) => {
  let modif = await getConnection()
    .getRepository(Modification)
    .findOne({ where: { id: req.body.id }, relations: ["texteModifie"] });
  let texte = modif.texteModifie;
  texte.texte = req.body.texte;
  await getConnection().getRepository(Texte).save(texte);
  await getConnection().getRepository(Modification).remove(req.body);
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
  approveModification,
};
