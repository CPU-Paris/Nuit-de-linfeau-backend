import { readFileSync } from "fs";
import "reflect-metadata";

require("dotenv").config();

console.log("Démarrage de l'API.");
import { createConnection, getConnection } from "typeorm";

import * as apiRoutes from "./api/routes";
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

    let personne = new Personne();
    personne.nom_prenom = "Toto";

    let bio = new Texte();
    bio.texte = "Je suis un texte";
    bio.date = new Date();
    bio.valide = true;

    await getConnection().manager.save(bio);

    personne.bio = bio;
    await getConnection().manager.save(personne);

    let file = await readFileSync("./run.txt", "utf8");
    let lines = file.toString().split(/\r?\n/);

    console.log(file.toString().substring(0, 200));

    let personnes = [];

    console.log(lines.length + " lignes");

    for (let i in lines) {
      let line = lines[i].split(",");
      if (line[0] === "PER") {
        if (personnes.filter((p) => p.nom_prenom === line[1]).length === 0) {
          let personne = new Personne();
          personne.nom_prenom = line[1];
          personnes.push(personne);
          console.log(i);
        }
      }
    }

    await connection
      .createQueryBuilder()
      .insert()
      .into(Personne)
      .values(personnes)
      .execute();
  })
  .catch((error) => console.log("Error: ", error));
