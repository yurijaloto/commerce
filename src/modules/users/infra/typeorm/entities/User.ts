import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import "reflect-metadata"

@Entity('users')
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column('varchar')
	name: string

	@Column('varchar')
	email: string

	@Column('int')
	age: number

	@Column('varchar')
	password: string

	@Column({
		nullable: true,
		type: 'varchar'
	})
	avatar?: string

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date
}