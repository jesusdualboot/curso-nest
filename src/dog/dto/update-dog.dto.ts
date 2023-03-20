import { IsNumber, IsNotEmpty } from 'class-validator';

export class UpdateDogDto {
  @IsNotEmpty()
  @IsNumber()
  age: number;
}
