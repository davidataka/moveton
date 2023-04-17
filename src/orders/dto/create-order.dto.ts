import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty({ nullable: false })
  total: number;
  @ApiProperty({ nullable: false })
  userId: number;
  @ApiProperty({ nullable: false })
  createdAt: Date;
}
