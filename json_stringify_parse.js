const employee = {
    name: "Alice",
    position: "Developer",
    address: {
        city: "Wonderland",
        zip: "12345"
    }
};

const jsonString = JSON.stringify(employee);
console.log(jsonString);
// Output: {"name":"Alice","position":"Developer","address":{"city":"Wonderland","zip":"12345"}}    

const parsedEmployee = JSON.parse(jsonString);
console.log(parsedEmployee);
// Output: { name: 'Alice', position: 'Developer', address: { city: 'Wonderland', zip: '12345' } }