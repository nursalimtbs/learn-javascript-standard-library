const input = "123456";
const numberValue = Number(input);

console.info(numberValue);

// number properties
console.info(Number.EPSILON);
console.info(Number.MIN_SAFE_INTEGER);
console.info(Number.MAX_SAFE_INTEGER);
console.info(Number.MIN_VALUE);
console.info(Number.MAX_VALUE);

// number static methods
console.info(Number.isFinite(123));
console.info(Number.isInteger(123.45));
console.info(Number.isSafeInteger(9007199254740991));
console.info(Number.parseFloat("123.45abc"));
console.info(Number.parseInt("123abc", 10));
console.info(Number.toString(255, 16)); // hexadecimal representation
console.info(Number.valueOf.call(123)); // primitive value of number object
console.info(Number.isNaN(NaN)); // true
console.info(Number.isNaN(123)); // false

// number instance methods
const num = 123.456;
console.info(num.toExponential(2)); // exponential notation with 2 decimal places
console.info(num.toFixed(1)); // fixed-point notation with 1 decimal place
console.info(num.toLocaleString("de-DE")); // German locale representation
console.info(num.toPrecision(5)); // five significant digits
console.info(num.toString(16)); // hexadecimal representation
console.info(num.valueOf()); // primitive value of number object


