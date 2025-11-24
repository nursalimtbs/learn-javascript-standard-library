// array loop

const fruits = ["apple", "banana", "cherry"];

fruits.forEach((fruit, index) => {
    console.info(`Fruit at index ${index}: ${fruit}`);
});

fruits.forEach(function(fruit, index) {
    console.info(`Fruit at index ${index}: ${fruit}`);
});

fruits.forEach(fruit => {
    console.info(`Fruit: ${fruit}`);
});