import { DataSource } from 'typeorm';
import config from './config';

export const dataSource = new DataSource({
  type: 'mysql',
  host: config.node_env == 'development' ? 'localhost' : 'mysql_db',
  port: config.node_env == 'development' ? 9906 : 3306,
  username: 'MYSQL_USER',
  password: 'MYSQL_PASSWORD',
  database: 'bakery_app',
  entities: ['dist/entities/**/*{.js,.ts}'],
  migrations: ['dist/migrations/**/*{.js,.ts}'],
  logging: true,
  synchronize: false,
});
