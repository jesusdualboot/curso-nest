import { IsNotEmpty } from 'class-validator';
import { OwnerDto } from './owner.dto';

export class CreateOwnerDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  phone: string;
}
