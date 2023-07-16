import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';
import { CreateTeacherDto, FindTeacherResponseDto } from './dto/teacher.dto';
import { FindStudentResponseDto } from 'src/student/dto/student.dto';
import { TeachersService } from './teachers.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeachersService) {}

  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return this.teacherService.getTeachers();
  }

  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId') teacherId: string,
  ): FindTeacherResponseDto {
    return this.teacherService.getTeacherById(teacherId);
  }

  @Post()
  createTeacher(@Body() body: CreateTeacherDto) {
    return this.teacherService.createTeacher(body);
  }

  @Get('/:teacherId/students')
  getStudentsForTeacher(
    @Param('teacherId') teacherId: string,
  ): FindStudentResponseDto[] {
    return this.teacherService.getStudentsForTeacher(teacherId);
  }

  @Put('/:teacherId/students/:studentId')
  updateTeacherStudent(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): FindStudentResponseDto {
    return this.teacherService.updateTeacherStudent(teacherId, studentId);
  }
}
