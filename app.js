var testNum = function (x, y, showResult, phrase) {
    var result = x + y;
    showResult && console.log(phrase + result);
    return result;
};
var num1 = -5;
var num2 = 10.5;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = testNum(num1, num2, printResult, resultPhrase);
console.log(result);
console.log('--------------------');
//------------------------------------------------------------------------
// const person: object = { // error, need specification
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2
// Instead of ^
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 2] = "ADMIN";
    Role[Role["READ_ONLY"] = 3] = "READ_ONLY";
    Role[Role["AUTHOR"] = 4] = "AUTHOR";
})(Role || (Role = {})); // Enum labels
var person = {
    name: 'Jack',
    age: 99,
    hobbies: ['sports', 'cars'],
    cars: ['bmw', 3],
    role: Role.ADMIN
};
console.log(person.name);
console.log('--------------------');
var combine = function (inp1, inp2, 
// resultConversion: string
resultConversion // a better way
) {
    var result;
    if (typeof inp1 === 'number' &&
        typeof inp2 === 'number' &&
        resultConversion === 'as-number') {
        result = +inp1 + +inp2; // +inp1 converts value to a number
    }
    else {
        result = inp1.toString() + ' ' + inp2.toString();
    }
    return result;
};
var test1 = combine(50, 40, 'as-number');
console.log(test1);
var test2 = combine('Marry', 'Joe', 'as-string');
console.log(test2);
var test3 = combine(66, 99, 'as-string');
console.log(test3);
console.log('--------------------');
//------------------------------------------------------------------------
var sub = function (n1, n2) {
    // explicit setting a function return type
    return n1 - n2;
};
var prntRes = function (num) {
    console.log('Number: ' + num);
    // return // can VOID youse w/ or w/out return
};
console.log(prntRes(sub(250, 80)));
// let combinedValues; // does not throw err in TS, only after compilation
// let combinedValues: Function;
var combinedValues; // a more precise type
combinedValues = sub;
// combinedValues = prntRes; // throws err if usding precise type
// combinedValues = 10 // does not throw err in TS, only after compilation
console.log(combinedValues(9, 80));
