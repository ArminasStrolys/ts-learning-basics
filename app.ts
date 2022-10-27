let testNum = (x: number, y: number, showResult: boolean, phrase: string) => {
  const result = x + y;
  showResult && console.log(phrase + result);
  return result;
};
const num1 = -5;
const num2 = 10.5;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = testNum(num1, num2, printResult, resultPhrase);
console.log(result);
console.log('--------------------');
//------------------------------------------------------------------------

// const person: object = { // error, need specification

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2
// Instead of ^

enum Role {
  ADMIN = 2,
  READ_ONLY,
  AUTHOR,
} // Enum labels

const person: {
  name: string;
  age: number;
  hobbies: string[];
  cars: [string, number];
  role: number;
} = {
  name: 'Jack',
  age: 99,
  hobbies: ['sports', 'cars'],
  cars: ['bmw', 3],
  role: Role.ADMIN,
};

console.log(person.name);
console.log('--------------------');
//------------------------------------------------------------------------

type numStr = string | number; // alias

const combine = (
  inp1: numStr,
  inp2: number | string,
  // resultConversion: string
  resultConversion: 'as-number' | 'as-string' // a better way
) => {
  let result;
  if (
    typeof inp1 === 'number' &&
    typeof inp2 === 'number' &&
    resultConversion === 'as-number'
  ) {
    result = +inp1 + +inp2; // +inp1 converts value to a number
  } else {
    result = inp1.toString() + ' ' + inp2.toString();
  }
  return result;
};

const test1 = combine(50, 40, 'as-number');
console.log(test1);
const test2 = combine('Marry', 'Joe', 'as-string');
console.log(test2);
const test3 = combine(66, 99, 'as-string');
console.log(test3);
console.log('--------------------');
//------------------------------------------------------------------------

const sub = (n1: number, n2: number): number => {
  // explicit setting a function return type
  return n1 - n2;
};

const prntRes = (num: number): void => {
  console.log('Number: ' + num);
  // return // can VOID youse w/ or w/out return
};

console.log('Numz without return: ' + prntRes(sub(250, 80)));

// let combinedValues; // does not throw err in TS, only after compilation
// let combinedValues: Function;
let combinedValues: (a: number, b: number) => number; // a more precise type

combinedValues = sub;
// combinedValues = prntRes; // throws err if usding precise type
// combinedValues = 10 // does not throw err in TS, only after compilation

console.log(combinedValues(9, 80));
