import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateOrderItemDto {
  @ApiProperty()
  @IsNotEmpty()
  dish: Prisma.DishCreateNestedOneWithoutOrderItemsInput;
  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  count: number;
  @ApiProperty()
  @IsNotEmpty()
  order: Prisma.OrderCreateNestedOneWithoutItemsInput;
}
