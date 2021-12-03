import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Modification } from "./Modification";

@Entity()
export class Texte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: "" })
  texte: string;

  @OneToMany(
    (type) => Modification,
    (modification) => modification.texteModifie
  )
  modif_attente: Modification[];

  @Column()
  date: Date;
}
