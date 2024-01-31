import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Generated } from 'typeorm'
import "reflect-metadata"

@Entity('tokens')
export class Usertoken {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	@Generated('uuid')
	user_token: 'string'

	@Column()
	user_id: string

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date
}