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
exports.StudentService = void 0;
class StudentService {
    constructor() {
        this.students = [];
        this.currentId = 1;
    }
    addStudent(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const newStudent = Object.assign({ id: this.currentId++ }, request);
            this.students.push(newStudent);
            return { success: true, data: newStudent };
        });
    }
    getAllStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            return { success: true, data: this.students };
        });
    }
    getStudentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const student = this.students.find((s) => s.id === id);
            if (!student) {
                throw new Error(`Student with ID ${id} not found.`);
            }
            return { success: true, data: student };
        });
    }
    updateStudent(id, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const studentIndex = this.students.findIndex((s) => s.id === id);
            if (studentIndex === -1) {
                throw new Error(`Student with ID ${id} not found.`);
            }
            const updatedStudent = Object.assign(Object.assign({}, this.students[studentIndex]), request);
            this.students[studentIndex] = updatedStudent;
            return { success: true, data: updatedStudent };
        });
    }
    deleteStudent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const studentIndex = this.students.findIndex((s) => s.id === id);
            if (studentIndex === -1) {
                throw new Error(`Student with ID ${id} not found.`);
            }
            this.students.splice(studentIndex, 1);
            return { success: true, data: true };
        });
    }
}
exports.StudentService = StudentService;
