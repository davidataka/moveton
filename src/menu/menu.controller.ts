import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateDishDto } from './dto/create-dish.dto';
import { MenuService } from './menu.service';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from "../orders/dto/create-order.dto";

@ApiBearerAuth()
@ApiTags('menu')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('dishes')
  async createDish(@Body() createDishDto: CreateDishDto) {
    return this.menuService.createDish(createDishDto);
  }

  @Put('dishes/:id')
  async updateDish(
    @Param('id') id: number,
    @Body() createDishDto: CreateDishDto,
  ): Promise<any> {
    return this.menuService.updateDish(id, createDishDto);
  }

  @Delete('dishes/:id')
  async deleteDish(@Param('id') id: number): Promise<any> {
    return this.menuService.deleteDish(id);
  }

  @Get('dishes/:id')
  async getDish(@Param('id') id: number) {
    return this.menuService.getDish(id);
  }

  @Get()
  async getDishes() {
    return this.menuService.findAllDishes();
  }

  @Get('categories/:categoryId/dishes')
  async getDishesByCategoryId(@Param('categoryId') categoryId: number) {
    return this.menuService.getDishesByCategoryId(categoryId);
  }

  @Get('categories')
  async getCategories() {
    return this.menuService.findAllCategories();
  }

  @Post('categories')
  async createCategory(@Body('name') name: string) {
    return this.menuService.createCategory(name);
  }
}
