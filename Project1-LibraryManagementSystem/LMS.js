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
const readline = __importStar(require("readline"));
// Base Class: User
class User {
    constructor(name) {
        this.name = name;
    }
    borrowBook(book) {
        console.log(`${this.name} borrowed the book: ${book}`);
    }
}
// Derived Class: RegularMember
class RegularMember extends User {
    constructor(name) {
        super(name);
        this.maxBorrowLimit = 2;
    }
    calculateLateFees(daysLate) {
        const feePerDay = 2;
        return daysLate * feePerDay;
    }
    borrowBook(book) {
        console.log(`${this.name} (Regular Member) borrowed the book: ${book}. Limit: ${this.maxBorrowLimit}`);
    }
}
// Derived Class: PremiumMember
class PremiumMember extends User {
    constructor(name) {
        super(name);
        this.maxBorrowLimit = 5;
    }
    calculateLateFees(daysLate) {
        const feePerDay = 1;
        return daysLate * feePerDay;
    }
    borrowBook(book) {
        console.log(`${this.name} (Premium Member) borrowed the book: ${book}. Limit: ${this.maxBorrowLimit}`);
    }
}
// Library Class
class Library {
    constructor() {
        this.books = ["Book A", "Book B", "Book C", "Book D"];
    }
    listAvailableBooks() {
        console.log("Available Books:", this.books.join(", "));
    }
    lendBook(book, user) {
        const index = this.books.indexOf(book);
        if (index !== -1) {
            this.books.splice(index, 1);
            user.borrowBook(book);
        }
        else {
            console.log(`${book} is not available.`);
        }
    }
}
// Interactive Input Setup
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Main Function
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const library = new Library();
        rl.question("Enter your name: ", (name) => {
            rl.question("Are you a Regular Member or Premium Member? (type 'regular' or 'premium'): ", (memberType) => {
                let user;
                if (memberType.toLowerCase() === "regular") {
                    user = new RegularMember(name);
                }
                else {
                    user = new PremiumMember(name);
                }
                library.listAvailableBooks();
                rl.question("Enter the book you want to borrow: ", (book) => {
                    library.lendBook(book, user);
                    rl.question("Do you want to calculate late fees? (yes/no): ", (calculateFees) => {
                        if (calculateFees.toLowerCase() === "yes") {
                            rl.question("Enter the number of days late: ", (daysLateStr) => {
                                const daysLate = parseInt(daysLateStr);
                                if (user instanceof RegularMember) {
                                    console.log(`Late Fees: $${user.calculateLateFees(daysLate)}`);
                                }
                                else if (user instanceof PremiumMember) {
                                    console.log(`Late Fees: $${user.calculateLateFees(daysLate)}`);
                                }
                                rl.close();
                            });
                        }
                        else {
                            rl.close();
                        }
                    });
                });
            });
        });
    });
}
main();
