"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter principal amount: ", function (p) {
    rl.question("Enter rate of interest: ", function (r) {
        rl.question("Enter number of years: ", function (n) {
            var SI = (Number(p) * Number(r) * Number(n)) / 100;
            console.log("Simple Interest is: ".concat(SI));
            rl.close();
        });
    });
});
