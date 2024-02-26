// user.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Get(':id')
  findUser(@Param('id') id: number): Promise<User> {
    return this.userService.findUser(+id);
  }

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }
  
  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.userService.delete(+id);
  }
}


