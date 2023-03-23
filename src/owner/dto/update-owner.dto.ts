import { ApiProperty } from '@nestjs/swagger';

export class UpdateOwnerDto {
  @ApiProperty()
  address: string;

  @ApiProperty()
  phone: string;
}
