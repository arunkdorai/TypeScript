"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter a number: ", function (num) {
    var number = Number(num);
    for (var i = 1; i <= 10; i++) {
        console.log("".concat(i, " x ").concat(number, " = ").concat(i * number));
    }
    rl.close();
});
