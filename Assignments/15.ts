function getArray(): number[] {
    return [1, 2, 3, 4, 5];
}

function displayArray(arr: number[]): void {
    console.log("Array values:", arr);
}

const arr = getArray();
displayArray(arr);
