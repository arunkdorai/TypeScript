"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter a number: ", function (num) {
    var n = Number(num);
    var isPrime = n > 1 && Array.from({ length: n - 2 }, function (_, i) { return i + 2; }).every(function (div) { return n % div !== 0; });
    console.log(isPrime ? "Prime number" : "Not a prime number");
    rl.close();
});
