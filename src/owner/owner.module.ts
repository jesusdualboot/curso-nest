import { Module } from '@nestjs/common';
import { OwnerService } from './services/owner.service';
import { OwnerController } from './controllers/owner.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Owner } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Owner])],
  controllers: [OwnerController],
  providers: [OwnerService],
})
export class OwnerModule {}
