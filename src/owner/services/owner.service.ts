import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/entities';
import { FindOptionsWhere, MoreThanOrEqual, Repository } from 'typeorm';
import { CreateOwnerDto } from 'src/owner/dto/create-owner.dto';
import { UpdateOwnerDto } from 'src/owner/dto/update-owner.dto';

@Injectable()
export class OwnerService {
  constructor(
    @InjectRepository(Owner)
    private readonly ownerRepository: Repository<Owner>,
  ) {}

  relations = ['dogs'];

  async findOne(ownerId: number, relations = this.relations) {
    return await this.ownerRepository.findOne({
      where: { id: ownerId },
      relations,
    });
  }

  async find(firstName: string, lastName: string, relations = this.relations) {
    const where: FindOptionsWhere<Owner>[] = [];
    if (firstName) where.push({ firstName });
    if (lastName) where.push({ lastName });
    const filteredOwner = await this.ownerRepository.findOne({
      where,
      relations,
    });
    if (filteredOwner) return filteredOwner;
  }

  async findAll() {
    return await this.ownerRepository.find();
  }

  create(createOwnerDto: CreateOwnerDto) {
    const newOwner = this.ownerRepository.create(createOwnerDto);
    return this.ownerRepository.save(newOwner);
  }

  update(updateOwnerDto: UpdateOwnerDto, idOwner: number) {
    return this.ownerRepository.save({
      id: idOwner,
      ...updateOwnerDto,
    });
  }

  delete(idOwner: number) {
    return this.ownerRepository.delete({ id: idOwner });
  }
}
