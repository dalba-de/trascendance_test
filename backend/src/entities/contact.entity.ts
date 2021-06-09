import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contact {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	rol: number;

	@Column()
	email: string;

	@Column()
	city: string;

	@Column()
	trophies: number;

}