import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class DogDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  breed: string;

  @ApiProperty()
  @IsNumber()
  age: number;

  @ApiProperty()
  color: string;
}
