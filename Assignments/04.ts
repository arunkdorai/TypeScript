import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter your mark: ", (mark: string) => {
    console.log(Number(mark) >= 50 ? "Passed" : "Failed");
    rl.close();
});