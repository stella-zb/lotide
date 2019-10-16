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

// Create a function flatten which will take in an array of arrays and return a "flattened" version of the array.
const flatten = function(source) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (Array.isArray(source[i])) {
      for (let x = 0; x < source[i].length; x++) {
        newArray.push(source[i][x]);
      }
    } else {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

// TEST CODE
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
