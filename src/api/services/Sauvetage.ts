import { getConnection } from "typeorm";
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
  const sauve = await getConnection().getRepository(Sauvetage).save(req);
  return sauve;
};

const deleteSauvetage = async (id) => {
  return await getConnection().getRepository(Sauvetage).delete(id);
};

export { findSauvetage, createOrUpdateSauvetage, deleteSauvetage };
