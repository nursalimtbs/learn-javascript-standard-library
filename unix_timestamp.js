const timestamp = Date.now();
console.info(timestamp); // Outputs the current Unix timestamp in milliseconds since January 1, 1970

const dateUnix = new Date(timestamp);
console.info(dateUnix); // Outputs the Date object corresponding to the current Unix timestamp

console.info(dateUnix.getTime()); // Outputs the Unix timestamp again using getTime() method