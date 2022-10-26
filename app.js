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
//------------------------------------------------------------------------
var combine = function (inp1, inp2, resultConversion) {
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
