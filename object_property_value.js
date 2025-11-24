const employee = {
    name: "Alice",
    position: "Developer"
};

console.info(Object.values(employee)); // Output: ["Alice", "Developer"]
console.info(Object.entries(employee)); // Output: [["name", "Alice"], ["position", "Developer"]]
console.info(Object.getOwnPropertyNames(employee)); // Output: ["name", "position"]