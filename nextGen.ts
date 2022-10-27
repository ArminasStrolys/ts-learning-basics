console.log('Next gen TS features (ES6+)');

const userName = 'John';
let years = 65;

years = 50;

const addition = (a: number, b: number) => {
  let result;
  result = a + b;
  return result;
};

if (years > 30) {
  let isOld = true;
  console.log(isOld);
}

// let and var differences from the scope size. Var can work in js, but not in TS

// console.log(isOld);

//---------- arrow function

const multiply = (c: number, b: number = 5) => c * b; // 5 = default argument (must be last argument)
console.log(multiply(8, 6));

const stuff = ['cars', 'planes', 'birds'];
const activeStuff = ['flying'];

activeStuff.push(...stuff); // spread on arrays
console.log(activeStuff);

const human = {
  age: 54,
  character: 'Ghandi',
};

//---------- spread, rest

const copyHuman = { ...human }; // spread on objects
console.log(copyHuman);

const divide = (...nums: number[]) => {
  return nums.reduce((currentRes, currentVal) => {
    return currentRes + currentVal;
  }, 0);
}; // rest parameter

console.log(divide(5, 5, 8, 4, 4));

//---------- destructuring

const copy1 = stuff[0]; //old, long way
const copy2 = stuff[1]; //old, long way

const [copyC1, copyC2, ...remainingCopies] = stuff; // new way of destructuring

console.log(remainingCopies);

const { character: copyName, age: copyAge } = copyHuman; // object desctructuring

console.log(copyName, copyAge);
