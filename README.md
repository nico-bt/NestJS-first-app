<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## API using NestJS

First contact with Nest.  
Building the following API:

| Method | Endpoint                            | Description                         |
|--------|-------------------------------------|-------------------------------------|
| GET    | `/students`                         | Get all students                     |
| GET    | `/students/:studentId`              | Get a specific student by ID         |
| POST   | `/students`                         | Create a new student                 |
| PUT    | `/students/:studentId`              | Update a specific student by ID      |
| GET    | `/teachers`                         | Get all teachers                     |
| GET    | `/teachers/:teacherId`              | Get a specific teacher by ID         |
| GET    | `/teachers/:teacherId/students`     | Get all students of a specific teacher by ID |
| PUT    | `/teachers/:teacherId/students/:studentId` | Update a specific student to a specific teacher by their IDs |


