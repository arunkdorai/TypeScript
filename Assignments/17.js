"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) { return a + b; };
    Calculator.prototype.subtract = function (a, b) { return a - b; };
    Calculator.prototype.multiply = function (a, b) { return a * b; };
    Calculator.prototype.divide = function (a, b) { return a / b; };
    return Calculator;
}());
var calc = new Calculator();
rl.question("Enter operation (+, -, *, /): ", function (op) {
    rl.question("Enter two numbers: ", function (input) {
        var _a = input.split(' ').map(Number), a = _a[0], b = _a[1];
        var result = op === '+' ? calc.add(a, b) :
            op === '-' ? calc.subtract(a, b) :
                op === '*' ? calc.multiply(a, b) :
                    op === '/' ? calc.divide(a, b) : "Invalid Operation";
        console.log("Result:", result);
        rl.close();
    });
});
