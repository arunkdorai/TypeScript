import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter principal amount: ", (p: string) => {
    rl.question("Enter rate of interest: ", (r: string) => {
        rl.question("Enter number of years: ", (n: string) => {
            const SI = (Number(p) * Number(r) * Number(n)) / 100;
            console.log(`Simple Interest is: ${SI}`);
            rl.close();
        });
    });
});
