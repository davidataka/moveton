import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  async createUser(user: CreateUserDto): Promise<any> {
    return new NotImplementedException();
  }

  async updateUser(id: number, user: CreateUserDto): Promise<any> {
    return new NotImplementedException();
  }

  async deleteUser(id: number): Promise<any> {
    return new NotImplementedException();
  }

  async getOrdersByUserId(id: number): Promise<any> {
    return new NotImplementedException();
  }

  async getUser(id: number): Promise<any> {
    return new NotImplementedException();
  }

  async findAllUsers(): Promise<any> {
    return new NotImplementedException();
  }
}
