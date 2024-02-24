import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import "reflect-metadata"
import { ICustomer } from '../../../../../modules/customers/domain/models/ICustomer'

@Entity('customers')
export class Customer implements ICustomer {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column('varchar')
	name: string

	@Column('varchar')
	email: string

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date
}