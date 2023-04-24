import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumberString()
  total: number;

  @ApiProperty()
  @IsNotEmpty()
  createdAt: Date | string;

  @ApiProperty()
  @IsNotEmpty()
  user: Prisma.UserCreateNestedOneWithoutOrdersInput;
}
