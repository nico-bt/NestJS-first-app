import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'All Teachers';
  }

  @Get('/:teacherId')
  getTeacherById() {
    return 'Get Teacher By Id';
  }

  @Post()
  createTeacher() {
    return 'CREATE a Teacher';
  }

  @Get('/:teacherId/students')
  getStudentsForTeacher() {
    return 'Get All students for a specific teacher';
  }

  @Put('/:teacherId/students/:studentId')
  updateTeacher() {
    return 'UPDATE student for a teacher';
  }
}
