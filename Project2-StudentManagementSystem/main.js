"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const StudentService_1 = require("./services/StudentService");
const StudentController_1 = require("./controllers/StudentController");
const readline = __importStar(require("readline"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const studentService = new StudentService_1.StudentService();
        const studentController = new StudentController_1.StudentController(studentService);
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        const askQuestion = (query) => new Promise((resolve) => rl.question(query, resolve));
        console.log("Welcome to the Student Management System!");
        console.log("Options:\n1. Add Student\n2. List All Students\n3. Get Student By ID\n4. Update Student\n5. Delete Student\n6. Exit\n");
        while (true) {
            const option = yield askQuestion("Choose an option (1-6): ");
            switch (option) {
                case "1": {
                    const name = yield askQuestion("Enter name: ");
                    const age = parseInt(yield askQuestion("Enter age: "), 10);
                    const grade = yield askQuestion("Enter grade: ");
                    yield studentController.addStudent({ name, age, grade });
                    break;
                }
                case "2": {
                    yield studentController.listAllStudents();
                    break;
                }
                case "3": {
                    const id = parseInt(yield askQuestion("Enter student ID: "), 10);
                    yield studentController.getStudentById(id);
                    break;
                }
                case "4": {
                    const id = parseInt(yield askQuestion("Enter student ID to update: "), 10);
                    const name = yield askQuestion("Enter new name: ");
                    const age = parseInt(yield askQuestion("Enter new age: "), 10);
                    const grade = yield askQuestion("Enter new grade: ");
                    yield studentController.updateStudent(id, { name, age, grade });
                    break;
                }
                case "5": {
                    const id = parseInt(yield askQuestion("Enter student ID to delete: "), 10);
                    yield studentController.deleteStudent(id);
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
    });
}
main();
