const eqArrays = require('./eqArrays');

// Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
const assertArraysEqual = function(actual, expected) {
  const result = eqArrays(actual, expected);
  if (result === true) {
    console.log(`✅✅✅ Assertion passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🔴🔴🔴 Assertion failed: [${actual}] === [${expected}]`);
  }
};

module.exports = assertArraysEqual;