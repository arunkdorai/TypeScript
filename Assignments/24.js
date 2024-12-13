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
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
class Area {
    circle(radius) {
        return Math.PI * radius ** 2;
    }
    square(side) {
        return side ** 2;
    }
    rectangle(length, breadth) {
        return length * breadth;
    }
    triangle(base, height) {
        return 0.5 * base * height;
    }
}
class MyClass extends Area {
    main() {
        rl.question("Enter your choice (1: Circle, 2: Square, 3: Rectangle, 4: Triangle): ", (choice) => {
            switch (Number(choice)) {
                case 1:
                    rl.question("Enter radius: ", (radius) => {
                        console.log("Area of Circle:", this.circle(Number(radius)));
                        rl.close();
                    });
                    break;
                case 2:
                    rl.question("Enter side length: ", (side) => {
                        console.log("Area of Square:", this.square(Number(side)));
                        rl.close();
                    });
                    break;
                case 3:
                    rl.question("Enter length and breadth (space-separated): ", (values) => {
                        const [length, breadth] = values.split(' ').map(Number);
                        console.log("Area of Rectangle:", this.rectangle(length, breadth));
                        rl.close();
                    });
                    break;
                case 4:
                    rl.question("Enter base and height (space-separated): ", (values) => {
                        const [base, height] = values.split(' ').map(Number);
                        console.log("Area of Triangle:", this.triangle(base, height));
                        rl.close();
                    });
                    break;
                default:
                    console.log("Invalid choice!");
                    rl.close();
            }
        });
    }
}
const myClass = new MyClass();
myClass.main();
