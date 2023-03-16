import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Dog {
  @PrimaryGeneratedColumn({
    type: 'bigint',
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  breed: string;

  @Column({
    nullable: false,
  })
  age: number;

  @Column({
    nullable: false,
    default: '',
  })
  color: string;
}
