import { Student, StudentRequest } from "../models/Student";
import { ApiResponse } from "../models/ApiResponse";

export class StudentService {
  private students: Student[] = [];
  private currentId = 1;

  async addStudent(request: StudentRequest): Promise<ApiResponse<Student>> {
    const newStudent: Student = {
      id: this.currentId++,
      ...request,
    };
    this.students.push(newStudent);
    return { success: true, data: newStudent };
  }

  async getAllStudents(): Promise<ApiResponse<Student[]>> {
    return { success: true, data: this.students };
  }

  async getStudentById(id: number): Promise<ApiResponse<Student>> {
    const student = this.students.find((s) => s.id === id);
    if (!student) {
      throw new Error(`Student with ID ${id} not found.`);
    }
    return { success: true, data: student };
  }

  async updateStudent(id: number, request: StudentRequest): Promise<ApiResponse<Student>> {
    const studentIndex = this.students.findIndex((s) => s.id === id);
    if (studentIndex === -1) {
      throw new Error(`Student with ID ${id} not found.`);
    }

    const updatedStudent = { ...this.students[studentIndex], ...request };
    this.students[studentIndex] = updatedStudent;

    return { success: true, data: updatedStudent };
  }

  async deleteStudent(id: number): Promise<ApiResponse<boolean>> {
    const studentIndex = this.students.findIndex((s) => s.id === id);
    if (studentIndex === -1) {
      throw new Error(`Student with ID ${id} not found.`);
    }

    this.students.splice(studentIndex, 1);
    return { success: true, data: true };
  }
}
