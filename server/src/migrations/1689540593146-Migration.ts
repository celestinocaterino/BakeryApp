import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1689540593146 implements MigrationInterface {
    name = 'Migration1689540593146'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`products\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`currency\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product_ingredient\` (\`id\` int NOT NULL AUTO_INCREMENT, \`product_id\` int NOT NULL, \`ingredient_id\` int NOT NULL, \`quantity\` int NOT NULL, \`unit_of_measure\` int NOT NULL, \`productId\` int NULL, \`ingredientId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`ingredients\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` ADD CONSTRAINT \`FK_d6fd52ba735eee4514d0a9a92cc\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` ADD CONSTRAINT \`FK_1525d4cd30cd2af9de7952a0fe2\` FOREIGN KEY (\`ingredientId\`) REFERENCES \`ingredients\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` DROP FOREIGN KEY \`FK_1525d4cd30cd2af9de7952a0fe2\``);
        await queryRunner.query(`ALTER TABLE \`product_ingredient\` DROP FOREIGN KEY \`FK_d6fd52ba735eee4514d0a9a92cc\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`ingredients\``);
        await queryRunner.query(`DROP TABLE \`product_ingredient\``);
        await queryRunner.query(`DROP TABLE \`products\``);
    }

}
