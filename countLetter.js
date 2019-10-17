// Compare Function Implementation
/* this is a no-unused-vars
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};
*/
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

// CountLetters Function Implementation
const countLetters = function(letters) {
  // remove empty space in between character and break down the letters into each character in a array
  let charArray = letters.split(' ').join('').split('');
  let results = {};
  // count as loop through each character
  charArray.forEach(function(count) {
    results[count] = (results[count] || 0) + 1;
  });
  // console.log(results);
  // console.log(typeof results);
  return results;
};

// Test Code
const actual = countLetters('lighthouse in the house');
const expected = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
// console.log(actual);
// console.log(expected);
// console.log(typeof actual);
// console.log(typeof expected);
assertArraysEqual(actual, expected);

