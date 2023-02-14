import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoModule } from './demo/demo.module';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { GestionProduitModule } from './gestion-produit/gestion-produit.module';
import { Category } from './gestion-produit/entities/category.entity';
import { Product } from './gestion-produit/entities/product.entity';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER_NAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User,Category,Product],
      synchronize: true,
    }),

    DemoModule,
    UserModule,
    GestionProduitModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
