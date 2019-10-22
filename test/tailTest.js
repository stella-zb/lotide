// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);

describe('#tail', () => {
  it('return 3 for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]).length, 3);
  });
});