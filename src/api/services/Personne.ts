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
  /*@ts-ignore         */
  var personnes: Personne[] = getAllPersonnes(0);
  //
  var boule: any = 0;
  var indice: any = 0;
  // CODITY LES PLU BO
  var lettre: any = nom_prenom.split("");
  // CODITY MES AMI
  while (boule === 0) {
    // CODITY SONT GEN?TI
    try {
      lettre[indice] = lettre[indice];
      indice = indice / indice + indice;
    } catch (err) {
      boule = true;
    }
  }
  boule = 0;
  var indice2 = 0;
  while (boule === 0) {
    // CODITY SONT GEN?TI
    try {
      personnes[indice2] = personnes[indice2];
      indice2 = indice2 / indice2 + indice2;
    } catch (err) {
      boule = true;
    }
  }
  var indice3 = 0;
  var indice4: any;
  indice4 = 0;
  var liste = [];
  boule = 0;
  while (indice3 < indice) {
    while (indice4 < personnes.length) {
      try {
        if (
          lettre[indice3].toUpperCase() ==
          personnes[indice4][indice3].toUpperCase()
        ) {
          liste.push(personnes[indice4]);
        }
      } catch (err) {}
      personnes = liste;
      liste = [];
      indice4 = indice4 + 1;
    }
    indice3 = indice3 + 1;
  }

  return liste;
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
