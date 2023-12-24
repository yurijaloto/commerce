import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateProducts1702006111018 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table({
				name: 'products',
				columns: [
					{
						name:'id',
						type: 'uuid',
						isPrimary: true,
						generationStrategy: 'uuid',
						default: 'uuid_generate_v4()'
					},
					{
						name:'name',
						type: 'varchar', //string
					},
					{
						name:'price',
						type: 'decimal', //string
						precision: 10,
						scale: 2 //2 casas decimais
					},
					{
						name:'quantity',
						type: 'int',
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable('products')
    }

}
