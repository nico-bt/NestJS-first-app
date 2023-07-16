export class FindStudentResponseDto {
  id: string;
  name: string;
  teacher: string;
}

export class CreateStudentDto {
  name: string;
  teacher: string;
}

// Diferente para separar, quizá en futuro al actualizar queramos usar campos distintos que en CreateStudent
export class UpdateStudentDto {
  name: string;
  teacher: string;
}
