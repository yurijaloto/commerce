import "reflect-metadata"
import { DataSource } from "typeorm"
import { productsMigration } from './migrations'
import { Product } from "@modules/products/typeorm/entities/Product"

export const appDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "testing",
    database: "sellingapi",
    // synchronize: true,
    // logging: false,
    entities: [Product],
    migrations: [
			productsMigration
		]
})