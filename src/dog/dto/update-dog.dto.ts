import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty } from 'class-validator';

export class UpdateDogDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  age: number;
}
