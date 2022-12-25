import { resolve } from 'path';
import { registerAs } from '@nestjs/config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

import loadModules from '../helpers/loadModules';

const DEFAULT_PORT = 5432;

const migrations = loadModules<string | Function>(resolve(__dirname, '../database/migrations'));

export const getConfigDatabase = (): PostgresConnectionOptions => ({
  type: 'postgres',
  migrations: [...migrations],
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port: parseInt(process.env.DATABASE_PORT, 10) || DEFAULT_PORT,
});

export default registerAs('database', getConfigDatabase);
