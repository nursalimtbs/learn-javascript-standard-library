// create a regex 
const regex = /hello/i;

// test a string against the regex
console.log(regex.test('Hello World')); // true
console.log(regex.test('Goodbye World')); // false

// match a string against the regex
const str = 'Hello World';
const match = str.match(regex);
console.log(match); // [ 'Hello', index: 0, input: 'Hello World', groups: undefined ]

// replace a substring using the regex
const newStr = str.replace(regex, 'Hi');
console.log(newStr); // Hi World

// find all matches in a string
const globalRegex = /o/g;
const allMatches = str.match(globalRegex);
console.log(allMatches); // [ 'o', 'o' ]

// split a string using the regex
const splitStr = str.split(/\s/);
console.log(splitStr); // [ 'Hello', 'World' ]

// exec method to find matches
const execRegex = /l+/g;
let execMatch;
while ((execMatch = execRegex.exec(str)) !== null) {
    console.log(`Found ${execMatch[0]} at index ${execMatch.index}`);
}

const regex2 = /n[aiueo]r/ig;
const testStr = 'Naruto and NARUto are popular anime characters. nIrvana is a band.';
const matches = testStr.match(regex2);
console.log(matches); // [ 'Nar', 'NAR', 'nIr' ]