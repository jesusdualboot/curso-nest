import {
  Controller,
  Get,
  Param,
  Query,
  Body,
  Post,
  Patch,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { CreateDogDto } from 'src/dog/dto/create-dog.dto';
import { DogDto } from 'src/dog/dto/dog.dto';
import { UpdateDogDto } from 'src/dog/dto/update-dog.dto';
import { DogService } from '../../services/dog/dog.service';

@ApiTags('Dog')
@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get(':dogId')
  @ApiParam({
    name: 'dogId',
    type: Number,
    description: 'The id of the dog',
    required: true,
  })
  @ApiOkResponse({
    description: 'The dog data',
    type: DogDto,
  })
  findOne(@Param('dogId') dogId: number) {
    return this.dogService.findOne(dogId);
  }

  @Get()
  @ApiQuery({
    name: 'breed',
    type: String,
    description: 'The breed of the dog',
    required: false,
  })
  @ApiQuery({
    name: 'age',
    type: Number,
    description: 'The age of the dog',
    required: false,
  })
  @ApiOkResponse({
    description: 'The dogs records',
    type: DogDto,
    isArray: true,
  })
  find(@Query('breed') breed: string, @Query('age') age: number) {
    if (age || breed) {
      return this.dogService.find(breed, age);
    }
    return this.dogService.findAll();
  }

  @Post()
  @ApiBody({
    type: CreateDogDto,
    description: 'The data to create dog',
    required: true,
  })
  @UsePipes(ValidationPipe)
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogService.create(createDogDto);
  }

  @Patch(':dogId')
  @ApiBody({
    type: UpdateDogDto,
    description: 'The data to update dog',
    required: true,
  })
  @UsePipes(ValidationPipe)
  update(@Body() updateDogDto: UpdateDogDto, @Param('dogId') dogId: number) {
    return this.dogService.update(updateDogDto, dogId);
  }

  @Delete(':dogId')
  @ApiParam({
    name: 'dogId',
    type: Number,
    description: 'The id of the dog',
    required: true,
  })
  remove(@Param('dogId') id: string) {
    return this.dogService.delete(+id);
  }
}
