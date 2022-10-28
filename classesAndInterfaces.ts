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
