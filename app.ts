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
