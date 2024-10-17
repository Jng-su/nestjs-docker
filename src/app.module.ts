import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { ProductEntity } from './product/entities/product.entity';
import { LoggerModule } from 'nestjs-pino';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from './user/entities/user.entity';

@Module({
  imports: [
    LoggerModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'database',
      port: Number(process.env.MYSQL_TCP_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      synchronize: true,
      entities: [ProductEntity, UserEntity],
    }),
    ProductModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor() {
    console.log(
      `🚀 Running Database Login as MySQL User : ${process.env.MYSQL_USER}`,
    );
  }
}
