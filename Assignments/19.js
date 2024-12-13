"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("Enter annual income: ", (income) => {
    const inc = Number(income);
    let tax = 0;
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
    console.log(`Income tax amount: ${tax.toFixed(2)}`);
    rl.close();
});
