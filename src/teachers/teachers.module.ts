import { Module } from '@nestjs/common';
import { TeacherController } from './teachers.controller';
import { TeachersService } from './teachers.service';

@Module({
  controllers: [TeacherController],
  providers: [TeachersService],
})
export class TeachersModule {}
