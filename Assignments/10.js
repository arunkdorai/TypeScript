"use strict";
let array1 = [10, 20, 30, 40, 50];
let array2 = [15, 25, 35, 45, 55];
console.log("Before swapping:", { array1, array2 });
[array1, array2] = [array2, array1];
console.log("After swapping:", { array1, array2 });
