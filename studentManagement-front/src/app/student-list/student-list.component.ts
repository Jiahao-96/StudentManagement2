// student-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  selectedStudent: Student | null = null;
  newStudent: Student = { id: 0, name: '', age: 0, grade: 1 };

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  selectStudent(student: Student): void {
    this.selectedStudent = { ...student }; // 创建副本，避免直接修改原始数据
  }

  addStudent(): void {
    this.studentService.addStudent(this.newStudent);
    this.newStudent = { id: 0, name: '', age: 0, grade: 2 };
    this.students = this.studentService.getStudents();
  }

  updateStudent(): void {
    if (this.selectedStudent) {
      this.studentService.updateStudent(this.selectedStudent);
      this.selectedStudent = null;
      this.students = this.studentService.getStudents();
    }
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id);
    this.students = this.studentService.getStudents();
  }
}