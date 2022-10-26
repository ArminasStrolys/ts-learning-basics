console.log('Hello, this is a test');
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
