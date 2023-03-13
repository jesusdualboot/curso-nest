import { Injectable } from '@nestjs/common';
import { DOGS } from 'datasource/dogs';

@Injectable()
export class DogService {
  findOne(dogId: number) {
    return DOGS.filter((dog) => dog.id == dogId)[0];
  }

  find(breed: string, age: number) {
    let filteredDogs = [];

    if (breed && age) {
      return DOGS.filter((dog) => dog.breed == breed && dog.age >= age);
    }

    breed
      ? (filteredDogs = DOGS.filter((dog) => dog.breed == breed))
      : (filteredDogs = DOGS.filter((dog) => dog.age >= age));

    return filteredDogs;
  }

  findAll() {
    return DOGS;
  }

  create(breed: string, age: number, color: string) {
    const lastDog = DOGS.pop();
    const newDog = {
      id: lastDog.id + 1,
      breed,
      age,
      color,
    };
    DOGS.push(newDog);
    return newDog;
  }

  update(dogId: number, age: number) {
    const updDog = DOGS.filter((dog) => dog.id == dogId)[0];
    if (updDog) {
      updDog['age'] = age;
    }
    return updDog;
  }

  delete(id: number) {
    DOGS.forEach((item, index) => {
      if (item.id === id) DOGS.splice(index, 1);
    });
    return 'Dog deleted successfully';
  }
}
