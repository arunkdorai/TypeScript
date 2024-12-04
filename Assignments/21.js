"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter the size of the array: ", function (size) {
    rl.question("Enter the array values (space-separated): ", function (values) {
        var arr = values.split(' ').map(Number);
        var result = arr.map(function (val, i) { return val * (arr[i + 1] || 1); }).slice(0, -1);
        console.log("Resultant array:", result);
        rl.close();
    });
});
