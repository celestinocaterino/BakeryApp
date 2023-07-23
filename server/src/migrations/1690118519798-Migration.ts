import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1690118519798 implements MigrationInterface {
    name = 'Migration1690118519798'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` DROP FOREIGN KEY \`FK_1525d4cd30cd2af9de7952a0fe2\``);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` DROP FOREIGN KEY \`FK_d6fd52ba735eee4514d0a9a92cc\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`to_remove\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`discount\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`quantity\``);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` ADD \`productId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` ADD \`ingredientId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`to_remove\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`discount\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`quantity\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` DROP COLUMN \`unit_of_measure\``);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` ADD \`unit_of_measure\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`price\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`price\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` DROP COLUMN \`unit_of_measure\``);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` ADD \`unit_of_measure\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` CHANGE \`product_id\` \`product_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` CHANGE \`ingredient_id\` \`ingredient_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`price\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`price\` decimal(6,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` ADD CONSTRAINT \`FK_d6fd52ba735eee4514d0a9a92cc\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` ADD CONSTRAINT \`FK_1525d4cd30cd2af9de7952a0fe2\` FOREIGN KEY (\`ingredientId\`) REFERENCES \`ingredients\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` ADD CONSTRAINT \`FK_a7a4b2de441d2ab00df5b0d4cdd\` FOREIGN KEY (\`product_id\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` ADD CONSTRAINT \`FK_3f9b3e7181dc8cd771e6d513b7b\` FOREIGN KEY (\`ingredient_id\`) REFERENCES \`ingredients\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` DROP FOREIGN KEY \`FK_3f9b3e7181dc8cd771e6d513b7b\``);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` DROP FOREIGN KEY \`FK_a7a4b2de441d2ab00df5b0d4cdd\``);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` DROP FOREIGN KEY \`FK_1525d4cd30cd2af9de7952a0fe2\``);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` DROP FOREIGN KEY \`FK_d6fd52ba735eee4514d0a9a92cc\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`price\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`price\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` CHANGE \`ingredient_id\` \`ingredient_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` CHANGE \`product_id\` \`product_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` DROP COLUMN \`unit_of_measure\``);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` ADD \`unit_of_measure\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`price\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`price\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` DROP COLUMN \`unit_of_measure\``);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` ADD \`unit_of_measure\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`quantity\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`discount\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`to_remove\``);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` DROP COLUMN \`ingredientId\``);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` DROP COLUMN \`productId\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`quantity\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`discount\` float NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`to_remove\` int NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` ADD CONSTRAINT \`FK_d6fd52ba735eee4514d0a9a92cc\` FOREIGN KEY (\`product_id\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` ADD CONSTRAINT \`FK_1525d4cd30cd2af9de7952a0fe2\` FOREIGN KEY (\`ingredient_id\`) REFERENCES \`ingredients\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
