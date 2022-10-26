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

//------------------------------------------------------------------------

const combine = (
  inp1: number | string,
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
