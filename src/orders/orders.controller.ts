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

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto): Promise<any> {
    return this.ordersService.createOrder(createOrderDto);
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
