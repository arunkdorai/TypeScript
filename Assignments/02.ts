import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter first number: ", (num1: string) => {
    rl.question("Enter second number: ", (num2: string) => {
        const sum = Number(num1) + Number(num2);
        console.log(`The sum is: ${sum}`);
        rl.close();
    });
});
