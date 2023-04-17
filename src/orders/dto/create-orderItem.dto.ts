import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderItemDto {
  @ApiProperty({ nullable: false })
  dishId: number;
  @ApiProperty({ nullable: false })
  count: number;
  @ApiProperty({ nullable: false })
  orderId: number;
}
