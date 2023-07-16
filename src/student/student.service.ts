import { Injectable } from '@nestjs/common';
import { students } from 'src/fakeDatabase';
import { FindStudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class StudentService {
  private students = students;

  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentResponseDto {
    return this.students.find((student) => student.id === studentId);
  }

  createStudent({ name, teacher }): FindStudentResponseDto {
    const newStudent = { id: randomUUID(), name, teacher };
    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(
    body: UpdateStudentDto,
    studentId: string,
  ): FindStudentResponseDto {
    let updatedStudent: FindStudentResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          ...student,
          ...body,
        };
        return updatedStudent;
      } else {
        return student;
      }
    });

    this.students = updatedStudentList;

    return updatedStudent;
  }
}
