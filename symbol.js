const firstName = Symbol();
const lastName = Symbol();

const person = {};
person[firstName] = "John";
person[lastName] = "Doe";

console.info(person[firstName]); // Outputs: John
console.info(person[lastName]);  // Outputs: Doe

for (const key of Object.getOwnPropertySymbols(person)) {
  console.info(`Symbol Key: ${key.toString()}`);
}

