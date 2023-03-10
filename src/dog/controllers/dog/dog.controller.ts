import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { DogService } from '../../services/dog/dog.service';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get(':dogId')
  findOne(@Param('dogId') dogId: number) {
    return this.dogService.findOne(dogId);
  }

  @Get()
  find(@Query('breed') breed?: string, @Query('age') age?: number) {
    return this.dogService.find(breed, age);
  }

  @Post()
  create(@Body() body: any) {
    return this.dogService.create(body.breed, body.age, body.color);
  }

  @Patch(':dogId')
  update(@Param('dogId') dogId: number, @Body() body: any) {
    return this.dogService.update(dogId, body.age);
  }

  @Delete(':dogId')
  remove(@Param('dogId') id: string) {
    return this.dogService.delete(+id);
  }
}
