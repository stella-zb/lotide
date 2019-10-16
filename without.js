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

// Implement without which will return a subset of a given array, removing unwanted elements.
const without = function(source, itemsToRemove) {
  for (let i = 0; i < itemsToRemove.length; i++) {
    if (source[i] === itemsToRemove[i]) {
      source.splice(i, 1);
    }
  }
  return source;
};


// TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"],[1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);