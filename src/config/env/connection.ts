import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import env from './';

import * as dotenv from 'dotenv';
dotenv.config();

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: env().application.host,
  port: env().application.dbPort ? parseInt(env().application.dbPort) : 5432,
  username: env().application.username,
  password: env().application.password,
  database: env().application.database,
  synchronize: false,
};
export const config2: TypeOrmModuleOptions = {
  url: process.env.DATABASE_URL,
  type: 'mysql',
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  autoLoadEntities: true,
}

export function getDatabaseConfigConnection(): TypeOrmModuleOptions {
  return {
    ...config2,
    entities: ['dist/shared/database/entities/*.entity.js'],
  };
}
