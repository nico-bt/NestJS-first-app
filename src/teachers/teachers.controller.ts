import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'All Teachers';
  }

  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId: string) {
    return `GET Teacher with Id: ${teacherId}`;
  }

  @Post()
  createTeacher(@Body() body) {
    return `CREATE Teacher with: ${JSON.stringify(body)}`;
  }

  @Get('/:teacherId/students')
  getStudentsForTeacher(@Param('teacherId') teacherId: string) {
    return `Get All students for teacher with id: ${teacherId}`;
  }

  @Put('/:teacherId/students/:studentId')
  updateTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
    @Body() body,
  ) {
    return `UPDATE student with id: ${studentId} for teacher with id: ${teacherId} with data: ${JSON.stringify(
      body,
    )}`;
  }
}
