"use strict";
console.log('test');
class Person {
    // name: string;
    constructor(name) {
        this.name = name;
        // this.name = t; // shortcut ^
    }
    descrption() {
        console.log('This guy: ' + this.name);
    }
}
const humanity = new Person('Roger');
console.log(humanity);
humanity.descrption();
const humanityCopy = { name: 'Elly', descrption: humanity.descrption };
humanityCopy.descrption();
let humanoid1;
humanoid1 = {
    name: 'Aegon',
    age: 15,
    greet(greeting) {
        console.log(greeting + ' ' + this.name);
    },
};
humanoid1.greet('Hi, I"m');
