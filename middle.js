const assertArraysEqual = require('./assertArraysEqual');

// Implement middle which will take in an array and return the middle-most element(s) of the given array.
// For arrays with one or two elements, there is no middle. Return an empty array.
// For arrays with odd number of elements, an array containing a single middle element should be returned.
// For arrays with an even number of elements, an array containing the two elements in the middle should be returned
const middle = function(array) {
  const result = [];
  const midIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 === 0) {
    result.push(array[midIndex - 1]);
    result.push(array[midIndex]);
    return result;
  } else {
    result.push(array[midIndex]);
    return result;
  }
};

module.exports = middle;