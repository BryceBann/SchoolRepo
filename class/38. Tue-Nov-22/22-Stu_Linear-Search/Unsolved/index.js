const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];

// TODO: Complete the linearSearch function below.
const linearSearch = (array, element) => {
for (let index = 0; index < array.length; index++) {
    if (array[index] === element) {
        return index;
    }
}

return -1;
};

console.log(linearSearch(arr, 77));

const linearSearchMultipleElements = (array, element) => {
    const elemIndexes = [];
  
    for (let index = 0; index < array.length; index++) {
      if (array[index] === element) {
        elemIndexes.push(index);
      }
    }
  
    if (elemIndexes.length === 0) {
      return 'Not found';
    } else {
      return elemIndexes;
    }
  };
  
  console.log(linearSearchMultipleElements(arr, 77));
  
  module.exports = { linearSearch, linearSearchMultipleElements };
  
