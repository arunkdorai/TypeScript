"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter annual income: ", function (income) {
    var inc = Number(income);
    var tax = 0;
    // Tax calculation
    if (inc <= 250000) {
        tax = 0; // No tax for income up to 2.5 Lakhs
    }
    else if (inc <= 500000) {
        tax = (inc - 250000) * 0.05; // 5% tax for income between 2.5 Lakhs and 5 Lakhs
    }
    else if (inc <= 1000000) {
        tax = (500000 - 250000) * 0.05 + (inc - 500000) * 0.2; // 20% tax for income between 5 Lakhs and 10 Lakhs
    }
    else if (inc <= 5000000) {
        tax = (500000 - 250000) * 0.05 + (1000000 - 500000) * 0.2 + (inc - 1000000) * 0.3; // 30% tax for income between 10 Lakhs and 50 Lakhs
    }
    else {
        tax = (500000 - 250000) * 0.05 + (1000000 - 500000) * 0.2 + (5000000 - 1000000) * 0.3 + (inc - 5000000) * 0.3;
    }
    // Output the tax amount
    console.log("Income tax amount: ".concat(tax.toFixed(2)));
    rl.close();
});
