import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter the limit: ", (limit: string) => {
    const num = Number(limit);
    let sum = 0;
    for (let i = 1; i <= num; i += 2) {
        sum += i;
    }
    console.log(`Sum of odd numbers: ${sum}`);
    rl.close();
});
