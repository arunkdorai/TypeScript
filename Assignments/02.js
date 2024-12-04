"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter first number: ", function (num1) {
    rl.question("Enter second number: ", function (num2) {
        var sum = Number(num1) + Number(num2);
        console.log("The sum is: ".concat(sum));
        rl.close();
    });
});
