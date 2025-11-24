const employee = {
    name: "Alice",
    position: "Developer"
};

Object.freeze(employee);

employee.name = "Bob"; // This will fail silently or throw an error in strict mode
console.log(employee.name); // Output: Alice