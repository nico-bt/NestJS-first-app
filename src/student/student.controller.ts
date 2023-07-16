import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `Get Student with Id: ${studentId}`;
  }

  @Post()
  createStudent(@Body() body) {
    return `CREATE Student with: ${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudent(@Param('studentId') studentId: string, @Body() body) {
    return `UPDATE Student with id: ${studentId} with data: ${JSON.stringify(
      body,
    )}`;
  }
}
