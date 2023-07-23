import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1690112730693 implements MigrationInterface {
  name = 'Migration1690112730693';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`products\` DROP COLUMN \`quantity\``
    );
    await queryRunner.query(
      `ALTER TABLE \`products\` ADD \`quantity\` int NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`product_ingredient\` DROP COLUMN \`unit_of_measure\``
    );
    await queryRunner.query(
      `ALTER TABLE \`product_ingredient\` ADD \`unit_of_measure\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`product_ingredient\` DROP COLUMN \`unit_of_measure\``
    );
    await queryRunner.query(
      `ALTER TABLE \`product_ingredient\` ADD \`unit_of_measure\` int NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`product_ingredient\` DROP COLUMN \`unit_of_measure\``
    );
    await queryRunner.query(
      `ALTER TABLE \`product_ingredient\` ADD \`unit_of_measure\` varchar(255) NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`product_ingredient\` DROP COLUMN \`unit_of_measure\``
    );
    await queryRunner.query(
      `ALTER TABLE \`product_ingredient\` ADD \`unit_of_measure\` int NOT NULL`
    );
    await queryRunner.query(
      `ALTER TABLE \`products\` DROP COLUMN \`quantity\``
    );
    await queryRunner.query(
      `ALTER TABLE \`products\` ADD \`quantity\` int NOT NULL`
    );
  }
}
