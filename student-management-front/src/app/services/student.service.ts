import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:8080/students';

  private studentsSubject = new BehaviorSubject<Student[]>([]);
  students$ = this.studentsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchStudents();
  }

  fetchStudents(): void {
    this.http.get<{ data: Student[] }>(this.apiUrl).subscribe(response => {
      this.studentsSubject.next(response.data);
    });
  }

  addStudent(student: Student): void {
    this.http.post(this.apiUrl, student).subscribe(() => {
      this.fetchStudents();
    });
  }

  updateStudent(student: Student): void {
    this.http.put(this.apiUrl, student).subscribe(() => {
      this.fetchStudents();
    });
  }

  deleteStudent(id: number): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.fetchStudents();
    });
  }
}