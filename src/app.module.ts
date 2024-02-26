// app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserRepository } from './user/user.repository';
import { User } from './user/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // Your TypeORM configuration goes here
      type: 'postgres',
      url: 'postgres://lrjczjzm:RUVKCOIYzimZctZASvb50ihQo9wfOx2g@stampy.db.elephantsql.com/lrjczjzm',
      entities: [User], // Add more entities if needed
      synchronize: true, // Set to true for development, false in production
      logging: true // Set to true to log SQL queries
    }),
    TypeOrmModule.forFeature([User, UserRepository]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
