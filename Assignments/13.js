"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter a string: ", function (str) {
    var reversed = str.split('').reverse().join('');
    console.log(reversed === str ? "Palindrome" : "Not a palindrome");
    rl.close();
});
