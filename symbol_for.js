const person = {};

person[Symbol.for("firstName")] = "John";
person[Symbol.for("lastName")] = "Doe";

console.info(person[Symbol.for("firstName")]); // Outputs: John
console.info(person[Symbol.for("lastName")]);  // Outputs: Doe
for (const key of Object.getOwnPropertySymbols(person)) {
    console.info(`Symbol Key: ${key.toString()}`);
}

console.info(Symbol.for("firstName") === Symbol.for("firstName")); // Outputs: true
console.info(Symbol.for("lastName") === Symbol.for("lastName"));   // Outputs: true