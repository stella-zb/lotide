// Function Implementation
const assertEqual = function(actual, expected) {
  //actual === expected ? console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected) : console.log("🔴🔴🔴 Assertion Failed: " + actual + " !== " + expected);
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

// //Test Code
// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 2);

module.exports = assertEqual;