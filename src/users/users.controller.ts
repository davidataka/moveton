import {
  Body,
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('user')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
  async getUser(@Param('id') id: number): Promise<any> {
    return this.userService.getUser(id);
  }
  @Get()
  async findAllUsers(): Promise<any> {
    return this.userService.findAllUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.userService.createUser(createUserDto);
  }

  @Get(':id/orders')
  async getOrdersByUserId(@Param('id') id: number): Promise<any> {
    return this.userService.getOrdersByUserId(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<any> {
    return this.userService.deleteUser(id);
  }
}
