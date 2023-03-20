import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateDogDto {
  @IsNotEmpty()
  breed: string;

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsNotEmpty()
  color: string;
}
