import {MigrationInterface, QueryRunner} from "typeorm";

export class alterEntityUser1681754962282 implements MigrationInterface {
    name = 'alterEntityUser1681754962282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "bithDate"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "bithDate" TIMESTAMP NOT NULL`);
    }

}
