import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { validStudentMiddleware } from 'src/middleware/validStuden.middleware';

@Module({
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(validStudentMiddleware).forRoutes('students/:studentId');
  }
}
