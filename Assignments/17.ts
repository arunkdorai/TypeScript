import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

class Calculator {
    add(a: number, b: number): number { return a + b; }
    subtract(a: number, b: number): number { return a - b; }
    multiply(a: number, b: number): number { return a * b; }
    divide(a: number, b: number): number { return a / b; }
}

const calc = new Calculator();
rl.question("Enter operation (+, -, *, /): ", (op: string) => {
    rl.question("Enter two numbers: ", (input: string) => {
        const [a, b] = input.split(' ').map(Number);
        const result = op === '+' ? calc.add(a, b) :
                       op === '-' ? calc.subtract(a, b) :
                       op === '*' ? calc.multiply(a, b) :
                       op === '/' ? calc.divide(a, b) : "Invalid Operation";
        console.log("Result:", result);
        rl.close();
    });
});
