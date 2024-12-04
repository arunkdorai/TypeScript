var array = [11, 20, 34, 50, 33];
var evenCount = array.filter(function (num) { return num % 2 === 0; }).length;
console.log("Number of even numbers: ".concat(evenCount));
