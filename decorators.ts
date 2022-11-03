// enable option in tsconfig (experimentalDecorators)

const Logger = (constructor: Function) => {
  // const Logger = (target: Function) => {
  console.log('Logging in...');
};

@Logger
class Character {
  name = 'John Wick';

  constructor() {
    console.log('Gonna kill everyone...');
  }
}

const char = new Character();

console.log(char);
