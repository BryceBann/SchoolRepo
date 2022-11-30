// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    // console.log(arr)
    let sum = 0
    for(i = 0; i < arr.length; i++) {
      console.log(arr[i])
    //   sum = arr[i] + sum
      sum += arr[i]
    }
    return sum
};
