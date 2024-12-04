import { StudentService } from "./services/StudentService";
import { StudentController } from "./controllers/StudentController";
import * as readline from "readline";

async function main() {
  const studentService = new StudentService();
  const studentController = new StudentController(studentService);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const askQuestion = (query: string): Promise<string> =>
    new Promise((resolve) => rl.question(query, resolve));

  console.log("Welcome to the Student Management System!");
  console.log(
    "Options:\n1. Add Student\n2. List All Students\n3. Get Student By ID\n4. Update Student\n5. Delete Student\n6. Exit\n"
  );

  while (true) {
    const option = await askQuestion("Choose an option (1-6): ");

    switch (option) {
      case "1": {
        const name = await askQuestion("Enter name: ");
        const age = parseInt(await askQuestion("Enter age: "), 10);
        const grade = await askQuestion("Enter grade: ");

        await studentController.addStudent({ name, age, grade });
        break;
      }

      case "2": {
        await studentController.listAllStudents();
        break;
      }

      case "3": {
        const id = parseInt(await askQuestion("Enter student ID: "), 10);
        await studentController.getStudentById(id);
        break;
      }

      case "4": {
        const id = parseInt(await askQuestion("Enter student ID to update: "), 10);
        const name = await askQuestion("Enter new name: ");
        const age = parseInt(await askQuestion("Enter new age: "), 10);
        const grade = await askQuestion("Enter new grade: ");

        await studentController.updateStudent(id, { name, age, grade });
        break;
      }

      case "5": {
        const id = parseInt(await askQuestion("Enter student ID to delete: "), 10);
        await studentController.deleteStudent(id);
        break;
      }

      case "6": {
        console.log("Goodbye!");
        rl.close();
        process.exit(0);
      }

      default:
        console.log("Invalid option. Please try again.");
    }
  }
}

main();
