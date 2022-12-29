// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  // add your code here...
  arr.sort((a,b) => a - b)

  let sum = 0
  let songs = 0

  while( sum <= 60 && arr.length){
    const song = arr.shift()
    sum += song
    if(sum <= 60) songs++
  }
  return songs
};
