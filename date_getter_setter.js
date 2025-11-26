const date = new Date();
date.setFullYear(2023);
date.setMonth(11);

console.info(date); // Outputs the updated Date object with year 2023 and month December (11)
console.info(`Year: ${date.getFullYear()}`); // Outputs: Year: 2023
console.info(`Month: ${date.getMonth()}`); // Outputs: Month: 11 (December)
console.info(`Date: ${date.getDate()}`); // Outputs the current date of the month
console.info(`Hours: ${date.getHours()}`); // Outputs the current hours
console.info(`Minutes: ${date.getMinutes()}`); // Outputs the current minutes
console.info(`Seconds: ${date.getSeconds()}`); // Outputs the current seconds
console.info(`Milliseconds: ${date.getMilliseconds()}`); // Outputs the current milliseconds
console.info(`Day of Week: ${date.getDay()}`); // Outputs the day of the week (0-6, where 0 is Sunday)


