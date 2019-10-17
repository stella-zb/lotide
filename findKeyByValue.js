// Function Implementation
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

// Implementate findKeyByValue function that takie in an object and a value
const findKeyByValue = function(obj, givedKey) {
  const keys = Object.keys(obj); // [ 'sci_fi', 'comedy', 'drama' ]
  let result = undefined;
  let index = 0;
  for (let key of keys) {
    if (obj[keys[index]] === givedKey) {
      result = key; // sci_fi or comedy or drama
    }
    index++; // add up index
  }
  console.log(result);
  return result;
};

// TEST CODE
const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");