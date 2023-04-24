import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { PrismaService } from '../prisma.service';
import { Dish, Category, Prisma } from '@prisma/client';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}

  async getDish(
    dishWhereUniqueInput: Prisma.DishWhereUniqueInput,
  ): Promise<Dish | null> {
    return this.prisma.dish.findUnique({
      where: dishWhereUniqueInput,
    });
  }

  async findDishes(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DishWhereUniqueInput;
    where?: Prisma.DishWhereInput;
    orderBy?: Prisma.DishOrderByWithRelationInput;
  }): Promise<Dish[]> {
    return this.prisma.dish.findMany(params);
  }

  async createDish(data: Prisma.DishCreateInput): Promise<Dish> {
    return this.prisma.dish.create({
      data,
    });
  }

  async updateDish(params: {
    where: Prisma.DishWhereUniqueInput;
    data: Prisma.DishUpdateInput;
  }): Promise<Dish> {
    return this.prisma.dish.update(params);
  }

  async deleteDish(where: Prisma.DishWhereUniqueInput): Promise<Dish> {
    return this.prisma.dish.delete({
      where,
    });
  }

  async getCategory(
    categoryWhereUniqueInput: Prisma.CategoryWhereUniqueInput,
  ): Promise<Category | null> {
    return this.prisma.category.findUnique({
      where: categoryWhereUniqueInput,
    });
  }

  async findCategories(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CategoryWhereUniqueInput;
    where?: Prisma.CategoryWhereInput;
    orderBy?: Prisma.CategoryOrderByWithRelationInput;
  }): Promise<Category[]> {
    return this.prisma.category.findMany(params);
  }

  async createCategory(data: Prisma.CategoryCreateInput): Promise<Category> {
    return this.prisma.category.create({
      data,
    });
  }

  async updateCategory(params: {
    where: Prisma.CategoryWhereUniqueInput;
    data: Prisma.CategoryUpdateInput;
  }): Promise<Category> {
    return this.prisma.category.update(params);
  }

  async deleteCategory(
    where: Prisma.CategoryWhereUniqueInput,
  ): Promise<Category> {
    return this.prisma.category.delete({
      where,
    });
  }

  async getDishesByCategoryId(orderId: number): Promise<any> {
    return new NotImplementedException();
  }
}
