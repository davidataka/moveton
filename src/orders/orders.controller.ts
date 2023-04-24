import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderItemDto } from './dto/create-orderItem.dto';
import { CreateOrderDto } from './dto/create-order.dto';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateDishDto } from '../menu/dto/create-dish.dto';

@ApiBearerAuth()
@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get(':id')
  async getOrder(@Param('id') id: string) {
    return this.ordersService.getOrder({ id: Number(id) });
  }

  @Get()
  async getOrders() {
    return this.ordersService.findOrders({});
  }

  @Post()
  async createOrder(@Body() orderDto: CreateOrderDto) {
    //const {total, createdAt, user}=orderDto;
    return this.ordersService.createOrder(orderDto);
  }

  @Put(':id')
  async updateOrder(
    @Param('id') id: string,
    @Body() createOrderDto: CreateOrderDto,
  ) {
    return this.ordersService.updateOrder({
      where: { id: Number(id) },
      data: createOrderDto,
    });
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: number): Promise<any> {
    return this.ordersService.deleteOrder({ id: Number(id) });
  }

  @Post('items')
  async createOrderItem(
    @Body() createOrderItemDto: CreateOrderItemDto,
  ){
    //const {total, createdAt, user}=orderDto;
    return this.ordersService.createOrderItem(createOrderItemDto);
  }

  @Put('items/:id')
  async updateOrderItem(
    @Param('id') id: number,
    @Body() createOrderItemDto: CreateOrderItemDto,
  ): Promise<any> {
    return this.ordersService.updateOrderItem({
      where: { id: Number(id) },
      data: createOrderItemDto,
    });
  }

  @Delete('items/:id')
  async deleteOrderItem(@Param('id') id: number): Promise<any> {
    return this.ordersService.deleteOrderItem({ id: Number(id) });
  }
  


  @Get(':orderId/dishes')
  async getDishesByOrderId(@Param('orderId') orderId: number): Promise<any> {
    return this.ordersService.getDishesByOrderId(orderId);
  }

  @Get(':orderId/total')
  async getTotalByOrderId(@Param('orderId') orderId: number): Promise<any> {
    return this.ordersService.getTotalByOrderId(orderId);
  }
}
