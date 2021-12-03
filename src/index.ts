import { readFileSync } from "fs";
import "reflect-metadata";

require("dotenv").config();

console.log("Démarrage de l'API.");
import { createConnection, getConnection } from "typeorm";

import * as apiRoutes from "./api/routes";
import { Bateau } from "./entity/Bateau";
import { Modification } from "./entity/Modification";
import { Personne } from "./entity/Personne";
import { Texte } from "./entity/Texte";

createConnection()
  .then(async (connection) => {
    const express = require("express");
    const app = express();

    const bodyParser = require("body-parser");
    const morgan = require("morgan");

    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*"); // to replace
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "OPTIONS, GET, POST, DELETE, PUT"
      );
      next();
    });

    app.use(bodyParser.json());
    app.use(morgan("combined"));

    app.use("/", apiRoutes);

    app.listen(process.env.EXPRESS_PORT, () => {
      console.log("Express server started.");
    });

    let file = await readFileSync("./run.txt", "utf8");
    let lines = file.toString().split(/\r?\n/);

    console.log(file.toString().substring(0, 200));

    let personnes = [];
    let bateaux = [];

    console.log(lines.length + " lignes");

    for (let i in lines) {
      let line = lines[i].split(",");
      if (line[0] === "PER") {
        if (personnes.filter((p) => p.nom_prenom === line[1]).length === 0) {
          let personne = new Personne();
          personne.nom_prenom = line[1];
          personnes.push(personne);
        }
      } else if (line[0] === "BAT") {
        if (bateaux.filter((p) => p.nom === line[1]).length === 0) {
          let bateau = new Bateau();
          bateau.nom = line[1];
          bateaux.push(bateau);
        }
      }
    }

    await connection
      .createQueryBuilder()
      .insert()
      .into(Personne)
      .values(personnes)
      .execute();

    await connection
      .createQueryBuilder()
      .insert()
      .into(Bateau)
      .values(bateaux)
      .execute();

    let texte = new Texte();
    texte.date = new Date();
    texte.texte = "Coucou";
    let saved = await connection.manager.save(texte);

    let modif = new Modification();
    modif.texte = "Byebye";
    modif.texteModifie = saved;
    let savedModif = await connection.manager.save(modif);

    saved.modif_attente = [savedModif];
    await connection.manager.save(saved);
  })
  .catch((error) => console.log("Error: ", error));
