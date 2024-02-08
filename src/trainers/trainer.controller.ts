
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CourseService } from './course.service'; 
import { TrainerServices } from './trainer.service';
import { Trainer } from './trainer.entity';
import { Course } from './course.entity';





@Controller('trainer')
export class TrainerController{
    constructor(private trainerServices: TrainerServices){}

    @Get()
    index(): Promise<Trainer[]>{
        return this.trainerServices.findAll();
    }

    @Post('create')
    async create(@Body() trainerData: Trainer): Promise<any>{
        return this.trainerServices.create(trainerData);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() trainerData: Trainer): Promise<any>{
        trainerData.id = Number(id);
        console.log('Update #' + trainerData.id)
        return this.trainerServices.update(trainerData);
    }

    @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.trainerServices.remove(+id);
  }
    
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Trainer> {
    return this.trainerServices.findOne(+id);
  }  
    
}

@Controller('course')
export class CourseController{
    constructor(private courseServices: CourseService){}

    @Get()
    index(): Promise<Course[]>{
        return this.courseServices.findAll();
    }

    @Post('create')
    async create(@Body() trainerData: Course): Promise<any>{
        return this.courseServices.create(trainerData);
    }

    @Put(':id')
    async update(@Param('id') id, @Body() trainerData: Course): Promise<any>{
        trainerData.id = Number(id);
        console.log('Update #' + trainerData.id)
        return this.courseServices.update(trainerData);
    }

    @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.courseServices.remove(+id);
  }
    
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Course> {
    return this.courseServices.findOne(+id);
  }  
    
}