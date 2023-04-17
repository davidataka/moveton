import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateDishDto } from "./dto/create-dish.dto";

@Injectable()
export class MenuService {
  async createDish(CreateDishDto): Promise<any> {
    return new NotImplementedException();
  }

  async updateDish(id: number, dish: CreateDishDto): Promise<any> {
    return new NotImplementedException();
  }

  async deleteDish(id: number): Promise<any> {
    return new NotImplementedException();
  }
  async getDish(dishId: number): Promise<any> {
    return new NotImplementedException();
  }

  async findAllDishes(): Promise<any> {
    return new NotImplementedException();
  }

  async getDishesByCategoryId(categoryId: number): Promise<any> {
    return new NotImplementedException();
  }

  async createCategory(name: string): Promise<any> {
    return new NotImplementedException();
  }
  async updateCategory(id: number, name: string): Promise<any> {
    return new NotImplementedException();
  }

  async deleteCategory(id: number): Promise<any> {
    return new NotImplementedException();
  }

  async findAllCategories(): Promise<any> {
    return new NotImplementedException();
  }
}
