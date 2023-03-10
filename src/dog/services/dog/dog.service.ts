import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  findOne(dogId: number) {
    return `findOne is working, and the dogId parameter is ${dogId}`;
  }
  find(breed: string, age: number) {
    return `find function with params breed: ${breed} & age: ${age}`;
  }

  create(breed: string, age: number, color: string) {
    return `create function with properties, breed: ${breed}, age: ${age} & color: ${color}`;
  }

  update(dogId: number, age: number) {
    return `update function dog with id: ${dogId} & property, age: ${age}`;
  }

  delete(dogId: number) {
    return `delete function dog with id: ${dogId}`;
  }
}
