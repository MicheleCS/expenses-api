import {MigrationInterface, QueryRunner} from "typeorm";

export class alterEntityUserRole1681757820313 implements MigrationInterface {
    name = 'alterEntityUserRole1681757820313'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_roles" DROP COLUMN "name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_roles" ADD "name" character varying NOT NULL`);
    }

}
