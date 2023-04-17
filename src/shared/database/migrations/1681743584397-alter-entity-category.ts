import {MigrationInterface, QueryRunner} from "typeorm";

export class alterEntityCategory1681743584397 implements MigrationInterface {
    name = 'alterEntityCategory1681743584397'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categorys" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "categorys" DROP COLUMN "companyParty"`);
        await queryRunner.query(`ALTER TABLE "categorys" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categorys" ADD "expense_id" uuid`);
        await queryRunner.query(`ALTER TABLE "categorys" ADD CONSTRAINT "FK_6a79215e858cf8b0d5d76441380" FOREIGN KEY ("expense_id") REFERENCES "expenses"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categorys" DROP CONSTRAINT "FK_6a79215e858cf8b0d5d76441380"`);
        await queryRunner.query(`ALTER TABLE "categorys" DROP COLUMN "expense_id"`);
        await queryRunner.query(`ALTER TABLE "categorys" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "categorys" ADD "companyParty" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categorys" ADD "type" character varying NOT NULL`);
    }

}
