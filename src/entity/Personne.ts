import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  OneToOne,
  ManyToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Texte } from "./Texte";

@Entity()
export class Personne {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nom_prenom: string;

  @ManyToOne(() => Texte)
  @JoinColumn()
  bio?: Texte;

  @Column({ nullable: true })
  date_naissance?: Date;

  @Column({ nullable: true })
  date_deces?: Date;
}
