import { Injectable } from '@nestjs/common';
import { DOGS } from 'datasource/dogs';
import { InjectRepository } from '@nestjs/typeorm';
import { Dog, Owner } from 'src/entities';
import { FindOptionsWhere, MoreThanOrEqual, Repository } from 'typeorm';
import { CreateDogDto } from 'src/dog/dto/create-dog.dto';
import { UpdateDogDto } from 'src/dog/dto/update-dog.dto';

@Injectable()
export class DogService {
  constructor(
    @InjectRepository(Dog) private readonly dogRepository: Repository<Dog>,
    @InjectRepository(Owner)
    private readonly ownerRepository: Repository<Owner>,
  ) {}

  async findOne(dogId: number) {
    return await this.dogRepository.findOneBy({ id: dogId });
  }

  async find(breed: string, age: number) {
    const where: FindOptionsWhere<Dog>[] = [];
    if (breed) where.push({ breed });
    if (age) where.push({ age });
    const filteredDog = await this.dogRepository.findOne({
      where,
    });
    if (filteredDog) return filteredDog;
  }

  async findAll() {
    return await this.dogRepository.find();
  }

  create(createDogDto: CreateDogDto) {
    const newDog = this.dogRepository.create(createDogDto);
    return this.dogRepository.save(newDog);
  }

  update(updateDogDto: UpdateDogDto, idDog: number) {
    return this.dogRepository.save({
      id: idDog,
      ...updateDogDto,
    });
  }

  delete(idDog: number) {
    return this.dogRepository.delete({ id: idDog });
  }
}
