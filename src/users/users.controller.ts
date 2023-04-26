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


@ApiTags('user')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<any> {
    return this.userService.getUser({ id: Number(id) });
  }
  @Get()
  async findAllUsers(): Promise<any> {
    return this.userService.findUsers({});
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() createUserDto: CreateUserDto,
  ): Promise<any> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: createUserDto,
    });
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number): Promise<any> {
    return this.userService.deleteUser({ id: Number(id) });
  }

  @Get(':id/orders')
  async getOrdersByUserId(@Param('id') id: number): Promise<any> {
    return this.userService.getOrdersByUserId(id);
  }
}
