// trainer.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Course } from './course.entity';

@Entity()
export class Trainer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  salary: number;

  @Column()
  skills: string;

  @Column()
  phoneNo: string;

  @Column()
  email: string;

  @OneToMany(() => Course, course => course.trainer)
  courses: Course[];
}
