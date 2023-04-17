import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { MenuService } from './menu.service';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('menu')
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post('dishes')
  async createDish(@Body() createDishDto: CreateDishDto) {
    return this.menuService.createDish(createDishDto);
  }

  @Get('dishes/:id')
  async getDish(@Param('id') id: number) {
    return this.menuService.getDish(id);
  }

  @Get('dishes/:name')
  async findDish(@Param('name') name: string) {
    return this.menuService.findDish(name);
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
