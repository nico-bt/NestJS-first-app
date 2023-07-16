import { Injectable } from '@nestjs/common';
import { students, teachers } from 'src/fakeDatabase';
import { CreateTeacherDto, FindTeacherResponseDto } from './dto/teacher.dto';
import { randomUUID } from 'crypto';
import { FindStudentResponseDto } from 'src/student/dto/student.dto';

@Injectable()
export class TeachersService {
  private teachers = teachers;
  private students = students;

  getTeachers(): FindTeacherResponseDto[] {
    return this.teachers;
  }

  getTeacherById(teacherId: string): FindTeacherResponseDto {
    return this.teachers.find((teacher) => teacher.id === teacherId);
  }

  createTeacher(body: CreateTeacherDto): FindTeacherResponseDto {
    const newTeacher = {
      id: randomUUID(),
      ...body,
    };
    this.teachers.push(newTeacher);

    return newTeacher;
  }

  // Estos dos de abajo bien podrían estar en el student.service pero para primer ejemplo ok
  getStudentsForTeacher(teacherId: string): FindStudentResponseDto[] {
    const studentsForTeacher = this.students.filter(
      (student) => student.teacher === teacherId,
    );

    return studentsForTeacher;
  }

  updateTeacherStudent(
    teacherId: string,
    studentId: string,
  ): FindStudentResponseDto {
    let updatedStudent: FindStudentResponseDto;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          ...student,
          teacher: teacherId,
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
