// returns the average value of an array of numbers
function avg(array) {
  function sum() {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
      total += array[i];
    }
    //total is accessible in the sums execution
    return total;
  }
  //value of total is returned to where sum() is invoked
  return sum()/array.length;
}

module.exports = avg;
