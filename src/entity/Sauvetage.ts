import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Bateau } from "./Bateau";
import { Personne } from "./Personne";
import { Texte } from "./Texte";

@Entity()
export class Sauvetage {
  @PrimaryColumn()
  id: string;

  @ManyToMany(() => Personne)
  @JoinTable()
  sauveteurs: Personne[];

  @ManyToMany(() => Personne)
  @JoinTable()
  sauve: Personne[];

  @Column()
  date: Date;

  @ManyToOne(() => Texte)
  @JoinColumn()
  desc?: Texte;

  @ManyToMany(() => Bateau)
  @JoinTable()
  bateaux: Bateau[];
}
