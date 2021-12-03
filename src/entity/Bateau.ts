import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Bateau {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  nom: string;
}
