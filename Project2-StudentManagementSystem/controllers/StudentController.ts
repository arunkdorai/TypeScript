import { StudentService } from "../services/StudentService";
import { StudentRequest } from "../models/Student";

export class StudentController {
  constructor(private studentService: StudentService) {}

  async addStudent(request: StudentRequest): Promise<void> {
    try {
      const response = await this.studentService.addStudent(request);
      console.log("Student added successfully:", response.data);
    } catch (error: unknown) {
      // Explicitly typing the error as an Error object
      if (error instanceof Error) {
        console.error("Error adding student:", error.message);
      } else {
        console.error("An unknown error occurred.");
      }
    }
  }

  async listAllStudents(): Promise<void> {
    try {
      const response = await this.studentService.getAllStudents();
      console.log("All students:", response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error listing students:", error.message);
      } else {
        console.error("An unknown error occurred.");
      }
    }
  }

  async getStudentById(id: number): Promise<void> {
    try {
      const response = await this.studentService.getStudentById(id);
      console.log("Student details:", response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error fetching student:", error.message);
      } else {
        console.error("An unknown error occurred.");
      }
    }
  }

  async updateStudent(id: number, request: StudentRequest): Promise<void> {
    try {
      const response = await this.studentService.updateStudent(id, request);
      console.log("Student updated successfully:", response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error updating student:", error.message);
      } else {
        console.error("An unknown error occurred.");
      }
    }
  }

  async deleteStudent(id: number): Promise<void> {
    try {
      const response = await this.studentService.deleteStudent(id);
      console.log("Student deleted successfully:", response.data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Error deleting student:", error.message);
      } else {
        console.error("An unknown error occurred.");
      }
    }
  }
}
