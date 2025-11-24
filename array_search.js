const numbers = [10, 20, 30, 40, 50];

console.info(numbers.find(num => num > 25)); // Output: 30
console.info(numbers.findIndex(num => num > 25)); // Output: 2
console.info(numbers.includes(30)); // Output: true
console.info(numbers.indexOf(40)); // Output: 3
console.info(numbers.lastIndexOf(20)); // Output: 1