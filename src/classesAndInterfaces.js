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
