import "reflect-metadata";

import { readFileSync } from "fs";
import { createConnection } from "typeorm";
import { Personne } from "./entity/Personne";

createConnection()
  .then(async (connection) => {
    let file = await readFileSync("../run.txt", "utf8");
    let lines = file.toString().split("\r\n");

    for (let i in lines) {
      console.log(i);
      let line = lines[i].split(",");
      if (line[0] === "PER") {
        let personne = new Personne();
        personne.nom_prenom = line[1];
        connection.manager.save(personne);
      }
    }
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
