import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ nullable: false })
  email: string;
  @ApiProperty({ nullable: false })
  password: string;
  @ApiProperty({ nullable: true })
  firstName: string;
  @ApiProperty({ nullable: true })
  lastName: string;
}
