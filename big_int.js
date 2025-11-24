const a = BigInt(9007199254740991); // Maximum safe integer in JavaScript
const b = BigInt(123456789012345678901234567890);
const c = a + b;

console.log(c);
console.info(typeof c); // "bigint"
