import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateUserTokens1704837062813 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table({
				name: 'tokens',
				columns: [
					{
						name:'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()'
					},
					{
						name:'user_id',
						type: 'uuid',
					},
					{
						name:'created_at',
						type: 'timestamp',
						default: 'now()'
					},
					{
						name:'updated_at',
						type: 'timestamp',
						default: 'now()'
					}
				]
			}))

			await queryRunner.createForeignKey(
				"user_token",
				new TableForeignKey({
						columnNames: ["user_id"],
						referencedColumnNames: ["id"],
						referencedTableName: "users",
						onDelete: "CASCADE",
						onUpdate: "CASCADE"
				}),
		)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable('tokens')
    }

}
