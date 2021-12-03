import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Texte } from "./Texte";

@Entity()
export class Modification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  texte: string;

  @ManyToOne((type) => Texte, (texte) => texte.modif_attente)
  texteModifie: Texte;
}
