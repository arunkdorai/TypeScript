import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter total mark percentage: ", (percentage: string) => {
    const grade = Number(percentage) > 90 ? 'A' :
                  Number(percentage) >= 80 ? 'B' :
                  Number(percentage) >= 70 ? 'C' :
                  Number(percentage) >= 60 ? 'D' :
                  Number(percentage) >= 50 ? 'E' : 'Failed';
    console.log(`Your grade is: ${grade}`);
    rl.close();
});
