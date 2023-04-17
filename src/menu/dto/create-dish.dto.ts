import { ApiProperty } from '@nestjs/swagger';

export class CreateDishDto {
  @ApiProperty({ nullable: false })
  name: string;
  @ApiProperty({ nullable: false })
  description: string;
  @ApiProperty({ nullable: false })
  price: number;
  @ApiProperty({ nullable: false })
  categories: number[];
}
