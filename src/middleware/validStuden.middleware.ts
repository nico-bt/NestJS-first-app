import { HttpException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { students } from 'src/fakeDatabase';

@Injectable()
export class validStudentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const studentId = req.params.studentId;

    const studentExists = students.some((student) => student.id === studentId);

    if (!studentExists) {
      throw new HttpException('Student does not exists in DB', 400);
    }

    next();
  }
}
