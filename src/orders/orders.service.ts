import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-orderItem.dto';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrdersService {
  async createOrderItem(CreateOrderItemDto): Promise<any> {
    return new NotImplementedException();
  }

  async updateOrderItem(
    id: number,
    orderItem: CreateOrderItemDto,
  ): Promise<any> {
    return new NotImplementedException();
  }

  async deleteOrderItem(id: number): Promise<any> {
    return new NotImplementedException();
  }

  async createOrder(CreateOrderDto): Promise<any> {
    return new NotImplementedException();
  }

  async updateOrder(id: number, order: CreateOrderDto): Promise<any> {
    return new NotImplementedException();
  }

  async deleteOrder(id: number): Promise<any> {
    return new NotImplementedException();
  }

  async getOrder(id: number): Promise<any> {
    return new NotImplementedException();
  }

  async findAllOrders(): Promise<any> {
    return new NotImplementedException();
  }

  async getDishesByOrderId(orderId: number): Promise<any> {
    return new NotImplementedException();
  }

  async getTotalByOrderId(orderId: number): Promise<any> {
    return new NotImplementedException();
  }
}
