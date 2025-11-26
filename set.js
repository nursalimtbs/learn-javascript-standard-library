const set = new Set();
set.add('apple');
set.add('banana');
set.add('cherry');
console.info(set); // Outputs: Set(3) { 'apple', 'banana', 'cherry' }

console.info(set.has('banana')); // Outputs: true
console.info(set.size); // Outputs: 3
set.delete('banana');
console.info(set.has('banana')); // Outputs: false

for (const item of set) {
  console.info(`Item: ${item}`);
}

set.forEach((item) => {
  console.info(`Item in forEach: ${item}`);
});

for (const item of set.values()) {
  console.info(`Value: ${item}`);
}

for (const item of set.keys()) {
  console.info(`Key: ${item}`);
}