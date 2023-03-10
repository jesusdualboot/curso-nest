import { Module } from '@nestjs/common';
import { DogService } from './services/dog/dog.service';
import { DogController } from './controllers/dog/dog.controller';

@Module({
  controllers: [DogController],
  providers: [DogService],
})
export class DogModule {}
