function sumFor(data: number[]): number {
  let sum: number = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

function sumWhile(data: number[]): number {
  let sum: number = 0;
  let i: number = 0;
  while (i < data.length) {
    sum += data[i];
    i += 1;
  }
  return sum;
}

function sumRecursion(data: number[], index: number): number {
  if (index === 0) {
    return data[index];
  }
  return data[index] + sumRecursion(data, index - 1);
}

function sumTheFunctionalWay(data: number[]): number {
  return data.reduce((sum, val) => sum + val, 0);
}

const sampleData: number[] = [1, 2, 3, 4, 5];

console.log(sumFor(sampleData));
console.log(sumWhile(sampleData));
console.log(sumRecursion(sampleData, sampleData.length - 1));
console.log(sumTheFunctionalWay(sampleData));
