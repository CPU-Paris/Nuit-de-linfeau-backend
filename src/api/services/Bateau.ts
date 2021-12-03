import { getConnection, ILike, Like } from "typeorm";
import { Bateau } from "../../entity/Bateau";

const findBateau = async (nom: string) => {
  return await getConnection()
    .getRepository(Bateau)
    .find({
      where: { nom: ILike(`%${nom}%`) },
    });
};

const createBateau = async (req) => {
  const bateau = new Bateau();
  bateau.nom = req.body.nom;
  return await getConnection().getRepository(Bateau).save(bateau);
};

const updateBateau = async (req) => {
  const bateau = new Bateau();
  bateau.id = req.body.id;
  bateau.nom = req.body.nom;
  return await getConnection().getRepository(Bateau).save(bateau);
};

const deleteBateau = async (req) => {
  const bateau = new Bateau();
  bateau.id = req.body.id;
  return await getConnection().getRepository(Bateau).remove(bateau);
};

export { findBateau, createBateau, updateBateau, deleteBateau };
