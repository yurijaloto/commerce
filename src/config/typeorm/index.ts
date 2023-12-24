import "reflect-metadata"
import { DataSource } from "typeorm"
import { productsMigration, usersMigration } from './migrations'
// import { Product } from "@modules/products/typeorm/entities/Product"
import { Product } from "../../modules/products/typeorm/entities/Product"
import { User } from "../../modules/users/typeorm/entities/User"

export const appDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "testing",
    database: "sellingapi",
    // synchronize: true,
    // logging: false,
    entities: [
			Product,
			User
		],
    migrations: [
			productsMigration,
			usersMigration
		]
})