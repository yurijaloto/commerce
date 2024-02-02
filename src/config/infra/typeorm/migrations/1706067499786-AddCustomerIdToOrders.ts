import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm"

export class AddCustomerIdToOrders1706067499786 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.addColumn('orders', new TableColumn({
				name: 'customer_id',
				type: 'uuid',
				isNullable: true //caso cliente seja excluido, setar campo pra null preservando os pedidos
			}))

			await queryRunner.createForeignKey('orders', new TableForeignKey({
				name: 'ordersCustomer',
				columnNames: ['customer_id'],
				referencedTableName: 'customers',
				referencedColumnNames: ['id'],
				onDelete: 'SET NULL'
			}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropForeignKey('orders', 'ordersCustomer')
			await queryRunner.dropColumn('orders', 'customer_id')
    }

}
