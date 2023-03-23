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

import { CreateOwnerDto } from 'src/owner/dto/create-owner.dto';
import { OwnerDto } from 'src/owner/dto/owner.dto';
import { UpdateOwnerDto } from 'src/owner/dto/update-owner.dto';
import { OwnerService } from '../services/owner.service';

@ApiTags('Owner')
@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Get(':ownerId')
  @ApiParam({
    name: 'ownerId',
    type: Number,
    description: 'The id of the owner',
    required: true,
  })
  @ApiOkResponse({
    description: 'The owner data',
    type: OwnerDto,
  })
  findOne(@Param('ownerId') ownerId: number) {
    return this.ownerService.findOne(ownerId);
  }

  @Get()
  @ApiQuery({
    name: 'firstName',
    type: String,
    description: 'The first name of the owner',
    required: false,
  })
  @ApiQuery({
    name: 'lastName',
    type: String,
    description: 'The last name of the owner',
    required: false,
  })
  @ApiOkResponse({
    description: 'The owners records',
    type: OwnerDto,
    isArray: true,
  })
  find(
    @Query('firstName') firstName: string,
    @Query('lastName') lastName: string,
  ) {
    if (lastName || firstName) {
      return this.ownerService.find(firstName, lastName);
    }
    return this.ownerService.findAll();
  }

  @Post()
  @ApiBody({
    type: CreateOwnerDto,
    description: 'The data to create owner',
    required: true,
  })
  @UsePipes(ValidationPipe)
  create(@Body() createOwnerDto: CreateOwnerDto) {
    return this.ownerService.create(createOwnerDto);
  }

  @Patch(':ownerId')
  @ApiBody({
    type: UpdateOwnerDto,
    description: 'The data to update owner',
    required: true,
  })
  @UsePipes(ValidationPipe)
  update(
    @Body() updateOwnerDto: UpdateOwnerDto,
    @Param('ownerId') ownerId: number,
  ) {
    return this.ownerService.update(updateOwnerDto, ownerId);
  }

  @Delete(':ownerId')
  @ApiParam({
    name: 'ownerId',
    type: Number,
    description: 'The id of the owner',
    required: true,
  })
  remove(@Param('ownerId') id: string) {
    return this.ownerService.delete(+id);
  }
}
