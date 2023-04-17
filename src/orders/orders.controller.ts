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

@ApiBearerAuth()
@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('items')
  async createOrderItem(
    @Body() createOrderItemDto: CreateOrderItemDto,
  ): Promise<any> {
    return this.ordersService.createOrderItem(createOrderItemDto);
  }

  @Put('items/:id')
  async updateOrderItem(
    @Param('id') id: number,
    @Body() createOrderItemDto: CreateOrderItemDto,
  ): Promise<any> {
    return this.ordersService.updateOrderItem(id, createOrderItemDto);
  }

  @Delete('items/:id')
  async deleteOrderItem(@Param('id') id: number): Promise<any> {
    return this.ordersService.deleteOrderItem(id);
  }

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<any> {
    return this.ordersService.createOrder(createOrderDto);
  }

  @Put(':id')
  async updateOrder(@Param('id') id: number, @Body() createOrderDto: CreateOrderDto): Promise<any> {
    return this.ordersService.updateOrder(id, createOrderDto);
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: number): Promise<any> {
    return this.ordersService.deleteOrder(id);
  }

  @Get(':id')
  async getOrder(@Param('id') id: number): Promise<any> {
    return this.ordersService.getOrder(id);
  }

  @Get()
  async getOrders(): Promise<any> {
    return this.ordersService.findAllOrders();
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
