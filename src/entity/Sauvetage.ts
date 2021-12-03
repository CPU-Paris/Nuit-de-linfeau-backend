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

  @OneToMany(() => Personne, (personne) => personne.id)
  @JoinTable()
  sauveteurs: Personne[];

  @OneToMany(() => Personne, (personne) => personne.id)
  @JoinTable()
  sauve: Personne[];

  @Column()
  date: Date;

  @ManyToOne(() => Texte)
  @JoinColumn()
  desc: Texte;

  @ManyToMany(() => Bateau)
  @JoinColumn()
  bateaux: Bateau[];
}
