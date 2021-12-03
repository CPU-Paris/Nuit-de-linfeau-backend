import { getConnection } from "typeorm";
import { Bateau } from "../../entity/Bateau";
import { Personne } from "../../entity/Personne";
import { Sauvetage } from "../../entity/Sauvetage";

const findSauvetage = async (id) => {
  return await getConnection()
    .getRepository(Sauvetage)
    .find({
      where: {
        id,
      },
      relations: ["sauveteurs", "sauve", "bateaux"],
    });
};

const createOrUpdateSauvetage = async (req) => {
  let sauveteurs = [];
  for (let i in req.body.sauveteurs) {
    sauveteurs.push(
      await getConnection()
        .getRepository(Personne)
        .findOne(req.body.sauveteurs[i])
    );
  }
  req.body.sauveteurs = sauveteurs;

  let sauve = [];
  for (let i in req.body.sauve) {
    sauve.push(
      await getConnection().getRepository(Personne).findOne(req.body.sauve[i])
    );
  }
  req.body.sauve = sauve;

  let bateaux = [];
  for (let i in req.body.bateaux) {
    bateaux.push(
      await getConnection().getRepository(Bateau).findOne(req.body.bateaux[i])
    );
  }
  req.body.bateaux = bateaux;

  if (req.body.bateaux.length === 0) req.body.bateaux = null;
  if (req.body.sauve.length === 0) req.body.sauve = null;
  if (req.body.sauveteurs.length === 0) req.body.sauveteurs = null;

  console.log(req.body);

  const sauveSave = await getConnection()
    .getRepository(Sauvetage)
    .save(req.body);
  return sauveSave;
};

const deleteSauvetage = async (id) => {
  return await getConnection().getRepository(Sauvetage).delete(id);
};

export { findSauvetage, createOrUpdateSauvetage, deleteSauvetage };
