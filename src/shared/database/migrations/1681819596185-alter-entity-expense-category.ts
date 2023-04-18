import {MigrationInterface, QueryRunner} from "typeorm";

export class alterEntityExpenseCategory1681819596185 implements MigrationInterface {
    name = 'alterEntityExpenseCategory1681819596185'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expenses" ADD "category_id" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expenses" DROP COLUMN "category_id"`);
    }

}
