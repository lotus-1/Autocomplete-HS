var test = require('tape');
var main = require('../public/main.js')
test('tape is working', function (t) {
    t.equal(1, 1, 'Should return 1 when given 1');
    t.end();
});

test('return string when given a word', function(t) {
  var actual = main("flower");
  var expected = 'flower';
  t.deepEqual(actual, expected, 'should return a string');
  t.end();
});
