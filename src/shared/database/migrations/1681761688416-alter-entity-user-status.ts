import {MigrationInterface, QueryRunner} from "typeorm";

export class alterEntityUserStatus1681761688416 implements MigrationInterface {
    name = 'alterEntityUserStatus1681761688416'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expenses" DROP COLUMN "status"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "expenses" ADD "status" character varying NOT NULL`);
    }

}
