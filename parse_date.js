// parsing date example
const dateString = "2024-06-15T12:30:00Z";
const parsedDate = new Date(dateString);
console.info(parsedDate); // Outputs: Sat Jun 15 2024 12:30:00 GMT+0000 (Coordinated Universal Time)

console.info(parsedDate.toISOString()); // Outputs: 2024-06-15T12:30:00.000Z
console.info(parsedDate.toLocaleString()); // Outputs date in local format