// src/app/components/student-list/student-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  editingStudent: Student | null = null; 

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.students$.subscribe(students => {
      this.students = students;
    });
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id);
  }

  editStudent(student: Student): void {
    this.editingStudent = { ...student };
  }

  updateStudent(): void {
    if (this.editingStudent) {
      this.studentService.updateStudent(this.editingStudent);
      this.editingStudent = null;
    }
  }

  cancelEdit(): void {
    this.editingStudent = null;
  }
}