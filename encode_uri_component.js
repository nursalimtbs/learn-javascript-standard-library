const value = 'Hello World! こんにちは 你好';

// Encode the string using encodeURIComponent
const encodedValue = encodeURIComponent(value);
console.log(encodedValue); 
// Output: Hello%20World!%20%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF%20%E4%BD%A0%E5%A5%BD

// Decode the encoded string using decodeURIComponent
const decodedValue = decodeURIComponent(encodedValue);
console.log(decodedValue); 
// Output: Hello World! こんにちは 你好