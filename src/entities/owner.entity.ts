import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Dog } from './dog.entity';

@Entity()
export class Owner {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  firstName: string;

  @Column({
    nullable: false,
  })
  lastName: string;

  @Column({
    nullable: false,
    default: '',
  })
  address: string;

  @Column({
    nullable: false,
    default: '',
  })
  phone: string;

  @OneToMany(() => Dog, (dog) => dog.owner)
  dogs: Dog[];
}
