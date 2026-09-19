"use strict";
function sumFor(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    return sum;
}
function sumWhile(data) {
    let sum = 0;
    let i = 0;
    while (i < data.length) {
        sum += data[i];
        i += 1;
    }
    return sum;
}
function sumRecursion(data, index) {
    if (index === 0) {
        return data[index];
    }
    return data[index] + sumRecursion(data, index - 1);
}
function sumTheFunctionalWay(data) {
    return data.reduce((sum, val) => sum + val, 0);
}
const sampleData = [1, 2, 3, 4, 5];
console.log(sumFor(sampleData));
console.log(sumWhile(sampleData));
console.log(sumRecursion(sampleData, sampleData.length - 1));
console.log(sumTheFunctionalWay(sampleData));
