
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trainer } from './trainer.entity';
import { TrainerController } from './trainer.controller';
import { TrainerServices } from './trainer.service';
import { Course } from './course.entity';



@Module({
  imports: [TypeOrmModule.forFeature([Trainer,Course])],
  controllers: [TrainerController],
  providers: [TrainerServices],
})
export class TrainerModule {}