// Implementate eqObjects Function
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
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length === keys2.length) { //check length of arrays
    for (let key of keys1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //check type
        if (!eqArrays(object1[key],object2[key])) { //check value
          return false;
        }
      }
    }
    return true;
  }
  return false;
};

// assertObjectsEqual function implementation
// take in two objects and console.log an appropriate message
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const result =  eqObjects(actual, expected);
  if (result === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// Test
assertObjectsEqual({ a: '1', b: '2',}, { a: '1', b:'2',});
assertObjectsEqual({ a: '1', b: '2' }, { b: '2', a:'1' });
assertObjectsEqual({ a: '1', b: '2',}, { a: '1', b:'2', c: '3',});