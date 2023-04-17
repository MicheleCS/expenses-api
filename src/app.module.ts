import { Module } from '@nestjs/common';
import { getDatabaseConfigConnection } from './config/env/connection';
import { ConfigModule } from '@nestjs/config';
import envConfig from './config/env';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { UserRoleModule } from './modules/userRole/userRole.module';
import { ExpenseModule } from './modules/expenses/expense.module';
import { CategoryModule } from './modules/category/category.module';
import { AuthModule } from './modules/auth/auth.module';
import { RoleModule } from './modules/role/role.module';

const databaseOptions = {
  ...getDatabaseConfigConnection(),
};
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(databaseOptions),
    UserModule,
    RoleModule,
    UserRoleModule,
    ExpenseModule,
    CategoryModule,
    AuthModule
  ],
})
export class AppModule {}