const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

// this is the actual
const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello"]), "Hello");
assertEqual(head([]), undefined);