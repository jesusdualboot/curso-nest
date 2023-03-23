import { ApiProperty } from '@nestjs/swagger';

export class OwnerDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  phone: string;
}
