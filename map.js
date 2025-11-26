const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.info(map); // Outputs: Map(2) { 'name' => 'Alice', 'age' => 30 }

console.info(map.get('name')); // Outputs: Alice
console.info(map.has('age')); // Outputs: true

for (const [key, value] of map) {
  console.info(`${key}: ${value}`);
}

for (const key of map.keys()) {
  console.info(`Key: ${key}`);
}

for (const value of map.values()) {
  console.info(`Value: ${value}`);
}

for (const element of map) {
    console.info(`Element: ${element[0]} : ${element[1]}`);
}