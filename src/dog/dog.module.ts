import { Module } from '@nestjs/common';
import { DogService } from './services/dog/dog.service';
import { DogController } from './controllers/dog/dog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Dog])],
  controllers: [DogController],
  providers: [DogService],
})
export class DogModule {}
