import { Injectable, NotImplementedException } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-orderItem.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from '../prisma.service';
import { Dish, Order, OrderItem, Prisma } from "@prisma/client";

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async createOrderItem(data: Prisma.OrderItemCreateInput): Promise<OrderItem> {
    return this.prisma.orderItem.create({
      data,
    });
  }

  async updateOrderItem(params: {
    where: Prisma.OrderItemWhereUniqueInput;
    data: Prisma.OrderItemUpdateInput;
  }): Promise<OrderItem> {
    return this.prisma.orderItem.update(params);
  }

  async deleteOrderItem(where: Prisma.OrderItemWhereUniqueInput): Promise<OrderItem> {
    return this.prisma.orderItem.delete({
      where,
    });
  }

  async getOrder(
    dishWhereUniqueInput: Prisma.DishWhereUniqueInput,
  ): Promise<Dish | null> {
    return this.prisma.dish.findUnique({
      where: dishWhereUniqueInput,
    });
  }

  async findOrders(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.OrderWhereUniqueInput;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput;
  }): Promise<Order[]> {
    return this.prisma.order.findMany(params);
  }

  async createOrder(data: Prisma.OrderCreateInput): Promise<Order> {
    return this.prisma.order.create({
      data,
    });
  }

  async updateOrder(params: {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.OrderUpdateInput;
  }): Promise<Order> {
    return this.prisma.order.update(params);
  }

  async deleteOrder(where: Prisma.OrderWhereUniqueInput): Promise<Order> {
    return this.prisma.order.delete({
      where,
    });
  }

  async getDishesByOrderId(orderId: number): Promise<any> {
    return new NotImplementedException();
  }

  async getTotalByOrderId(orderId: number): Promise<any> {
    return new NotImplementedException();
  }
}
