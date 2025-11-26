const originalString = "Hello, World!";

// Encode the string to Base64
const encodedString = btoa(originalString);
console.log(encodedString); // Output: SGVsbG8sIFdvcmxkIQ==

// Decode the Base64 string back to original
const decodedString = atob(encodedString);
console.log(decodedString); // Output: Hello, World!