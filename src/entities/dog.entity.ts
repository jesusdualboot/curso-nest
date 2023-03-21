import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Owner } from './owner.entity';

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

  @ManyToOne(() => Owner, (owner) => owner.dogs)
  owner: Owner;
}
