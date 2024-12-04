import * as readline from 'readline';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Enter the size of the array: ", (size: string) => {
    rl.question("Enter the array values (space-separated): ", (values: string) => {
        const arr = values.split(' ').map(Number);
        const result = arr.map((val, i) => val * (arr[i + 1] || 1)).slice(0, -1);
        console.log("Resultant array:", result);
        rl.close();
    });
});
