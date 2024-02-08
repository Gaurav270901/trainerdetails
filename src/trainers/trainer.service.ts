import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions, In } from 'typeorm';
import { Trainer } from './trainer.entity';

@Injectable()

export class TrainerServices{
    constructor(
        @InjectRepository(Trainer)
        private readonly trainerRepository: Repository<Trainer>,
      ) {}

      async findAll(): Promise<Trainer[]> {
        return await this.trainerRepository.find();
      }

      async findOne(id: number): Promise<Trainer> {
        const options: FindOneOptions<Trainer> = {
          where: { id }, // Filter based on the provided id
        };
      
        const trainer = await this.trainerRepository.findOne(options);
      
        if (!trainer) {
          throw new NotFoundException(`trainer with ID ${id} not found`);
        }
      
        return trainer;
      }

      async create(product: Trainer): Promise<Trainer> {
        return await this.trainerRepository.save(product);
      }

      async update(product: Trainer): Promise<Trainer> {
        return await this.trainerRepository.save(product);
      }

      async remove(id: number): Promise<void> {
        await this.findOne(id); // Ensure the product exists before removing
        await this.trainerRepository.delete(id);
      }

      async find(ids: number[]): Promise<Trainer[]> {
        return await this.trainerRepository.find({
          where: {
            id: In(ids),
          },
        });
      }
      


}
