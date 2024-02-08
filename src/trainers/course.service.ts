// course.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async findAll(): Promise<Course[]> {
    return await this.courseRepository.find();
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.courseRepository.findOne(id);
    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return course;
  }

  async create(courseData: Course): Promise<Course> {
    return await this.courseRepository.save(courseData);
  }

  async update(id: number, courseData: Course): Promise<Course> {
    await this.findOne(id); // Ensure the course exists before updating
    return await this.courseRepository.save({ ...courseData, id });
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id); // Ensure the course exists before removing
    await this.courseRepository.delete(id);
  }
}
