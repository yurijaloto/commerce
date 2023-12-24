import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsers1703385819459 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(new Table({
				name: 'users',
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
						type: 'varchar',
					},
					{
						name:'age',
						type: 'int'
					},
					{
						name:'email',
						type: 'varchar',
						isUnique: true
					},
					{
						name:'password',
						type: 'varchar',
					},
					{
						name:'avatar',
						type: 'varchar',
						isNullable: true //pode ser nulo. O padrao é requerer o campo. Mas pode nao ter foto
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
			await queryRunner.dropTable('users')
    }

}
