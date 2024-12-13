"use strict";
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
exports.StudentController = void 0;
class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    addStudent(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.studentService.addStudent(request);
                console.log("Student added successfully:", response.data);
            }
            catch (error) {
                // Explicitly typing the error as an Error object
                if (error instanceof Error) {
                    console.error("Error adding student:", error.message);
                }
                else {
                    console.error("An unknown error occurred.");
                }
            }
        });
    }
    listAllStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.studentService.getAllStudents();
                console.log("All students:", response.data);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error("Error listing students:", error.message);
                }
                else {
                    console.error("An unknown error occurred.");
                }
            }
        });
    }
    getStudentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.studentService.getStudentById(id);
                console.log("Student details:", response.data);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error("Error fetching student:", error.message);
                }
                else {
                    console.error("An unknown error occurred.");
                }
            }
        });
    }
    updateStudent(id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.studentService.updateStudent(id, request);
                console.log("Student updated successfully:", response.data);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error("Error updating student:", error.message);
                }
                else {
                    console.error("An unknown error occurred.");
                }
            }
        });
    }
    deleteStudent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.studentService.deleteStudent(id);
                console.log("Student deleted successfully:", response.data);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.error("Error deleting student:", error.message);
                }
                else {
                    console.error("An unknown error occurred.");
                }
            }
        });
    }
}
exports.StudentController = StudentController;
