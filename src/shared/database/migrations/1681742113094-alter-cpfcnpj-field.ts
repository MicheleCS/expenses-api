import {MigrationInterface, QueryRunner} from "typeorm";

export class alterCpfcnpjField1681742113094 implements MigrationInterface {
    name = 'alterCpfcnpjField1681742113094'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_87b8888186ca9769c960e926870"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "cpfCnpj" TO "cpfcnpj"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME CONSTRAINT "UQ_ca19874d752b7aef38f6a876227" TO "UQ_d470a8e05c1a60492eea66d149d"`);
        await queryRunner.query(`ALTER TABLE "expenses" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "expenses" ADD "value" money NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_87b8888186ca9769c960e926870" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_87b8888186ca9769c960e926870"`);
        await queryRunner.query(`ALTER TABLE "expenses" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "expenses" ADD "value" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" RENAME CONSTRAINT "UQ_d470a8e05c1a60492eea66d149d" TO "UQ_ca19874d752b7aef38f6a876227"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "cpfcnpj" TO "cpfCnpj"`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_87b8888186ca9769c960e926870" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
