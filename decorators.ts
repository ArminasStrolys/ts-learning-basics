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

//----------------- FACTORY DECORATOR

const Information = (logInfo: string) => {
  return (constructor: Function) => {
    console.log(logInfo);
    console.log(logInfo);
  };
};

@Information('Info-screen here =>')
class Char {
  name = 'T-rex';

  constructor() {
    console.log('The rex is coming!');
  }
}
