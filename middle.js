// TEST/ASSERTION FUNCTIONS
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`✅✅✅ Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔴🔴🔴 Assertion failed: [${actual}] === [${expected}]`);
  }
};

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

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);