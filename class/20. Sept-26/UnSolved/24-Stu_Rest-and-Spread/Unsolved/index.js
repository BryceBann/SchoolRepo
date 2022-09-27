// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
//spreed
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
//will print the array newSongs which came from the songs array
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  //condinscing the array into one number by addition
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
//it will return 6 after adding 1 and 2 finally adding three
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
//spreed the array and once agin add together and add through
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
//will log 6 after adding through 
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
//will log 110 after adding through the array
console.log(additionSpread(1, 2, 3, 4, 100));
