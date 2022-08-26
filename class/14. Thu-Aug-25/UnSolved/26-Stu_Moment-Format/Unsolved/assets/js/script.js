// Use Moment.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
var gradDate = moment();
$("#1a").text(gradDate.format("mm Do YY"));

// TODO: 2. What day of the week will 1/1/2022 be?
var weekDay = moment();
$("#2a").text(weekDay.format("[Today is] dddd"));

// TODO: 3. Out of 365, what day of the year is today?
var now = moment();
$("#3a").text(now.dayOfYear());

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time = moment();
$("#4a").text(time.format('LTS'));

// TODO: 5. What is the current Unix timestamp?
var unix = moment();
$("#5a").text(unix.unix());

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat = moment();
$("#6a").text(unixFormat.format("MM/DD/YYYY"));

