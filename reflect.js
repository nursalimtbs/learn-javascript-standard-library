const person = {};

Reflect.set(person, 'name', 'Nursalim');
Reflect.set(person, 'age', 25);

console.log(Reflect.get(person, 'name')); // Nursalim
console.log(Reflect.get(person, 'age')); // 25

const hasName = Reflect.has(person, 'name');
const hasGender = Reflect.has(person, 'gender');
console.log(hasName); // true
console.log(hasGender); // false

