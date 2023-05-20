import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put, Render, UseInterceptors
} from '@nestjs/common';
import { CreateDishDto } from './dto/create-dish.dto';
import { MenuService } from './menu.service';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dto/create-category.dto';
import { LoggingInterceptor } from '../interceptors/logging.interceptor';

@ApiTags('menu')
@Controller('menu')
//@UseInterceptors(LoggingInterceptor)
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('dishes/:id')
  @Render('pages/dish')
  async getDish(@Param('id') id: string) {
    const dish = await this.menuService.getDish({ id: Number(id) });
    const categories = await this.menuService.getDishCategories({
      id: Number(id),
    });
    return { dish: dish, categories: categories };
  }

  @Get()
  @Render('pages/dishes')
  async getDishes() {
    const dishes = await this.menuService.findDishes({});
    return { dishes: dishes };
  }

 // @Get('categories/:categoryId/dishes')
 // async getDishesByCategoryId(@Param('categoryId') categoryId: string) {
 //   return this.menuService.findDishes({where:});
 // }

  @Post('dishes')
  async createDish(@Body() dishDto: CreateDishDto) {
    return this.menuService.createDish(dishDto);
  }

  @Put('dishes/:id')
  async updateDish(
    @Param('id') id: string,
    @Body() createDishDto: CreateDishDto,
  ): Promise<any> {
    return this.menuService.updateDish({
      where: { id: Number(id) },
      data: createDishDto,
    });
  }

  @Delete('dishes/:id')
  async deleteDish(@Param('id') id: string): Promise<any> {
    return this.menuService.deleteDish({ id: Number(id) });
  }

  @Get('categories')
  async getCategories() {
    return this.menuService.findCategories({});
  }

  @Post('categories')
  async createCategory(@Body() categoryDto: CreateCategoryDto) {
    return this.menuService.createCategory(categoryDto);
  }
}
