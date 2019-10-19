// Function Implementation
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

// findKey Function
// take in object & callback
// scan object, return first key for which callback return a truthy value
// return undefined if no key is found

// if array['nome']['stars'] === 2, return that Object.keys(object) value which is 'noma';
const findKey = function(object, callback) {
  const keys = Object.keys(object);
  for (const key of keys) {  // loop through key
    if (callback(object[key])) {
      return key;
    }
  }
};


// Test
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");