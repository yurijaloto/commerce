import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'
import "reflect-metadata"

@Entity('products')
export class Product {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column('varchar')
	name: string

	@Column('decimal')
	price: number

	@Column('int')
	quantity: number

	@CreateDateColumn()
	created_at: Date

	@UpdateDateColumn()
	updated_at: Date
}