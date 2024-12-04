"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter the limit: ", function (limit) {
    var num = Number(limit);
    var sum = 0;
    for (var i = 1; i <= num; i += 2) {
        sum += i;
    }
    console.log("Sum of odd numbers: ".concat(sum));
    rl.close();
});
