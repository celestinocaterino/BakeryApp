import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1689609642607 implements MigrationInterface {
  name = 'Migration1689609642607';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`products\` ADD \`quantity\` int NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`products\` DROP COLUMN \`quantity\``
    );
  }
}
