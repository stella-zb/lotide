// Function Implementation
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};
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

// implementate eqObjects function that take in two objects and return true/false based on perfect match
// Returns true if both objects have identical keys with identical values.same numbers of keys, value of each key in the object is same
// Otherwise you get back a big fat false!

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

// TEST CODE
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
const abc = { a: '1', b: '2', c:'3'};
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);