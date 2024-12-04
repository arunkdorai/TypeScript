"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter your mark: ", function (mark) {
    console.log(Number(mark) >= 50 ? "Passed" : "Failed");
    rl.close();
});
