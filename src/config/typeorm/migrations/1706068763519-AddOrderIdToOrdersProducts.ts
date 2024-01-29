import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm"

export class AddOrderIdToOrdersProducts1706068763519 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.addColumn('orders_products', new TableColumn({
				name: 'order_id',
				type: 'uuid',
				isNullable: true
			}))

			await queryRunner.createForeignKey('orders_products', new TableForeignKey({
				name: 'ordersProductsOrder',
				columnNames: ['order_id'],
				referencedTableName: 'orders',
				referencedColumnNames: ['id'],
				onDelete: 'SET NULL'
			}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropForeignKey('orders_products', 'ordersProductsOrder')
			await queryRunner.dropColumn('orders_products', 'order_id')
    }

}
