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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var StudentService_1 = require("./services/StudentService");
var StudentController_1 = require("./controllers/StudentController");
var readline = require("readline");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var studentService, studentController, rl, askQuestion, option, _a, name_1, age, _b, grade, id, _c, id, _d, name_2, age, _e, grade, id, _f;
        return __generator(this, function (_g) {
            switch (_g.label) {
                case 0:
                    studentService = new StudentService_1.StudentService();
                    studentController = new StudentController_1.StudentController(studentService);
                    rl = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout,
                    });
                    askQuestion = function (query) {
                        return new Promise(function (resolve) { return rl.question(query, resolve); });
                    };
                    console.log("Welcome to the Student Management System!");
                    console.log("Options:\n1. Add Student\n2. List All Students\n3. Get Student By ID\n4. Update Student\n5. Delete Student\n6. Exit\n");
                    _g.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 25];
                    return [4 /*yield*/, askQuestion("Choose an option (1-6): ")];
                case 2:
                    option = _g.sent();
                    _a = option;
                    switch (_a) {
                        case "1": return [3 /*break*/, 3];
                        case "2": return [3 /*break*/, 8];
                        case "3": return [3 /*break*/, 10];
                        case "4": return [3 /*break*/, 13];
                        case "5": return [3 /*break*/, 19];
                        case "6": return [3 /*break*/, 22];
                    }
                    return [3 /*break*/, 23];
                case 3: return [4 /*yield*/, askQuestion("Enter name: ")];
                case 4:
                    name_1 = _g.sent();
                    _b = parseInt;
                    return [4 /*yield*/, askQuestion("Enter age: ")];
                case 5:
                    age = _b.apply(void 0, [_g.sent(), 10]);
                    return [4 /*yield*/, askQuestion("Enter grade: ")];
                case 6:
                    grade = _g.sent();
                    return [4 /*yield*/, studentController.addStudent({ name: name_1, age: age, grade: grade })];
                case 7:
                    _g.sent();
                    return [3 /*break*/, 24];
                case 8: return [4 /*yield*/, studentController.listAllStudents()];
                case 9:
                    _g.sent();
                    return [3 /*break*/, 24];
                case 10:
                    _c = parseInt;
                    return [4 /*yield*/, askQuestion("Enter student ID: ")];
                case 11:
                    id = _c.apply(void 0, [_g.sent(), 10]);
                    return [4 /*yield*/, studentController.getStudentById(id)];
                case 12:
                    _g.sent();
                    return [3 /*break*/, 24];
                case 13:
                    _d = parseInt;
                    return [4 /*yield*/, askQuestion("Enter student ID to update: ")];
                case 14:
                    id = _d.apply(void 0, [_g.sent(), 10]);
                    return [4 /*yield*/, askQuestion("Enter new name: ")];
                case 15:
                    name_2 = _g.sent();
                    _e = parseInt;
                    return [4 /*yield*/, askQuestion("Enter new age: ")];
                case 16:
                    age = _e.apply(void 0, [_g.sent(), 10]);
                    return [4 /*yield*/, askQuestion("Enter new grade: ")];
                case 17:
                    grade = _g.sent();
                    return [4 /*yield*/, studentController.updateStudent(id, { name: name_2, age: age, grade: grade })];
                case 18:
                    _g.sent();
                    return [3 /*break*/, 24];
                case 19:
                    _f = parseInt;
                    return [4 /*yield*/, askQuestion("Enter student ID to delete: ")];
                case 20:
                    id = _f.apply(void 0, [_g.sent(), 10]);
                    return [4 /*yield*/, studentController.deleteStudent(id)];
                case 21:
                    _g.sent();
                    return [3 /*break*/, 24];
                case 22:
                    {
                        console.log("Goodbye!");
                        rl.close();
                        process.exit(0);
                    }
                    _g.label = 23;
                case 23:
                    console.log("Invalid option. Please try again.");
                    _g.label = 24;
                case 24: return [3 /*break*/, 1];
                case 25: return [2 /*return*/];
            }
        });
    });
}
main();
