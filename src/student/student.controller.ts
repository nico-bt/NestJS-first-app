import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }

  @Get('/:studentId')
  getStudentById() {
    return 'Get Student By Id';
  }

  @Post()
  createStudent() {
    return 'CREATE a Student';
  }

  @Put('/:studentId')
  updateStudent() {
    return 'UPDATE Student';
  }
}
