const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

console.info(names.map(name => name.toUpperCase())); // Output: ["ALICE", "BOB", "CHARLIE", "DAVID", "EVE"]
console.info(names.map(name => name.length)); // Output: [5, 3, 7, 5, 3]

const numbers = [1, 2, 3, 4, 5];

console.info(numbers.reduce((sum, num) => sum + num, 0)); // Output: 15
console.info(numbers.reduce((product, num) => product * num, 1)); // Output: 120
console.info(numbers.reduceRight((concat, num) => concat + num.toString(), "")); // Output: "54321" 
