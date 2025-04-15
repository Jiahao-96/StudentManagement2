// student.service.ts
import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private students: Student[] = [
    { id: 1, name: '张三', age: 18, grade: 3 },
    { id: 2, name: '李四', age: 17, grade: 2 },
    { id: 3, name: '王五', age: 16, grade: 1 },
  ];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    student.id = this.students.length + 1;
    this.students.push(student);
  }

  updateStudent(student: Student): void {
    const index = this.students.findIndex((s) => s.id === student.id);
    if (index !== -1) {
      this.students[index] = student;
    }
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter((s) => s.id !== id);
  }
}