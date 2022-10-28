console.log('test');

class Person {
  // name: string;
  constructor(public name: string) {
    // this.name = t; // shortcut ^
  }
  descrption(this: Person) {
    console.log('This guy: ' + this.name);
  }
}

const humanity = new Person('Roger');

console.log(humanity);
humanity.descrption();

const humanityCopy = { name: 'Elly', descrption: humanity.descrption };

humanityCopy.descrption();

//-----------------------

interface Persona {
  name: string;
  age: number;

  greet(greeting: string): void;
}

let humanoid1: Persona;

humanoid1 = {
  name: 'Aegon',
  age: 15,
  greet(greeting: string) {
    console.log(greeting + ' ' + this.name);
  },
};

humanoid1.greet('Hi, I"m');

interface AddFn {
  // function interface
  (a: number, b: number): number;
}

// type AddFunc = (c: number, d: number) => number // alternative

interface OptionalArgs {
  name: string;
  surname?: string; // ? means optional argument
}
