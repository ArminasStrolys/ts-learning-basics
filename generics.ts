// const names = ['Mac', 'Sarah']; SAME AS BELOW
const names: Array<string> = [];

//---------------

function merge<T extends object, U>(objC: T, objB: U) {
  return Object.assign(objC, objB);
}

const mergeObj = merge({ name: 'Stewart' }, { age: 66 });
console.log(mergeObj.age);
///
