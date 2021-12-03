import { getConnection, ILike, Like } from "typeorm";
import { Personne } from "../../entity/Personne";

const getAllPersonnes = async (withBio: boolean) => {
  return await getConnection()
    .getRepository(Personne)
    .find({ relations: ["bio"] });
};

const findPersonne = async (nom_prenom: string) => {
  return await getConnection()
    .getRepository(Personne)
    .find({
      where: { nom_prenom: ILike(`%${nom_prenom}%`) },
      relations: ["bio"],
    });
};

const findPersonneById = async (id: number) => {
  return await getConnection()
    .getRepository(Personne)
    .findOne({ where: { id }, relations: ["bio"] });
};

const findPersonneMOVAI = async (nom_prenom: string) => {
  var $$$$$$$$$$: any = await getAllPersonnes(false);
  let $$$$$$$$$$$$$$$$$$$$$: any = [];
  let $$$$$$$$$$$$$$$$$$$$ = [];
  let $$$$$$$$$$$$$$$$$$$$$$ = 0;
  let $$$$$$$$$$$$$$$$$$$$$$$ = true;
  while ($$$$$$$$$$$$$$$$$$$$$$$) {
    try {
      $$$$$$$$$$$$$$$$$$$$$.push($$$$$$$$$$[$$$$$$$$$$$$$$$$$$$$$$]);
      $$$$$$$$$$$$$$$$$$$$$$ = $$$$$$$$$$$$$$$$$$$$$$ + 1;
      console.log("premier while");
      console.log($$$$$$$$$$$$$$$$$$$$$$);
    } catch (err) {
      console.log("fin du premier while");
      $$$$$$$$$$$$$$$$$$$$$$$ = false;
    }
  }
  let $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ = 0;
  let $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ = 0;
  while ($$$$$$$$$$$$$$$$$$$$$$$$$$$$$ < $$$$$$$$$$$$$$$$$$$$$$) {
    if (
      $$$$$$$$$$$$$$$$$$$$$[
        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      ].toUpperCase().includes(nom_prenom.toUpperCase()) &&
      $$$$$$$$$$$$$$$$$$$$$[
        $$$$$$$$$$$$$$$$$$$$$$$$$$$$$
      ].toLowerCase().includes(nom_prenom.toLowerCase()) &&
      $$$$$$$$$$$$$$$$$$$$$$$ != true
    ) {
      $$$$$$$$$$$$$$$$$$$$.push(
        $$$$$$$$$$$$$$$$$$$$$[$$$$$$$$$$$$$$$$$$$$$$$$$$$$$]
      );
    }
    console.log("2e while");
    console.log($$$$$$$$$$$$$$$$$$$$$$$$$$$$$);
    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ = $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ + 1;
  }
  console.log("fin");
  return $$$$$$$$$$$$$$$$$$$$;
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
  return await getConnection().manager.remove(personne);
};

export {
  getAllPersonnes,
  findPersonne,
  findPersonneById,
  createPersonne,
  deletePersonne,
  updatePersonne,
  findPersonneMOVAI,
};
