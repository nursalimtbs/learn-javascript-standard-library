// string instance methods
const str = " Hello, JavaScript Standard Library! ";
console.info(str.charAt(7)); // Output: J
console.info(str.indexOf("JavaScript")); // Output: 8
console.info(str.slice(1, 6)); // Output: Hello
console.info(str.toUpperCase()); // Output:  HELLO, JAVASCRIPT STANDARD LIBRARY!
console.info(str.trim()); // Output: Hello, JavaScript Standard Library!
console.info(str.replace("JavaScript", "JS")); // Output:  Hello, JS Standard Library!
console.info(str.split(" ")); // Output: [ '', 'Hello,', 'JavaScript', 'Standard', 'Library!', '' ]
console.info(str.startsWith(" Hello")); // Output: true
console.info(str.endsWith("Library! ")); // Output: true
console.info(str.includes("Standard")); // Output: true
console.info(str.repeat(2)); // Output:  Hello, JavaScript Standard Library!  Hello, JavaScript Standard Library!
console.info(str.concat(" Let's learn more.")); // Output:  Hello, JavaScript Standard Library!  Let's learn more.
console.info(str.padStart(40, "*")); // Output: *************** Hello, JavaScript Standard Library!
console.info(str.padEnd(40, "-")); // Output:  Hello, JavaScript Standard Library! -----------
console.info(str.localeCompare(" Hello, JavaScript Standard Library! ")); // Output: 0
console.info(str.normalize("NFC")); // Output:  Hello, JavaScript Standard Library!
console.info(str.valueOf()); // Output:  Hello, JavaScript Standard Library!
console.info(str.match(/JavaScript/)); // Output: [ 'JavaScript', index: 8, input: ' Hello, JavaScript Standard Library! ', groups: undefined ]
console.info(str.search(/Standard/)); // Output: 18