// src/app/components/student-form/student-form.component.ts
import { Component } from '@angular/core';
import { Student } from '../../models/student.model';
import { StudentService } from '../../services/student.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  student: Student = { id: 0, name: '', age: 0, grade: 0 };

  constructor(private studentService: StudentService) {}

  addStudent(): void {
    this.studentService.addStudent({ ...this.student });
    this.student = { id: 0, name: '', age: 0, grade: 0 };
  }
}