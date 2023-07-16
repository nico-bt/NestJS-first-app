import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { StudentService } from 'src/student/student.service';
import { TeacherController } from 'src/teachers/teachers.controller';
import { TeachersService } from 'src/teachers/teachers.service';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController],
  providers: [StudentService, TeachersService],
})
export class AppModule {}
