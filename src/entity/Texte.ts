import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Texte {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  texte: string;

  @Column()
  date: Date;

  @Column()
  valide: boolean = false;
}
