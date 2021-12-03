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
  req.body.sauveteurs = req.body.sauveteurs.map(
    async (sv) => await getConnection().getRepository(Personne).findOne(sv)
  );

  req.body.sauve = req.body.sauve.map(
    async (sv) => await getConnection().getRepository(Personne).findOne(sv)
  );

  req.body.bateaux = req.body.bateaux.map(
    async (bt) => await getConnection().getRepository(Bateau).findOne(bt)
  );

  console.log(req.body);

  const sauve = await getConnection().getRepository(Sauvetage).save(req.body);
  return sauve;
};

const deleteSauvetage = async (id) => {
  return await getConnection().getRepository(Sauvetage).delete(id);
};

export { findSauvetage, createOrUpdateSauvetage, deleteSauvetage };
