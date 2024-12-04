import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter a number: ", (num: string) => {
    const number = Number(num);
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} x ${number} = ${i * number}`);
    }
    rl.close();
});
