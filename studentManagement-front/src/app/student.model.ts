// student.model.ts
export interface Student {
    id: number;
    name: string;
    age: number;
    grade: number;
  }

  export interface StudentForm {
    name: string;
    age: number;
    grade: number;
  }
    export interface StudentSearch {
        name?: string;
        age?: number;
        grade?: number;
    }
  export interface StudentUpdate {
    id: number;
    name?: string;
    age?: number;
    grade?: number;
  }
  
  export interface StudentDelete {
    id: number;
  }