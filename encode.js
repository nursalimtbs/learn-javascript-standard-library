const url = 'https://example.com/search?query=javascript standard library&sort=asc';
console.log(url);

// Encode the URL
const encodedUrl = encodeURI(url);
console.log(encodedUrl);

// Decode the URL
const decodedUrl = decodeURI(encodedUrl);
console.log(decodedUrl);
